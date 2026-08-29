"use client";

import { useEffect, useState } from "react";
import { ImageFrame } from "@/components/image-frame";

// WebP first (optimized copies of the repository PNGs); PNG/JPG are fallbacks.
const extensions = ["webp", "png", "jpg"] as const;

export type CarouselSlide = {
  /** Hierarchical image id without extension, e.g. "01_home/3_Deployment/0_main-exterior" */
  id: string;
  /** Caption subtext shown under the image */
  subject: string;
  alt: string;
};

type ImageCarouselProps = {
  figure: string;
  slides: CarouselSlide[];
  /** GitHub Pages base path prefix ("" locally / custom domain) */
  basePath?: string;
};

/**
 * Framed image carousel. Uses the same universal ImageFrame shell as every
 * other image slot, with square prev/next buttons on the left and right
 * edges of the image box. Missing images fall back to linked placeholders.
 */
export function ImageCarousel({ figure, slides, basePath = "" }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [fails, setFails] = useState<Record<string, number>>({});

  const slide = slides[index];
  const fail = fails[slide.id] ?? 0;
  const src =
    fail >= extensions.length
      ? null
      : `${basePath}/images/${slide.id}.${extensions[Math.min(fail, extensions.length - 1)]}`;

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  // Preload the adjacent slides so prev/next clicks paint instantly.
  useEffect(() => {
    const neighbors = [
      slides[(index - 1 + slides.length) % slides.length],
      slides[(index + 1) % slides.length],
    ];
    for (const s of neighbors) {
      const img = new Image();
      img.src = `${basePath}/images/${s.id}.${extensions[0]}`;
    }
  }, [index, slides, basePath]);

  return (
    <ImageFrame
      label={`${figure} · ${slide.id}`}
      subject={`${slide.subject} · ${index + 1}/${slides.length}`}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element -- repository assets, replaceable placeholders
        <img
          src={src}
          alt={slide.alt}
          width={1672}
          height={941}
          decoding="async"
          className="h-full w-full object-cover"
          onError={() =>
            setFails((f) => ({ ...f, [slide.id]: (f[slide.id] ?? 0) + 1 }))
          }
        />
      ) : (
        <a
          href={`#${slide.id}`}
          className="flex h-full w-full items-center justify-center bg-sand font-tech text-sm uppercase tracking-widest text-ink underline decoration-coral decoration-2 underline-offset-4"
        >
          [{slide.id}](#{slide.id})
        </a>
      )}

      <div className="pointer-events-none absolute inset-0 flex items-end justify-between px-5 pb-7">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous image"
          className="carousel-btn pointer-events-auto"
        >
          ←
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className="carousel-btn pointer-events-auto"
        >
          →
        </button>
      </div>
    </ImageFrame>
  );
}
