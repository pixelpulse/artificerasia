"use client";

import { useState } from "react";
import { ImageFrame } from "@/components/image-frame";

const equipment = [
  {
    index: 0,
    slug: "robotics",
    label: "Robotics",
    subject: "Robotics and autonomous systems",
    alt: "Robotics and autonomous systems equipment",
  },
  {
    index: 1,
    slug: "ai-edge",
    label: "AI & Edge",
    subject: "AI and edge-computing devices",
    alt: "AI and edge-computing equipment",
  },
  {
    index: 2,
    slug: "sensing",
    label: "Sensing",
    subject: "Sensors and IoT equipment",
    alt: "Sensors and IoT equipment",
  },
  {
    index: 3,
    slug: "imaging",
    label: "Imaging",
    subject: "Cameras and imaging systems",
    alt: "Cameras and imaging systems equipment",
  },
  {
    index: 4,
    slug: "prototyping",
    label: "Prototyping",
    subject: "Microcontrollers and prototyping systems",
    alt: "Microcontrollers and prototyping systems equipment",
  },
] as const;

const extensions = ["png", "jpg", "webp"] as const;

/** Image folder for Home section 01, relative to `images/`. */
const base = "home/1_Access";

type EquipmentBrowserProps = {
  /** GitHub Pages base path prefix ("" locally / custom domain) */
  basePath?: string;
};

/**
 * Interactive equipment index for Home section 01.
 * Tag buttons filter the framed image; when a gear image is missing from
 * images/home/1_Access/, a visible linked placeholder is shown instead.
 */
export function EquipmentBrowser({ basePath = "" }: EquipmentBrowserProps) {
  const [selectedSlug, setSelectedSlug] = useState<string>(equipment[0].slug);
  const [failIndex, setFailIndex] = useState(0);

  const selected = equipment.find((item) => item.slug === selectedSlug) ?? equipment[0];
  const showingPlaceholder = failIndex >= extensions.length;
  const src = showingPlaceholder
    ? null
    : `${basePath}/images/${base}/${selected.index}_${selected.slug}.${extensions[Math.min(failIndex, extensions.length - 1)]}`;

  function select(slug: string) {
    setSelectedSlug(slug);
    setFailIndex(0);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
      <div className="flex flex-col gap-8">
        <div className="max-w-2xl space-y-5 text-base/7">
          <p>
            Many developers and students across Asia have the skills and ideas to build meaningful
            technology but lack access to professional equipment. Advanced hardware is expensive,
            difficult to transport, and often concentrated within well-funded companies and
            institutions.
          </p>
          <p className="font-display text-2xl font-semibold uppercase leading-tight tracking-wide text-coral">
            ARTIFICER.ASIA exists to close that gap.
          </p>
        </div>

        <aside className="self-start border-2 border-ink bg-cream p-5 shadow-[4px_4px_0_0_var(--color-ink)]">
          <p className="font-tech text-[10px] uppercase tracking-[0.25em] text-ink-soft">
            Equipment index — indicative
          </p>
          <div role="group" aria-label="Equipment categories" className="mt-4 flex flex-wrap gap-2">
            {equipment.map((item) => {
              const active = item.slug === selectedSlug;
              return (
                <button
                  key={item.slug}
                  type="button"
                  aria-pressed={active}
                  onClick={() => select(item.slug)}
                  className={`border px-2 py-1 font-tech text-[10px] uppercase tracking-widest transition-colors duration-150 ${
                    active
                      ? "border-coral bg-coral text-cream"
                      : "border-ink bg-paper text-ink hover:bg-sand"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          <p className="mt-4 text-xs/5 text-ink-soft">
            Categories describe the kinds of professional equipment ARTIFICER.ASIA coordinates for
            deployments. Specific availability is confirmed per program.
          </p>
        </aside>
      </div>

      <ImageFrame label={`Fig. 01A · ${base}/${selected.index}_${selected.slug}`} subject={selected.subject}>
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element -- repository assets, replaceable placeholders
          <img
            src={src}
            alt={selected.alt}
            width={1672}
            height={941}
            decoding="async"
            className="h-full w-full object-cover"
            onError={() => setFailIndex((index) => index + 1)}
          />
        ) : (
          <a
            href={`#${base}/${selected.index}_${selected.slug}`}
            className="flex h-full w-full items-center justify-center bg-sand font-tech text-sm uppercase tracking-widest text-ink underline decoration-coral decoration-2 underline-offset-4"
          >
            [{base}/{selected.index}_{selected.slug}](#{base}/{selected.index}_{selected.slug})
          </a>
        )}
      </ImageFrame>
    </div>
  );
}
