# Contributing to Loading UI

Thanks for your interest in contributing. Before opening a pull request, please check existing issues and pull requests so work does not overlap.

## About this repository

Loading UI is a Next.js project with a component registry and docs site.

- We use [Bun](https://bun.sh) for package management and scripts.
- We use [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) for linting.
- We use [Oxfmt](https://oxc.rs/docs/guide/usage/formatter.html) for formatting.
- We use a local registry build step to publish installable component artifacts.

## Repository structure

| Path          | Description                                             |
| ------------- | ------------------------------------------------------- |
| `app/`        | App Router routes, docs pages, and API routes.          |
| `components/` | Shared site UI and reusable React components.           |
| `content/`    | MDX content for the documentation site.                 |
| `registry/`   | Registry source files and registry build scripts.       |
| `public/r/`   | Generated registry artifacts consumed by the installer. |

## Getting started

1. Fork the repository.
2. Clone your fork locally.

   ```sh
   git clone https://github.com/YOUR_USERNAME/loading-ui.git
   cd loading-ui
   ```

3. Create a branch for your work.

   ```sh
   git checkout -b my-change
   ```

4. Install dependencies.

   ```sh
   bun install
   ```

5. Start the dev server.

   ```sh
   bun run dev
   ```

## Making changes

- Keep changes focused. Small, reviewable pull requests get merged faster.
- Follow the existing component patterns and naming conventions.
- Prefer accessibility, composability, and predictable APIs over one-off variants.
- If you change registry sources, regenerate the registry output before opening a PR.
- If behavior changes, update docs or examples in a follow-up change as needed.

## Quality checks

Run these before opening a pull request:

```sh
bun run lint
bun run format
bun run build
```

If your change touches the registry, also run:

```sh
bun run build:registry
```

There is no dedicated automated test suite in this repository yet, so lint, format, build, and a manual verification of your change are the minimum bar.

## Pull requests

Please include:

- A clear summary of what changed and why.
- A linked issue when one exists.
- Screenshots or recordings for visible UI changes.
- Notes about any follow-up work or known limitations.

Prefer clear commit messages. Conventional Commit style is welcome, but the main requirement is that each commit is easy to understand during review.

## Reporting issues and asking for help

- Use GitHub Issues for bugs and concrete feature requests.
- Use the docs site and community channels for usage questions or open-ended discussion.
- Do not open public issues for security problems. Use the security policy instead.

## Code of Conduct

By participating in this project, you agree to follow the [Code of Conduct](./CODE_OF_CONDUCT.md).
