"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/lib/site";

const ticker =
  "Open Access Hardware ★ Vetted Hackathons ★ University Programs ★ Builder Communities Across Asia ★ ";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper">
      {/* Reference strip */}
      <div className="border-b border-ink">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-1.5 font-tech text-[10px] uppercase tracking-[0.2em] text-ink-soft sm:px-6">
          <span>Ref: AA·2026 — Field Manual</span>
          <span className="hidden sm:inline">Est. Asia — Open Access Hardware</span>
        </div>
      </div>

      {/* Main bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-baseline gap-1.5 font-display text-2xl font-bold uppercase leading-none tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span aria-hidden="true" className="inline-block h-4 w-4 bg-coral" />
          ARTIFICER<span className="text-coral">.ASIA</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-stretch gap-1">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center gap-2 border-2 px-3 py-2 font-tech text-[11px] uppercase tracking-[0.12em] transition-colors duration-150 ${
                      active
                        ? "border-ink bg-ink text-cream"
                        : "border-transparent hover:border-ink hover:bg-cream"
                    }`}
                  >
                    <span className="text-[9px] opacity-70">{item.index}</span>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="border-2 border-ink bg-cream px-3 py-2 font-tech text-xs uppercase tracking-widest lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close ✕" : "Menu ▤"}
        </button>
      </div>

      {/* Mobile navigation */}
      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Primary, mobile"
          className="border-t-2 border-ink bg-cream lg:hidden"
        >
          <ul>
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href} className="border-b border-ink last:border-b-0">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center gap-3 px-4 py-4 font-tech text-sm uppercase tracking-[0.15em] ${
                      active ? "bg-ink text-cream" : "text-ink"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    <span className={active ? "text-mustard" : "text-coral"}>{item.index}</span>
                    {item.label}
                    <span aria-hidden="true" className="ml-auto">
                      →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}

      {/* Ticker */}
      <div className="overflow-hidden border-t-2 border-ink bg-ink text-cream" aria-hidden="true">
        <div className="ticker-track flex w-max whitespace-nowrap py-1 font-tech text-[10px] uppercase tracking-[0.25em]">
          <span>
            {ticker}
            {ticker}
          </span>
        </div>
      </div>
    </header>
  );
}
