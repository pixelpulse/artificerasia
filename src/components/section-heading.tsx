import type { ReactNode } from "react";

type SectionHeadingProps = {
  index: string;
  kicker: string;
  title: ReactNode;
};

export function SectionHeading({ index, kicker, title }: SectionHeadingProps) {
  return (
    <header className="mb-8 border-t-2 border-ink pt-4 lg:mb-12">
      <p className="font-tech text-[11px] uppercase tracking-[0.3em]">
        <span className="text-coral">{index}</span>
        <span className="mx-1 text-ink-soft" aria-hidden="true">
          /
        </span>
        <span className="text-ink-soft">{kicker}</span>
      </p>
      <h2 className="mt-3 max-w-4xl font-display text-3xl font-semibold uppercase leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </header>
  );
}
