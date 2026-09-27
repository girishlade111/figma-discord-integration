# FigTime — Discord Rich Presence for Figma (Landing Page)

A Discord-styled landing page for **FigTime**, a (concept) Discord Rich Presence integration for Figma — show what you're designing in your Discord status, right from Figma.

Built with Next.js and styled to mimic Discord's dark UI, with a three-column Discord-style layout (server rail, channel list, chat-style hero), feature sections, and a mobile-responsive nav.

Originally generated with [v0.app](https://v0.app).

## Features

- **Discord-style layout** — server sidebar, channel list, chat-style hero, user status bar
- **Product pitch sections** — features, screenshots placeholders, download CTA
- **Mobile responsive** — collapsible menus and sidebar for small screens
- **Dark theme** — Discord's signature `#36393f` palette via Tailwind + next-themes
- **Fully static** — no backend, no API calls

## Tech Stack

- **Framework:** Next.js 15 (App Router, static export)
- **Language:** TypeScript + React 19
- **UI:** shadcn/ui primitives, Radix UI, Tailwind CSS
- **Icons:** Lucide React
- **Deploy:** GitHub Pages (static `output: 'export'` build)

## Quick Start

Prerequisites: Node.js 18+ and npm.

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev
# → http://localhost:3000

# Production build (static export to ./out)
npm run build
```

## Project Structure

```
figma-discord-integration/
├── app/
│   ├── page.tsx          # FigTime landing page (single-page site)
│   ├── layout.tsx        # Root layout (fonts, theme provider)
│   ├── loading.tsx
│   └── globals.css
├── components/
│   ├── theme-provider.tsx
│   └── ui/               # shadcn/ui primitives (button)
├── lib/utils.ts
├── next.config.mjs       # Static export config (output: 'export')
├── tailwind.config.ts
├── styles/globals.css
└── public/               # Logos and placeholder assets
```

## Environment Variables

None. The page is fully static and needs no API keys or secrets.

## Deployment Notes

- Configured for **static export** (`output: 'export'`) and deployed to **GitHub Pages** via the `gh-pages` branch.
- GitHub Pages serves from a subpath (`https://girishlade111.github.io/figma-discord-integration/`), so `basePath: '/figma-discord-integration'` is set in `next.config.mjs`.
  - Deploying to Vercel (root domain)? **Remove the `basePath` line** first.
- Note: this repo is a **landing page for the FigTime concept** — the actual Discord Rich Presence client/plugin is not included here.

---

Built by Girish Lade — https://ladestack.in
