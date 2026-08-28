import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build a fully static site for GitHub Pages (see .github/workflows/deploy.yml)
  output: "export",
  // GitHub Pages serves plain static files — no image optimization server
  images: { unoptimized: true },
  // Set by the deploy workflow from actions/configure-pages' `base_path` output:
  // - "" (empty) when the custom domain (artificer.asia) is configured
  // - "/artificerasia" for the default https://pixelpulse.github.io/artificerasia/ URL
  basePath: process.env.PAGES_BASE_PATH || "",
};

export default nextConfig;
