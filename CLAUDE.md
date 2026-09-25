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
Single-page marketing site. `src/app/page.tsx` is a server component that composes the page from
`src/components/sections/`: `Header`, `Hero`, `Proof`, `Services`, `About`, `Testimonials`, `Contact`, `Footer`. Each section is presentational; the only local state anywhere on the page is the contact form's `sent`
flag in `Contact.tsx` (which is why `Contact.tsx` is the only section marked `"use client"`).

### Hero (`src/components/sections/Hero.tsx`)
A static full-viewport section with a CSS `linear-gradient` background (dark olive → near-black, matching the
site's palette) and a bottom-anchored dark scrim for text legibility — no WebGL, no JS animation. Headline, stat,
and CTAs are plain markup layered on top. An earlier version of this project rendered a procedurally-built
Three.js/React Three Fiber scene here (a walkway/gate/facade fly-through); it was removed in favor of a plain
gradient hero, and the `three`/`@react-three/*` dependencies were dropped from `package.json` accordingly.

### Design assets
- `public/assets/ynl-logo-mark.png` — the only real image asset; pulled from the `claude_design` project
  ("Interactive realty homepage design", project id `9a443efa-2ebf-4c8a-9c5a-a033e843e5b0`) via the DesignSync
  MCP. Team portraits and the office map are still placeholders (`src/components/ImagePlaceholder.tsx`) — swap
  those for real photos in `About.tsx` / `Contact.tsx` when available.
- Fonts (Cormorant Garamond, Jost) are loaded via `next/font/google` in `src/app/layout.tsx` as CSS variables
  (`--font-cormorant`, `--font-jost`); reference them as `var(--font-cormorant), Georgia, serif` etc. in style
  objects rather than adding new `<link>` tags.

### Provenance
This app was scaffolded from a design authored in the `claude_design` MCP tool (`YNL Realtors Homepage.dc.html`
and its imports `hero-scene.js`, `image-slot.js`, `support.js`). The original hero was a direct port of the
`hero-scene.js` WebGL prototype; it was later replaced with a plain CSS-gradient hero, so that design-tool
project no longer reflects the current hero's visual reference — only the rest of the page layout.
