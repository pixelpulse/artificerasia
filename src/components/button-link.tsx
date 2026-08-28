import Link from "next/link";
import type { ReactNode } from "react";

const variants = {
  primary: "bg-coral text-cream hover:bg-coral-dark",
  outline: "bg-transparent text-ink hover:bg-ink hover:text-cream",
  ink: "bg-ink text-cream hover:bg-coral-dark",
} as const;

type ButtonLinkProps = {
  href: string;
  variant?: keyof typeof variants;
  children: ReactNode;
};

export function ButtonLink({ href, variant = "primary", children }: ButtonLinkProps) {
  return (
    <Link href={href} className={`btn ${variants[variant]}`}>
      <span>{children}</span>
      <span aria-hidden="true" className="text-sm leading-none">
        →
      </span>
    </Link>
  );
}
