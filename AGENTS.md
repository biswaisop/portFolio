# Repository Guidelines

## Project Structure & Module Organization

- `app/` contains Next.js App Router entry points. The home page is `app/page.js`, the contact page is `app/contact/page.jsx`, and project case studies use `app/works/[slug]/page.jsx`. Shared layout, global styles, and local fonts also live in `app/`.
- Put homepage sections in `components/home/` and shared UI in `components/ui/`. Keep portfolio copy, project records, and world clock data in `lib/data.js`. Shared helpers live in `lib/utils.js`.
- Keep public images in `public/images/` and the downloadable resume at `public/resume.pdf`. React Email templates live in `app/email/`.

## Build, Test & Development Commands

Use Node.js 20 to match the GitHub Pages workflow.

- `npm ci` installs dependencies from `package-lock.json`.
- `npm run dev` starts the site at `http://localhost:3000`.
- `npm run lint` runs ESLint with the repository's Next.js rules.
- `npm run build` generates the static export in `out/`. GitHub Pages deploys this directory.
- `npm run email` starts the React Email preview using `app/email/`.

## Coding Style & Naming Conventions

Follow the surrounding JavaScript and JSX style with two-space indentation, double quotes, and semicolons. Use PascalCase for component names and filenames, camelCase for functions and variables, and lowercase kebab-case for project slugs, such as `embedding-service`. Use Tailwind utilities and existing theme tokens. Use `getAssetPath` for public asset URLs so they resolve under the GitHub Pages base path.

## Testing Guidelines

The repository has no configured test runner or coverage threshold. Run lint and build before opening a pull request. In the dev server, check affected routes at mobile and desktop widths. For project changes, open the case study from the home page and verify its links and images. For asset changes, also verify the exported paths under `/portFolio`.

## Commit & Pull Request Guidelines

Follow the short, descriptive style in recent commits, such as “Add GenOS project to ProjectCard component.” Use an imperative verb and name the change. In pull requests, explain the user-facing impact, list the checks you ran, link related issues when available, and include screenshots for visual changes.
