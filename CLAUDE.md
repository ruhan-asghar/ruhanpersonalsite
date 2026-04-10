# ruhanpersonalsite — Project Knowledge Base

## Architecture
- **Framework**: Next.js 16 with App Router (`src/app/`)
- **Language**: TypeScript (strict)
- **Styling**: Template CSS system (Azurio) — NOT Tailwind. CSS lives in `public/css/` (loader.css, plugins.css, main.css)
- **Animations**: GSAP + ScrollTrigger + SplitText + Matter.js + Lenis smooth scroll — all bundled in `public/js/libs.min.js`
- **Custom JS**: `public/js/app.js` — handles loader, cursor, animations, gravity, sticky sections, color switching
- **Fonts**: Manrope (body) + JetBrains Mono (accent) via Google Fonts, Phosphor Icons in `public/fonts/Phosphor/`
- **Images**: AI-generated via Replicate Flux Schnell, stored in `public/images/`
- **Tech Icons**: SVGs in `public/img/tech/` — mix of template originals and custom-created
- **Template Reference**: `azurio-digital-agency-and-personal-portfolio-html-template/` (gitignored, used as reference only)
- **Package Manager**: npm
- **Deployment**: Vercel (auto-deploy from GitHub)

### Key Design Patterns
- Single-page portfolio — all sections in `src/app/page.tsx`
- Layout loads template CSS via `<link>` tags in `<head>` and JS via Next.js `<Script>` component
- Template JS uses `DOMContentLoaded` listener, works with Next.js SSR/hydration
- Color scheme switching via `color-scheme` HTML attribute (light/dark toggle built in)
- Custom cursor system (`#mxd-cursor`) lives in layout.tsx
- All animations driven by CSS classes (`loading-chars`, `anim-uni-in-up`, `mxd-split-lines`, etc.)

### Folder Structure
```
src/app/
  layout.tsx    — loads template CSS/JS, metadata, cursor element
  page.tsx      — full single-page portfolio (hero, projects, stats, sticky, expertise, resume, CTA, footer)
  sitemap.ts    — generates sitemap.xml for SEO
  robots.ts     — generates robots.txt for SEO
public/
  css/          — template stylesheets (loader, plugins, main)
  js/           — template scripts (libs.min.js, app.js)
  fonts/        — Phosphor icon font family
  images/       — AI-generated images (24 files)
  img/tech/     — tech stack SVG icons
  img/favicon/  — favicon files
  img/works/    — client logo SVGs
```

## Environment
- `REPLICATE_API_TOKEN` — Replicate API key for Flux Schnell image generation (used during build only, not runtime)

## Services & APIs
- **Replicate API** (Flux Schnell) — generates all portfolio images. Rate limited to ~6 req/min on free tier. Must send requests sequentially with 12s delay between calls.
- **GitHub** — `ruhan-asghar/ruhanpersonalsite`
- **Vercel** — auto-deploys from GitHub, linked to `ruhanpersonalsite.vercel.app`
- **Calendly** — booking link `https://calendly.com/ruhan-asghar/ruhan-builds` used for all CTA buttons

## How We Solved It

### Template Integration with Next.js
The Azurio template is a vanilla HTML/CSS/JS theme with jQuery, GSAP, Matter.js, and Lenis. Rather than rewriting all animations in React, we load the template's CSS and JS directly:
- CSS files go in `public/css/` and are loaded via `<link>` tags in layout.tsx `<head>`
- `libs.min.js` (jQuery + GSAP + all plugins) loads via `<Script strategy="beforeInteractive">`
- `app.js` loads via `<Script strategy="afterInteractive">`
- Font paths in CSS use `../fonts/` which correctly resolves from `/css/` to `/fonts/` in the public folder
- The default Next.js globals.css (Tailwind) is NOT imported — would conflict with template styles

### Hydration Mismatch Fix
Template JS (color switcher, loader) modifies DOM before React hydrates. Fix:
- `suppressHydrationWarning` on `<html>` and `<body>` in layout.tsx
- Modified `app.js` DOMContentLoaded to use `mxdInit()` function with readyState check — runs immediately if DOM already loaded (afterInteractive), otherwise waits for DOMContentLoaded

### Hero Text Clipping
Template's hero-10 h1 had `line-height: 0.76` which clipped ascenders/descenders on "Ruhan Asghar". Fixed to `0.92` with `overflow: visible`.

### Image Generation at Scale with Rate Limits
Replicate Flux Schnell has a 6 req/min rate limit on free tier. Batching 5 requests in parallel caused mass throttling. Solution: sequential generation with 12s delay between calls, with retry logic for 429 responses. Total time for 23 images: ~7 minutes.

## Gotchas
- **Don't import globals.css** — the Tailwind CSS conflicts with the template's CSS system. All styling comes from the template CSS files.
- **Replicate rate limits** — must send image generation requests one at a time with delays. Parallel requests get 429'd.
- **divider-image-* CSS classes** — template uses CSS background-image classes for dividers, but they point to dummyimage.com. We use inline styles with our generated images instead.
- **Hero section uses hero-10 variant** — no special JS hooks for this variant, animations are class-driven.
- **gh CLI path** — installed via winget, lives at `/c/Program Files/GitHub CLI/gh.exe` (not in default bash PATH).
- **Toolbox icons in dark mode** — must use colored SVGs, not monochrome black fill. Black icons are invisible on dark background.
- **Pinned section scroll distance** — `+=100%` creates too much dead scroll space. Reduced to `+=50%` for tighter transitions.
