# images — hierarchical structure

Image slots resolve by path, relative to this folder:

```
<page>/<section>/<subsection>.<ext>
```

- **page** — which tab the image belongs to
- **section** — the page section (same names as the section headings)
- **subsection** — optional, e.g. a button-driven image set
- **ext** — `.webp`, `.png`, or `.jpg` (tried in that order)

## Encoding convention

`.webp` is the primary format. Every image ships as a WebP copy (quality 90,
or 95 for the noisiest photographs) of the original PNG, typically 6–9x
smaller with no visible quality loss. The PNGs are kept alongside as
fallbacks for non-WebP browsers and as the encode source; regenerate the
WebP copies with sharp (e.g. `sharp(p).webp({ quality: 90 })`) when an
original changes.

## Layout

```
images/
├── 01_home/                       # Home tab (/)
│   ├── 0_Intro/                   # hero
│   │   └── 0_hero.png             # hero collage (FIG. 01)
│   ├── 1_Access/                  # section 01 — Talent is everywhere (button-driven)
│   │   ├── 0_robotics.png
│   │   ├── 1_ai-edge.png
│   │   ├── 2_sensing.png
│   │   ├── 3_imaging.png
│   │   └── 4_prototyping.png
│   ├── 2_Hardware/                # section 02 — You bring the ideas (FIG. 07)
│   │   └── 0_what-we-do.png
│   └── 3_Deployment/              # section 03 — Next Deployment in Goa (carousel)
│       ├── 0_main-exterior.png
│       ├── 1_mentor-cabins.png
│       ├── 2_communal-lounge.png
│       ├── 3_walkway-to-beach.png
│       └── 4_launch-expansion.png # (unused — carousel replaced it)
├── 02_need_hardware/              # Need Hardware tab (/request-hardware)
│   ├── 0_hero.png                 # hero (FIG. 03)
│   └── 1_how-it-works.png         # section — How it works (FIG. 04)
├── 03_have_hardware/              # Have Hardware tab (/sponsor-hardware)
│   ├── 0_hero.png                 # hero (FIG. 05)
│   └── 1_what-gets-documented.png # section — What gets documented (FIG. 06)
└── 04_ethos/                      # Our Ethos tab (/our-philosophy)
    └── 0_hero.png                 # page background photo
```

Folder names carry an order prefix (`0_`, `1_`, …) matching the section order on the
page; subsection image sets (like the Access buttons) are numbered the same way.
Every image file — including single images in a folder — carries the same `N_` prefix
reflecting its order on the page or in its carousel.

Missing files render a visible linked placeholder, e.g. `[01_home/2_Hardware/0_what-we-do](#01_home/2_Hardware/0_what-we-do)`.

Recommended size: 1672 × 941 (16:9). All current files are placeholders — swap them freely.
