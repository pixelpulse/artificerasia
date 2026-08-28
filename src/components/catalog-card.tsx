import type { ReactNode } from "react";

type CatalogCardProps = {
  code: string;
  title: string;
  children: ReactNode;
};

export function CatalogCard({ code, title, children }: CatalogCardProps) {
  return (
    <article className="flex flex-col border-2 border-ink bg-cream transition-shadow duration-150 hover:shadow-[4px_4px_0_0_var(--color-ink)]">
      <div className="flex items-center justify-between border-b border-ink px-4 py-2.5">
        <span className="font-tech text-[10px] uppercase tracking-[0.25em] text-ink-soft">
          {code}
        </span>
        <span aria-hidden="true" className="halftone h-3.5 w-3.5 text-coral" />
      </div>
      <div className="flex flex-1 flex-col px-4 py-4">
        <h3 className="font-display text-xl font-semibold uppercase leading-tight tracking-tight">
          {title}
        </h3>
        <p className="mt-2 text-sm/6 text-ink-soft">{children}</p>
      </div>
    </article>
  );
}
