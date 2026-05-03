# olg-website

Marketing site for [Repeta.app](https://repeta.app).
Built with **Next.js 15 (App Router)** + **TypeScript** + **Tailwind CSS v4**.

## Develop

```sh
yarn install
yarn dev          # http://localhost:3000
```

## Build

```sh
yarn build
yarn start
```

## Quality

```sh
yarn typecheck
yarn lint
```

## Project layout

```
public/
  icon.png, favicon.png, og-image.png       Brand graphics (mirrored from olg-app)
  logo-horizontal.svg, wordmark.svg
  screenshots/mobile/*.jpg                  In-app captures
src/
  app/
    layout.tsx, page.tsx, globals.css       Root layout + landing page
    privacy/page.tsx                        /privacy (required by Play Store)
    terms/page.tsx                          /terms
  components/
    Header.tsx Hero.tsx Features.tsx
    Screenshots.tsx Download.tsx Footer.tsx
    PhoneFrame.tsx
  lib/
    brand.ts                                Single source of brand strings + URLs
```

## Brand tokens

Defined as Tailwind v4 `@theme` variables in [src/app/globals.css](src/app/globals.css).
Kept in sync with `olg-app/src/constants/theme.ts`:

| Token | Hex |
| --- | --- |
| `brand` | `#60d1b9` |
| `brand-dark` | `#2ab8aa` |
| `brand-secondary` | `#3a9dbb` |
| `brand-accent` | `#ffc800` |
| `brand-ink` | `#1f2937` |
| `brand-ink-soft` | `#003440` |

Use them as classes: `bg-brand`, `text-brand-ink`, `bg-brand-gradient`, etc.

## Deployment

Deployed to **GitHub Pages** as a fully static site (no Node runtime needed).

- [next.config.ts](next.config.ts) sets `output: "export"` → `yarn build` writes plain HTML/CSS/JS to `./out`.
- [public/CNAME](public/CNAME) pins the custom domain to **repeta.app**.
- [public/.nojekyll](public/.nojekyll) tells Pages to serve `_next/*` as-is.
- [.github/workflows/deploy.yml](.github/workflows/deploy.yml) builds on every push to `main` and publishes via the official `actions/deploy-pages` flow.

### One-time GitHub setup

1. Push the repo to GitHub.
2. **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. **Settings → Pages → Custom domain:** `repeta.app`, then enable **Enforce HTTPS** once the cert provisions.
4. At your DNS provider, point `repeta.app` to GitHub Pages:
   - `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `AAAA` records → `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - (Optional) `CNAME www` → `openlearngraph.github.io.`

Subsequent deploys: just `git push`.
