import type { ReactNode } from "react";

type ImageFrameProps = {
  /** Caption line 1 — e.g. "Fig. 01 · image1" */
  label: string;
  /** Caption line 2 — subject description */
  subject: string;
  /** Media content (img or placeholder) */
  children: ReactNode;
};

/**
 * Universal image frame shell shared by every framed image on the site:
 * 2px ink border, hard offset shadow, 16:9 crop, corner registration marks,
 * and the two-line technical caption.
 */
export function ImageFrame({ label, subject, children }: ImageFrameProps) {
  return (
    <figure className="self-start border-2 border-ink bg-cream shadow-[6px_6px_0_0_var(--color-ink)]">
      <div className="relative aspect-[16/9] overflow-hidden border-b-2 border-ink">
        {children}
        {/* Corner registration marks */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-2 top-2 h-3 w-3 border-l-2 border-t-2 border-cream"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-2 top-2 h-3 w-3 border-r-2 border-t-2 border-cream"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-2 left-2 h-3 w-3 border-b-2 border-l-2 border-cream"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-2 right-2 h-3 w-3 border-b-2 border-r-2 border-cream"
        />
      </div>
      <figcaption className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 px-3 py-2 font-tech text-[10px] uppercase tracking-[0.18em]">
        <span className="text-coral">{label}</span>
        <span className="text-right text-ink-soft">{subject}</span>
      </figcaption>
    </figure>
  );
}
