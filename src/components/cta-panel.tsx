import type { ReactNode } from "react";
import { ButtonLink } from "@/components/button-link";

const tones = {
  coral: "bg-coral text-cream",
  fog: "bg-fog text-ink",
  lavender: "bg-lavender text-ink",
  olive: "bg-olive text-cream",
} as const;

type CtaPanelProps = {
  tone?: keyof typeof tones;
  code: string;
  title: string;
  href: string;
  button: string;
  children: ReactNode;
};

export function CtaPanel({ tone = "coral", code, title, href, button, children }: CtaPanelProps) {
  return (
    <section
      className={`flex flex-col border-2 border-ink p-6 shadow-[6px_6px_0_0_var(--color-ink)] sm:p-8 ${tones[tone]}`}
    >
      <p className="font-tech text-[10px] uppercase tracking-[0.25em] opacity-80">{code}</p>
      <h2 className="mt-3 font-display text-2xl font-semibold uppercase leading-tight tracking-tight sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 flex-1 text-sm/6 opacity-90">{children}</p>
      <div className="mt-6">
        <ButtonLink href={href} variant="ink">
          {button}
        </ButtonLink>
      </div>
    </section>
  );
}
