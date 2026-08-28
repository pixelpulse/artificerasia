"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export type FormField = {
  name: string;
  label: string;
  type?: "text" | "email" | "number" | "textarea" | "select";
  required?: boolean;
  options?: string[];
  placeholder?: string;
  hint?: string;
  full?: boolean;
};

type FormSheetProps = {
  anchorId: string;
  sheetCode: string;
  sheetTitle: string;
  fields: FormField[];
  buttonLabel: string;
  note: string;
};

/**
 * Universal form component styled as an equipment sheet / manifest.
 * Not connected to a backend — submission shows a clearly labeled placeholder.
 */
export function FormSheet({
  anchorId,
  sheetCode,
  sheetTitle,
  fields,
  buttonLabel,
  note,
}: FormSheetProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id={anchorId}
      aria-labelledby={`${anchorId}-title`}
      className="border-2 border-ink bg-cream shadow-[6px_6px_0_0_var(--color-ink)]"
    >
      <header className="flex flex-wrap items-end justify-between gap-3 border-b-2 border-ink bg-ink px-4 py-4 text-cream sm:px-6">
        <div>
          <p className="font-tech text-[10px] uppercase tracking-[0.3em] text-mustard">
            {sheetCode}
          </p>
          <h2
            id={`${anchorId}-title`}
            className="mt-1 font-display text-xl font-semibold uppercase tracking-tight sm:text-2xl"
          >
            {sheetTitle}
          </h2>
        </div>
        <p className="hidden font-tech text-[10px] uppercase tracking-[0.2em] text-cream/60 md:block">
          Sheet 01 of 01 · Draft
        </p>
      </header>

      <form
        className="grid gap-5 p-4 sm:grid-cols-2 sm:gap-6 sm:p-6"
        onSubmit={handleSubmit}
        noValidate={false}
      >
        {fields.map((field) => (
          <FieldControl key={field.name} field={field} />
        ))}
        <div className="sm:col-span-2">
          <button type="submit" className="btn bg-coral text-cream hover:bg-coral-dark">
            <span>{buttonLabel}</span>
            <span aria-hidden="true" className="text-sm leading-none">
              →
            </span>
          </button>
          {submitted ? (
            <p
              role="status"
              className="mt-5 border-2 border-dashed border-coral bg-paper p-4 font-tech text-[11px] uppercase leading-relaxed tracking-wider"
            >
              Submission placeholder — this form is not connected to a backend. Nothing was sent or
              stored.
            </p>
          ) : null}
        </div>
      </form>

      <footer className="border-t-2 border-ink px-4 py-3 font-tech text-[10px] uppercase tracking-[0.15em] text-ink-soft sm:px-6">
        {note}
      </footer>
    </section>
  );
}

function FieldControl({ field }: { field: FormField }) {
  const id = `field-${field.name}`;

  return (
    <div className={field.full ? "sm:col-span-2" : undefined}>
      <label
        htmlFor={id}
        className="mb-1.5 block font-tech text-[11px] uppercase tracking-[0.15em]"
      >
        {field.label}
        {field.required ? (
          <span className="text-coral" aria-hidden="true">
            {" "}
            *
          </span>
        ) : null}
      </label>
      {field.type === "textarea" ? (
        <textarea
          id={id}
          name={field.name}
          rows={4}
          required={field.required}
          placeholder={field.placeholder}
          className="field-input"
        />
      ) : field.type === "select" ? (
        <select
          id={id}
          name={field.name}
          required={field.required}
          defaultValue=""
          className="field-input"
        >
          <option value="" disabled>
            — select —
          </option>
          {field.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={field.name}
          type={field.type ?? "text"}
          required={field.required}
          placeholder={field.placeholder}
          className="field-input"
        />
      )}
      {field.hint ? (
        <p className="mt-1.5 font-tech text-[10px] uppercase tracking-[0.1em] text-ink-soft">
          {field.hint}
        </p>
      ) : null}
    </div>
  );
}
