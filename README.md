# ARTIFICER.ASIA

**Open Access Hardware** — free access to professional hardware for Asia's hackathons,
universities, and builders.

A three-page site with a single shared design system: retro-futurist Asian hardware
field-guide aesthetic built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Routes

| Route               | Page                            |
| ------------------- | ------------------------------- |
| `/`                 | Home                            |
| `/request-hardware` | Want Hardware for Your Event?   |
| `/sponsor-hardware` | Want to Sponsor Hardware?       |

## Develop

```bash
npm run dev     # start dev server
npm run build   # production build
npm run lint    # lint
```

## Design system

All shared tokens live in `src/app/globals.css` (palette, type, grain texture, halftone,
buttons, fields, motion). Shared components live in `src/components/`:

- `site-header` / `site-footer` — shared on every page
- `hero` — identical hero structure on all pages
- `section-heading`, `catalog-card`, `cta-panel`
- `field-image` — replaceable image slot with caption frame
- `form-sheet` — universal form used by both application forms

There are no page-specific style overrides. Pages differ only in content and section order.

## Images

Image slots resolve by hierarchical path relative to `images/`:

```
<page>/<section>/<subsection>.<ext>
```

Pages are `home/`, `hardware-for-event/`, and `sponsor-hardware/`; sections match the
section headings; subsections cover button-driven sets (e.g. `home/1_Access/*`).
Folder names carry an order prefix (`0_`, `1_`, …) matching page/section order.
`.png`, `.jpg`, and `.webp` are supported. Missing files render a visible linked
placeholder such as `[home/2_Hardware/what-we-do](#home/2_Hardware/what-we-do)`. See `images/README.md`
for the full layout.

`public/images` is a symlink to the root `images/` folder.

## Forms

The two forms are intentionally not connected to a backend. Submitting shows a clearly
labeled placeholder message — no data is sent or stored.
