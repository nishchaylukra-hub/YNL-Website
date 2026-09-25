# YNL Realtors

Single-page marketing site for YNL Realtors, built with Next.js (App Router, Turbopack) + React + TypeScript.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Commands

- `npm run dev` — start the dev server (Turbopack)
- `npm run build` — production build (also runs the TypeScript check)
- `npm run start` — serve the production build
- `npm run lint` — ESLint

## Project structure

- `src/app/page.tsx` — the page, composed from `src/components/sections/`
  (`Header`, `Hero`, `Proof`, `Services`, `About`, `Testimonials`, `Contact`, `Footer`)
- `src/app/globals.css` — global styles and hover-state utility classes; most
  styling is inline React style objects
- `public/assets/` — image assets

See `CLAUDE.md` for more detail on the architecture and conventions.
