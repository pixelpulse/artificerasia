import fs from "node:fs";
import path from "node:path";
import { basePath } from "@/lib/base-path";

const extensions = ["png", "jpg", "webp"] as const;

type PageBackgroundProps = {
  /** Hierarchical image id without extension, e.g. "04_ethos/0_hero" */
  id: string;
  /**
   * Dark legibility overlay over the photo.
   * Defaults to true — pages that want the photo to show through clearly
   * (e.g. mostly-empty canvas images) pass `overlay={false}`.
   */
  overlay?: boolean;
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
export function PageBackground({ id, overlay = true }: PageBackgroundProps) {
  const src = resolveSrc(id);

  return (
    <div aria-hidden="true" className="absolute inset-0">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={src ? { backgroundImage: `url(${src})` } : undefined}
      />
      {overlay ? <div className="absolute inset-0 bg-ink/75" /> : null}
    </div>
  );
}
