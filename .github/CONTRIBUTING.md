# Contributing to Loading UI

Thank you for your interest in contributing to Loading UI. This repository is a collection of reusable loading components and patterns for modern web apps.

## Prerequisites

This project uses [Bun](https://bun.sh) as its package manager and runtime. To install:

```sh
# Linux & macOS
curl -fsSL https://bun.sh/install | bash

# Windows
powershell -c "irm bun.sh/install.ps1 | iex"
```

## Getting Started

1. **Fork and Clone**
   ```sh
   git clone https://github.com/YOUR_USERNAME/loading-ui.git
   cd loading-ui
   ```

2. **Install Dependencies**
   ```sh
   bun install
   ```

3. **Development Setup**
   
   We recommend using VSCode (or a fork like [Cursor](https://www.cursor.com) or [Windsurf](https://windsurf.com)) with the [recommended extensions](./.vscode/extensions.json) installed:
   - Arktype
   - Biome (formatter/linter)
   - MDX support
   - Vitest Explorer

4. **Start Development**
   ```sh
   bun run dev
   ```
   This starts the Next.js dev server.

## Project Structure

This repository contains:

- `app/` - Next.js app routes, docs pages, and API routes
- `components/` - Loading components and supporting UI primitives
- `content/` - MDX documentation content
- `registry/` - Component registry sources and build scripts

## Development Workflow

### Creating Changes

1. **Create a Feature Branch**
   ```sh
   git checkout -b feature/your-feature-name
   ```
   
   > **Important:** Always create pull requests from feature branches, not from your main branch.

2. **Make Your Changes**
   - Keep components focused, composable, and accessible
   - Prefer consistent API design across loading primitives
   - Update docs/examples when component behavior changes
   - Add tests if a change introduces non-trivial behavior

3. **Test Your Changes**
   ```sh
   # Linting
   bun run lint
   # Formatting check
   bun run format
   # Optional fixes
   bun run lint:fix
   bun run format:fix
   ```

### Code Style Guidelines

- **Biome Formatting**: The project uses Biome for code formatting and linting
- **TypeScript**: Write type-safe code with appropriate type annotations
- **Meaningful Names**: Use clear, descriptive variable and function names
- **Self-Documenting Code**: Write code that explains itself; add comments only for complex logic
- **Consistency**: Follow existing patterns and conventions in the codebase

### Testing Guidelines

- Add tests for new features and bug fixes
- Include targeted coverage for non-trivial component logic
- For bug fixes, consider adding a failing regression test first, then implement the fix
- If tests are added in the future, keep them deterministic and focused

### Commit Guidelines

- Write clear, descriptive commit messages
- Make focused, atomic commits
- For bug fixes, create separate commits for tests and fixes when helpful for review
- Individual commit messages don't need to follow strict conventions (PRs are squashed)

## Pull Request Process

### Before Submitting

1. **Run Quality Checks**
   ```sh
   bun run lint   # Check for linting issues
   bun run format # Check formatting
   ```

2. **Update Documentation**
   - Update relevant docs in `content/` and `app/docs/`
   - Ensure examples in `README.md` stay accurate

### Submitting Your PR

1. **PR Description**
   - Provide a clear description of your changes
   - Link relevant issues (e.g., "Closes #123")
   - Explain the motivation and context

2. **Self-Review**
   - Review your own code before submitting
   - Check for any obvious issues or improvements
   - Ensure all files are properly formatted

3. **Keep It Focused**
   - Keep changes atomic and focused on a single feature/fix
   - Split large changes into multiple PRs when possible

## Reporting Issues

- **Check Existing Issues**: Search for existing issues before creating new ones
- **Provide Context**: Include clear reproduction steps, expected behavior, and actual behavior
- **Include Details**: Add browser/OS/version info and reproduction details
- **Use Labels**: Apply appropriate labels to help categorize the issue

## Areas for Contribution

### Code Contributions
- New loading components and variants
- Bug fixes and performance improvements
- Accessibility improvements
- Better composition APIs and ergonomics

### Documentation
- Improve existing documentation
- Add examples for different loading states/use cases
- Create practical integration guides
- Fix typos and improve clarity

### Testing
- Add coverage for component state transitions
- Validate accessibility and visual regressions where practical

## Questions and Support

- **Discussions**: Use GitHub Discussions for questions and general discussion
- **Issues**: Use GitHub Issues for bug reports and feature requests
- **Documentation**: Check the docs in this repository

## Review Process

Please note that this project is maintained by individuals with full-time jobs. Reviews are done in spare time, so please allow appropriate time for review. If you haven't received a review within a week, feel free to ping the maintainers.

## Code of Conduct

This project follows a Code of Conduct. By participating, you agree to uphold these standards and create a welcoming environment for all contributors.

---

## License

[MIT](./LICENSE) License © 2026 [Bartosz Zagrodzki](https://github.com/Bartek532)
