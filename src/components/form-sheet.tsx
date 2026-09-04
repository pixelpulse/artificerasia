"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { site } from "@/lib/site";

/**
 * FormSubmit AJAX endpoint — submissions are emailed to the address below.
 * The first-ever submission triggers a one-time confirmation email to that
 * address; click the link once to activate delivery.
 */
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${site.email}`;

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

type SubjectConfig = {
  /** Field whose trimmed value is bracketed at the start, e.g. "organization". */
  orgField: string;
  /** Verb phrase after the bracket, e.g. "Need Hardware". */
  verb: string;
  /** Conditional segments appended only when the field has a value. */
  segments?: Array<{ field: string; prefix: string; suffix?: string }>;
};

type FormSheetProps = {
  anchorId: string;
  sheetCode: string;
  sheetTitle: string;
  fields: FormField[];
  buttonLabel: string;
  note: string;
  /** Serializable spec for the email subject line, built from submitted values. */
  subject: SubjectConfig;
};

function buildSubject(config: SubjectConfig, values: Record<string, string>): string {
  const org = values[config.orgField]?.trim() || "Untitled organization";
  let result = `[${org}] ${config.verb}`;
  for (const segment of config.segments ?? []) {
    const value = values[segment.field]?.trim();
    if (value) {
      result += `${segment.prefix}${value}${segment.suffix ?? ""}`;
    }
  }
  return result;
}

type SubmitStatus = "idle" | "sending" | "sent" | "error";

/**
 * Universal form component styled as an equipment sheet / manifest.
 * Runs on a fully static site, so submissions are emailed via FormSubmit's
 * AJAX endpoint — no backend required.
 */
export function FormSheet({
  anchorId,
  sheetCode,
  sheetTitle,
  fields,
  buttonLabel,
  note,
  subject,
}: FormSheetProps) {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot: silently drop bot submissions that fill the hidden field.
    if (String(formData.get("_honey") ?? "").length > 0) {
      return;
    }

    const values: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      if (key.startsWith("_")) continue;
      values[key] = String(value);
    }

    const payload: Record<string, string> = {
      _subject: buildSubject(subject, values),
      _template: "table",
      _captcha: "false",
      _replyTo: values.email ?? "",
      ...values,
    };

    setStatus("sending");
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error(`FormSubmit responded ${response.status}`);
      }
      setStatus("sent");
    } catch {
      setStatus("error");
    }
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
        <input
          type="text"
          name="_honey"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />
        {fields.map((field) => (
          <FieldControl key={field.name} field={field} />
        ))}
        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={status === "sending"}
            className="btn bg-coral text-cream hover:bg-coral-dark disabled:cursor-wait disabled:opacity-60"
          >
            <span>{status === "sending" ? "Sending…" : buttonLabel}</span>
            <span aria-hidden="true" className="text-sm leading-none">
              →
            </span>
          </button>
          {status === "sent" ? (
            <p
              role="status"
              className="mt-5 border-2 border-dashed border-coral bg-paper p-4 font-tech text-[11px] uppercase leading-relaxed tracking-wider"
            >
              Submission sent. Your request has been emailed to the ARTIFICER.ASIA team — we will
              follow up at the address you provided.
            </p>
          ) : null}
          {status === "error" ? (
            <p
              role="alert"
              className="mt-5 border-2 border-dashed border-coral bg-paper p-4 font-tech text-[11px] uppercase leading-relaxed tracking-wider"
            >
              Your submission could not be sent automatically. Please email it directly to{" "}
              <a
                href={`mailto:${site.email}`}
                className="underline underline-offset-4 hover:text-coral"
              >
                {site.email}
              </a>
              .
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
