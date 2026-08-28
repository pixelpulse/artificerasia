<!-- BEGIN:project-commands -->

# Project commands (read first)

- `npm run dev` — development server
- `npm run build && npm run preview` — exact preview of what GitHub Pages will serve (static export in `out/`)
- ⚠️ `npm run start` — DO NOT use. `next start` cannot run against this project's static export (`output: 'export'` in `next.config.ts`); it fails at startup. A stale `next start` process left on port 3000 once served a stale `.next` build whose CSS chunks returned HTTP 500, which made the whole site appear unstyled. If styling looks broken locally, run `fuser -k 3000/tcp` and start the correct server.

<!-- END:project-commands -->

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
