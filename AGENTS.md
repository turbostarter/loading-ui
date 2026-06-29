# AGENTS.md

## Cursor Cloud specific instructions

Loading UI is a single **Next.js 16 (App Router, Turbopack)** app — a docs site plus an
installable component registry for spinners/loaders. There is no separate backend; the
dev server serves everything.

### Package manager: Bun (not pnpm)

This repo uses **Bun** for package management and all scripts (see `.github/CONTRIBUTING.md`
and `.github/setup/action.yml`). A `pnpm-lock.yaml` is also checked in, but it is **not** the
source of truth — always use `bun`, not `pnpm`/`npm`. Bun is preinstalled at `~/.bun/bin/bun`
and the update script runs `bun install`.

### Generated files (do not hand-edit)

`bun install` runs a `postinstall` step (and `dev` runs `predev`) that regenerates:
- `.source/` — Fumadocs MDX output (`fumadocs-mdx`), gitignored.
- `app/colors.css` and `lib/colors.ts` — produced by `bun run build:colors`.

These are recreated automatically; don't edit them by hand. After changing registry sources,
regenerate artifacts with `bun run build:registry`.

### Commands (run from repo root)

Standard scripts live in `package.json` / `.github/CONTRIBUTING.md`:
- Run (dev): `bun run dev` → http://localhost:3000 (key routes: `/`, `/docs`, `/docs/components/<name>`).
- Lint: `bun run lint` (oxlint).
- Format: `bun run format` (oxfmt `--check`); `bun run format:fix` to apply.
- Build: `bun run build` (runs `build:colors` then `next build`).

### Gotchas

- `bun install` may report `bun.lock` as modified (Bun-version drift); the update script uses a
  non-frozen `bun install` so this is expected. Don't commit the regenerated `bun.lock` unless
  you intend to bump it.
- `bun run format` currently fails on a clean checkout due to **pre-existing** formatting issues
  in a few committed files (e.g. `components/common/header/search.tsx`, `lib/registry.ts`). This
  is a repo-state issue, not an environment problem — don't "fix" unrelated files unless asked.
- First page compile under Turbopack is slow (~10s for `/`); subsequent loads are fast.
