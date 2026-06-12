# victor-pariente.dev

Personal site of **Víctor Pariente González** — backend software engineer with 10+ years of
experience. A living CV and a small digital garden where I share what I'm learning, building and
exploring (AI, agents, MCP and system design).

🔗 **Live:** https://victor-pariente.dev · 🌐 Bilingual (Español · English)

## Tech stack

- [Astro](https://astro.build) 6 — static output, no UI framework (plain `.astro` components)
- MDX content collections for the blog and projects
- `@astrojs/sitemap` + `@astrojs/rss`
- Heebo typography, custom design tokens, light/dark themes
- Lightweight i18n (Spanish is the default, English under `/en`)

## Project structure

```text
src/
├─ components/      # layout, home, about, blog, ui components
├─ content/         # blog & projects collections (MDX) + schema
├─ i18n/            # UI strings (ui.ts) and helpers
├─ pages/
│  ├─ es/           # Spanish routes (default language)
│  └─ en/           # English routes
└─ styles/
   ├─ tokens.css    # colours, type scale, spacing
   └─ global.css    # base styles + shared design-system utilities
public/             # static assets (favicon, avatar, …)
```

Pages: **Home · About · Now · Blog · Projects · Contact** — each available in `/es` and `/en`.

## Design system

The whole site shares one editorial style driven by tokens in `src/styles/tokens.css`.
The colour palette is swappable from four variables (`--color-accent`, `--color-accent-2`,
`--color-accent-dim`, `--color-link`); the current accent is coral `#FF6464`.

## Development

Requires **Node ≥ 22.12.0**.

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the dev server at `localhost:4321`     |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the production build locally         |

---

Built with Astro. © Víctor Pariente González.
