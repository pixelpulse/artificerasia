/** GitHub Pages base path, set by the deploy workflow from actions/configure-pages.
 *  Empty for local builds and for the custom-domain (artificer.asia) build.
 *  Server-only — pass down to client components as a prop. */
export const basePath = process.env.PAGES_BASE_PATH || "";
