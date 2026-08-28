import Link from "next/link";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t-2 border-ink bg-ink text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <p className="font-display text-3xl font-bold uppercase leading-none tracking-tight">
            ARTIFICER<span className="text-coral">.ASIA</span>
          </p>
          <p className="mt-3 font-tech text-xs uppercase tracking-[0.2em] text-mustard">
            Hardware Without Gatekeepers.
          </p>
          <p className="mt-4 max-w-xs text-sm/6 text-cream/70">{site.support}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-tech text-[11px] uppercase tracking-[0.25em] text-mustard">Pages</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="underline-offset-4 decoration-2 hover:text-mustard hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-tech text-[11px] uppercase tracking-[0.25em] text-mustard">
            Contact
          </h2>
          <p className="mt-4 text-sm/6 text-cream/70">Contact channel to be confirmed.</p>
          <span className="mt-2 block border-b border-dashed border-cream/50 pb-0.5 font-tech text-xs uppercase tracking-widest">
            placeholder
          </span>
        </div>

        <div>
          <h2 className="font-tech text-[11px] uppercase tracking-[0.25em] text-mustard">Review</h2>
          <p className="mt-4 text-sm/6 text-cream/70">
            Programs and equipment are subject to review and availability.
          </p>
          <p className="mt-4 font-tech text-[10px] uppercase tracking-widest text-cream/50">
            No rentals · No storefront · Field manual ed. 01
          </p>
        </div>
      </div>

      <div className="border-t border-cream/20">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 font-tech text-[10px] uppercase tracking-[0.2em] text-cream/60 sm:px-6">
          <span>© 2026 ARTIFICER.ASIA — Open Access Hardware</span>
          <span aria-hidden="true" className="halftone h-2.5 w-28 text-lavender opacity-60" />
          <span>Asia · Field Manual · Ed. 01</span>
        </div>
      </div>
    </footer>
  );
}
