<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

<!-- balsa-ui-agent-context:start -->
## Balsa UI

- Before writing common controls or surfaces, run `npx balsa-ui@latest search "<intent>"`, then read only the selected `.balsa/specs/components/<name>.json`.
- Install matching items with `npx balsa-ui@latest add <name>` before implementing the interface. Do not rebuild a Balsa-covered control with raw HTML and CSS.
- The specification is sufficient for normal composition. Inspect installed component source only when changing its behavior.
- Use semantic Balsa tokens and preserve component accessibility behavior and typed APIs.
- For new templates, showcases, blocks, or visually driven pages, use `$balsa-template-design` with `$balsa-ui` before coding. The companion skill is installed under `.agents/skills/`.
- Treat installed files as application source. Never use `--force` without reviewing local differences.
- Validate application changes with the repository's existing lint, test, typecheck, and build commands.
<!-- balsa-ui-agent-context:end -->
