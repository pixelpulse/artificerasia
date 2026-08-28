# images — hierarchical structure

Image slots resolve by path, relative to this folder:

```
<page>/<section>/<subsection>.<ext>
```

- **page** — which tab the image belongs to
- **section** — the page section (same names as the section headings)
- **subsection** — optional, e.g. a button-driven image set
- **ext** — `.png`, `.jpg`, or `.webp` (tried in that order)

## Layout

```
images/
├── home/                          # Home tab (/)
│   ├── 0_Intro/                   # hero
│   │   └── hero.png               # hero collage (FIG. 01)
│   ├── 1_Access/                  # section 01 — Talent is everywhere (button-driven)
│   │   ├── 0_robotics.png
│   │   ├── 1_ai-edge.png
│   │   ├── 2_sensing.png
│   │   ├── 3_imaging.png
│   │   └── 4_prototyping.png
│   ├── 2_Hardware/                # section 02 — We bring the hardware (FIG. 07)
│   │   └── what-we-do.png
│   └── 3_Deployment/              # section 03 — Next Deployment in Goa (carousel)
│       ├── 0_main-exterior.png
│       ├── 1_mentor-cabins.png
│       ├── 2_communal-lounge.png
│       └── 3_walkway-to-beach.png
├── hardware-for-event/            # Want Hardware tab (/request-hardware)
│   ├── hero.png                   # hero (FIG. 03)
│   └── how-it-works.png           # section — How it works (FIG. 04)
└── sponsor-hardware/              # Sponsor tab (/sponsor-hardware)
    ├── hero.png                   # hero (FIG. 05)
    └── what-gets-documented.png   # section — What gets documented (FIG. 06)
```

Folder names carry an order prefix (`0_`, `1_`, …) matching the section order on the
page; subsection image sets (like the Access buttons) are numbered the same way.

Missing files render a visible linked placeholder, e.g. `[home/2_Hardware/what-we-do](#home/2_Hardware/what-we-do)`.

Recommended size: 1672 × 941 (16:9). All current files are placeholders — swap them freely.
