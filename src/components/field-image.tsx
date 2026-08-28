import fs from "node:fs";
import path from "node:path";
import { ImageFrame } from "@/components/image-frame";
import { basePath } from "@/lib/base-path";

type FieldImageProps = {
  /** Hierarchical image path without extension, e.g. "home/0_Intro/hero" */
  id: string;
  figure: string;
  subject: string;
  alt: string;
  priority?: boolean;
};

// WebP first (optimized copies of the repository PNGs); PNG/JPG are fallbacks.
const extensions = ["webp", "png", "jpg"] as const;

function resolveSrc(id: string): string | null {
  for (const ext of extensions) {
    if (fs.existsSync(path.join(process.cwd(), "images", `${id}.${ext}`))) {
      return `/images/${id}.${ext}`;
    }
  }
  return null;
}

/**
 * Universal image frame. Resolves the image from the repository `images/`
 * folder (path relative to `images/`, e.g. `home/0_Intro/hero`) and falls back to a
 * visible linked placeholder (e.g. `[home/0_Intro/hero](#home/0_Intro/hero)`) when missing.
 */
export function FieldImage({ id, figure, subject, alt, priority = false }: FieldImageProps) {
  const resolved = resolveSrc(id);
  const src = resolved ? `${basePath}${resolved}` : null;

  return (
    <ImageFrame label={`${figure} · ${id}`} subject={subject}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element -- repository assets, replaceable placeholders
        <img
          src={src}
          alt={alt}
          width={1672}
          height={941}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          className="h-full w-full object-cover"
        />
      ) : (
        <a
          href={`#${id}`}
          className="flex h-full w-full items-center justify-center bg-sand font-tech text-sm uppercase tracking-widest text-ink underline decoration-coral decoration-2 underline-offset-4"
        >
          [{id}](#{id})
        </a>
      )}
    </ImageFrame>
  );
}
