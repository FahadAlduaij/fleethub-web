# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A static **marketing landing page** for FleetHub (by SoloHub). It is a single scrolling
page — no router, no backend, no forms, no analytics. Its only job is to explain the
product and send visitors to WhatsApp.

**It is not the product.** The product is a separate, private back-office application
(see "The product being sold" below). Nothing in this repo talks to it.

## Commands

```bash
npm run dev            # Vite dev server (http://localhost:5173)
npm run build          # production build → dist/
npm run preview        # serve the built dist/
npm run lint           # oxlint

npx prettier --single-quote --write <file>   # formatting — the flag is required
```

There is **no test suite** and no test framework installed. Verification here is visual:
run the dev server and check the page at desktop (1440×900) and mobile (390×844) widths.
If you start a dev server to check something, kill it when you are done.

Deployed on Vercel (`vercel.json`, SPA rewrite to `/index.html`). Live at
`https://fleethub.solohub.tech/`.

## Architecture

### Copy lives in one file

`src/content.js` is the single source of every user-visible string. Components import
named exports from it (`hero`, `stats`, `howItWorks`, `roles`, `faq`, `cta`, `footer`,
`nav`, `brand`, `contact`) and render them. **Never hardcode copy inside JSX** — a
wording change should be a one-file edit.

`src/App.jsx` composes the sections in render order: Navbar → Hero → Stats → HowItWorks
→ Roles → FAQ → CTA → Footer. Navigation is anchor-scroll only; each section `<Box>`
carries an `id` that matches an `href` in `nav.links`.

### Design tokens live in one file

`src/theme.js` is the single source of every colour. **No hex values in
`src/components/`** — pull from the palette instead. Custom tokens beyond stock MUI:
`brand.card`, `brand.softPrimary`, `brand.softPrimaryStrong`, `brand.border`,
`brand.glow` (used via `sx={{ bgcolor: 'brand.card' }}` etc.).

`shape.borderRadius` is set to **4**, and MUI multiplies `sx` `borderRadius` values by
it — so `borderRadius: 6` renders as 24px. Keep that in mind when matching radii.

### Shared primitives

- `SectionHeading.jsx` — exports `SectionHeading` (pill label + two-tone centred
  heading + subheading) and `PillLabel`. Every section uses it; do not hand-roll headings.
- `ActionButton.jsx` — the pill CTA with the trailing circular arrow badge.
  `variant="solid"` for primary, `variant="soft"` for secondary.

Sections are self-contained files in `src/components/`, all following the same card
shell: `bgcolor: 'brand.card'`, `1px solid brand.border`, `borderRadius: 6`, and a
`translateY(-4px)` hover lift. Match that shell when adding a section.

### Product screenshots in How It Works

`HowItWorks.jsx`'s `ArtPanel` renders a fixed-height panel (`{ xs: 220, md: 280 }`) with
an absolutely-positioned `<img>` filling it. A card with no `image` falls back to a glyph
from the `ART` map. Per-card knobs, all set in `content.js`:

| Key | Effect |
| --- | --- |
| `image` | path under `/public` |
| `imageAlt` | required whenever `image` is set |
| `imageFit` | `'cover'` (default) or `'contain'` |
| `imagePosition` | overrides `object-position` |
| `imageZoom` | CSS `scale()` for dense screenshots |

Rule of thumb learned from tuning these: **wide landscape screenshots need
`imageFit: 'contain'`** — cover crops them so hard on mobile that headings and totals
fall outside the panel. **Tall portrait screenshots should stay on `cover`**, where the
default `center top` reads as a list continuing past the bottom edge; `contain` would
strand them as a narrow column of unreadable text. Always re-check a swapped asset at
both widths — its pixel dimensions decide the right treatment.

### Assets

Everything in `public/` is served at the site root. `favicon.svg` is the real logo mark
recoloured to `#116FEB`. `og-dashboard.png` (1200×630) is the link-preview card — the
top of `dashboard.png` with the sidebar and test-data rows cropped out.
`fleethub-whatsapp.png` (1024×1024) is the WhatsApp profile image and `og-image.png`
(1200×630, now unused) the former preview card; both are the white mark on brand blue.

Link-preview meta tags are in `index.html` and **must use absolute URLs** — scrapers do
not resolve relative paths. If the domain changes, update all three occurrences.

When rasterising the SVG logo, do **not** use ImageMagick directly: it has no librsvg
delegate here and flattens the curves into visible polygons. Render through Chromium
instead (Playwright, served over `http://` — `file://` is blocked), then downscale.

## The product being sold

Copy accuracy matters more than anything else in this repo. FleetHub is an **internal
back-office system** for a multi-company delivery-driver fleet operation in Kuwait. Every
login belongs to the operator's own staff — there is no driver app and no customer-facing
side. Drivers and vehicles are *records*, not users.

Facts the copy must not contradict:

- **Access control is two independent layers**: per-page `permissions[]` and
  `allowedCompanies`. Anything outside a user's companies is not refused — it is simply
  absent (out-of-scope reads 404, writes 403). Roles: admin, accountant, operation, hr,
  user, viewer.
- **Two separate salary systems.** Drivers are piece-rate (`cost per order × completed
  orders`, plus bonus/tips, minus deductions and cash dues); office employees are fixed
  (base + overtime + allowances − deductions). One salary record per person per month in
  both. Completed orders are typed onto the salary record — the daily delivery log is
  kept separately, so payroll is **not** "automated".
- **Vehicle↔driver assignment is written only from the person's side.** Say "assign
  vehicles to drivers", never the reverse.
- **Notifications are computed live per request** — there is no notifications
  collection and nothing to mark as read. A data-free `notifications:change` socket
  signal triggers a refetch, so "live" and "instant" are accurate.
- Arabic payment vouchers spell KWD amounts out in words (`tafqit`). KWD is 3 decimals.
- Also real: petty cash with a materialized balance, deduction accounts, S3 per-resource
  document uploads, bilingual handover forms, CSV exports that open correctly in Excel.

If a claim is not on this list, verify it against the product's own CLAUDE.md before
shipping it as copy.

## Conventions

- MUI **v9**. Grid uses `size={{ xs, sm, md }}` — not `item xs={...}`. Flex and text
  props (`alignItems`, `textAlign`, …) belong in `sx`, not as component props.
- Plain JavaScript with JSX. No TypeScript, no CSS files, no CSS-in-JS beyond `sx`.
- Single quotes, semicolons, 2-space indent — run Prettier with the flag above.
- **Do not commit or push.** The repo owner handles all commits; finish a change by
  handing back a ready-to-copy commit message.
