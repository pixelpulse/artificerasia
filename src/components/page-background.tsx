import fs from "node:fs";
import path from "node:path";
import { basePath } from "@/lib/base-path";

// WebP first (optimized copies of the repository PNGs); PNG/JPG are fallbacks.
const extensions = ["webp", "png", "jpg"] as const;

type PageBackgroundProps = {
  /** Hierarchical image id without extension, e.g. "04_ethos/0_hero" */
  id: string;
  /**
   * Dark legibility overlay over the photo.
   * Defaults to true — pages that want the photo to show through clearly
   * (e.g. mostly-empty canvas images) pass `overlay={false}`.
   */
  overlay?: boolean;
  /**
   * Tile the image vertically (repeat-y) instead of stretching one image to
   * cover the whole page. The image is scaled to the full page width, so a
   * stack of frames scrolls down the page like a film strip.
   */
  tileVertical?: boolean;
};

function resolveSrc(id: string): string | null {
  for (const ext of extensions) {
    const file = path.join(process.cwd(), "images", `${id}.${ext}`);
    if (fs.existsSync(file)) {
      return `${basePath}/images/${id}.${ext}`;
    }
  }
  return null;
}

/**
 * Universal full-page background photo with an optional dark overlay.
 * Renders absolutely positioned layers so the page content sits on top.
 */
export function PageBackground({ id, overlay = true, tileVertical = false }: PageBackgroundProps) {
  const src = resolveSrc(id);

  return (
    <div aria-hidden="true" className="absolute inset-0">
      <div
        className={`absolute inset-0 ${tileVertical ? "bg-top" : "bg-cover bg-center"}`}
        style={
          src
            ? {
                backgroundImage: `url(${src})`,
                ...(tileVertical
                  ? { backgroundRepeat: "repeat-y", backgroundSize: "100% auto" }
                  : {}),
              }
            : undefined
        }
      />
      {overlay ? <div className="absolute inset-0 bg-ink/75" /> : null}
    </div>
  );
}
