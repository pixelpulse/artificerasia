import type { ReactNode } from "react";
import { ButtonLink } from "@/components/button-link";

type HeroProps = {
  kicker: string;
  title: ReactNode;
  sub?: string;
  copy?: ReactNode;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  visual: ReactNode;
  stamp?: ReactNode;
};

export function Hero({ kicker, title, sub, copy, primary, secondary, visual, stamp }: HeroProps) {
  return (
    <section className="border-b-2 border-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-20">
        <div className="flex flex-col justify-center">
          <p className="font-tech text-[11px] uppercase tracking-[0.3em] text-coral">{kicker}</p>
          <h1 className="mt-4 font-display text-[2.6rem] font-semibold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-[4.2rem]">
            {title}
          </h1>
          {sub ? (
            <p className="mt-5 font-display text-xl uppercase tracking-wide text-ink-soft sm:text-2xl">
              {sub}
            </p>
          ) : null}
          {copy ? <div className="mt-5 max-w-xl text-base/7 text-ink-soft">{copy}</div> : null}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink href={primary.href} variant="primary">
              {primary.label}
            </ButtonLink>
            {secondary ? (
              <ButtonLink href={secondary.href} variant="outline">
                {secondary.label}
              </ButtonLink>
            ) : null}
          </div>
          {stamp ? (
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <p className="stamp">{stamp}</p>
              <p className="font-tech text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                Ref: AA·2026 / Initiative 001
              </p>
            </div>
          ) : null}
        </div>
        <div className="self-center">{visual}</div>
      </div>
    </section>
  );
}
