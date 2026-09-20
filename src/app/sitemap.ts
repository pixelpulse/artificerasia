import type { MetadataRoute } from "next";

// Required with `output: "export"` — metadata route handlers must opt into
// static rendering explicitly (see docs/01-app/02-guides/static-exports.md).
export const dynamic = "force-static";

const BASE_URL = "https://artificer.asia";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: `${BASE_URL}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/request-hardware`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/sponsor-hardware`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/our-philosophy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
