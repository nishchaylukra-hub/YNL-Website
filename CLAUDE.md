# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack

Next.js 16 (App Router, Turbopack) + React 19 + TypeScript. No CSS framework — styling is plain inline React
style objects plus a handful of hover-state utility classes in `src/app/globals.css`, matching the original
design spec's inline-style-heavy markup closely.

## Commands

- `npm run dev` — start the dev server (Turbopack) at http://localhost:3000
- `npm run build` — production build; also runs the TypeScript check
- `npm run start` — serve the production build
- `npm run lint` — ESLint (flat config in `eslint.config.mjs`)
- No test suite is configured yet.

Node/npm are managed via `nvm` on this machine — `nvm.sh` must be sourced (`export NVM_DIR="$HOME/.nvm"; . "$NVM_DIR/nvm.sh"`)
before `node`/`npm` resolve in a fresh non-interactive shell, since `~/.zshrc`'s nvm init only runs for interactive shells.

## Architecture

### Page structure
Three routes, each a server component composing sections with a shared `Header` (takes `current` for the
active nav item) and `Footer`:
- `/` (`src/app/page.tsx`) — `Hero`, `Proof`, `Services`, `About` (teaser), `Testimonials`, `ContactBand`
  from `src/components/sections/`.
- `/about` (`src/app/about/page.tsx`) — `AboutHero`, `Timeline`, `LegalCell` (`#legal`), `Principals`,
  `AboutCta` from `src/components/about/`.
- `/contact` (`src/app/contact/page.tsx`) — `Contact`, the only `"use client"` section: details, office map
  and the Forminit enquiry form (form id in `Contact.tsx`; the SDK script loads in `layout.tsx`).
- `/thank-you` — Forminit's post-submit redirect target.

### Styling conventions
- Brand tokens (colours, `SERIF` font stack, label/heading/button style helpers, `sectionPad`) live in
  `src/components/tokens.ts` — use them instead of new hex literals. Small labels on light grounds use
  `BRONZE`, not `GOLD` (gold fails contrast there).
- Inline styles can't carry media queries, so `globals.css` has a few responsive layout primitives:
  `.wrap` (side gutters), `.split` (two-column grid; `--cols`, `--gap`, `--gap-sm`), `.ledger-row`,
  `.ruled-cols` (hairline-divided columns; `--n`, `--rule`), `.offset-down`, `.hide-sm`. All collapse at
  900px. Set their CSS variables from inline style as `["--cols" as string]: "…"`.

### Hero (`src/components/sections/Hero.tsx`)
Static two-column hero: headline, CTAs and a fact row beside `SurveyPlate` — an inline-SVG "survey sheet"
of hairline plot boundaries, the brand's signature motif (a nod to the firm's agriculture-land origins; it is
illustrative, not a real parcel). No WebGL or JS animation. An earlier version rendered a Three.js/React Three
Fiber scene here; it and the `three`/`@react-three/*` dependencies were removed.

### Design assets
- `public/assets/ynl-logo-mark.png` — the only real image asset; pulled from the `claude_design` project
  ("Interactive realty homepage design", project id `9a443efa-2ebf-4c8a-9c5a-a033e843e5b0`) via the DesignSync
  MCP. Team portraits are still placeholders (`src/components/ImagePlaceholder.tsx`) — swap those for real
  photos in `sections/About.tsx` and `about/Principals.tsx` when available. The office map in `Contact.tsx`
  is a stylised SVG, not a real map.
- Fonts (Cormorant Garamond, Jost) are loaded via `next/font/google` in `src/app/layout.tsx` as CSS variables
  (`--font-cormorant`, `--font-jost`); reference them as `var(--font-cormorant), Georgia, serif` etc. in style
  objects rather than adding new `<link>` tags.

### Provenance
The current design comes from the "YNL Realtors Website" design canvas on claude.ai
(https://claude.ai/artifact/21iWKS5Rv6F3ZSrVrjfTEk): brand foundations, home, about, contact and mobile boards.
The site was originally scaffolded from a `claude_design` MCP project (`YNL Realtors Homepage.dc.html`), which
no longer reflects the current layout.
