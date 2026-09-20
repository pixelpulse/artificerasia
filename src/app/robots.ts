import type { MetadataRoute } from "next";

// Required with `output: "export"` — metadata route handlers must opt into
// static rendering explicitly (see docs/01-app/02-guides/static-exports.md).
export const dynamic = "force-static";

/**
 * Robots exclusion for the static export. The site is reachable under both
 * the custom domain (artificer.asia) and the GitHub Pages project URL, but
 * sitemap and canonical URLs always point at the custom domain.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://artificer.asia/sitemap.xml",
  };
}
