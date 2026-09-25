# YNL Realtors

Marketing site for YNL Realtors (home, about & Legal Cell, contact), built with Next.js (App Router, Turbopack) + React + TypeScript.

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

- `src/app/page.tsx`, `src/app/about/page.tsx`, `src/app/contact/page.tsx` — the
  routes, composed from `src/components/sections/` and `src/components/about/`
- `src/components/tokens.ts` — brand colours, fonts and shared style helpers
- `src/app/globals.css` — global styles, hover states and responsive layout
  classes; most styling is inline React style objects
- `public/assets/` — image assets

See `CLAUDE.md` for more detail on the architecture and conventions.
