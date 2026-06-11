# Revival Group Realty

A boutique San Diego real estate **advisory** brokerage — the realty arm of the
Revival Group platform. The site is positioned around strategy, judgment, San
Diego neighborhood knowledge, due diligence, and development-informed
representation rather than active listings (the brokerage is pre-listing).

Shares the parent brand's visual identity: Playfair Display + DM Sans, the
forest / cream / gold palette, grain-textured hero, and scroll-reveal
animations. Built with Next.js (App Router), React 19, and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build + typecheck
npm run lint     # eslint
```

## Site structure

Primary nav: **Buy · Sell · Invest · Develop · Neighborhoods · About · Contact**,
with a **Work With Us** CTA. *Listings* and *Agents* are intentionally **not** in
the primary nav (see below).

| Route            | Purpose |
|------------------|---------|
| `/`              | Hero → advisory intro → Buy/Sell/Invest/Develop paths → Why Revival → Neighborhoods teaser → subtle "listings coming soon" → consultation CTA |
| `/buy`           | Buyer representation, neighborhood guidance, offer strategy, due diligence, HOA review, escrow, development-informed review |
| `/sell`          | Pricing, preparation, positioning/marketing, offer review, negotiation, escrow |
| `/invest`        | Acquisition, small multifamily, value-add, rental review, ADU/redevelopment, risk, exit thinking (+ no-advice disclaimer) |
| `/develop`       | Land, infill, feasibility, entitlement-aware acquisition, builder rep, repositioning (key differentiator + disclaimer) |
| `/neighborhoods` | 13 San Diego neighborhoods grouped by region; fair-housing-compliant copy |
| `/about`         | Philosophy, development-informed brokerage, founder/broker + license placeholders, platform |
| `/contact`       | "Work With Us" — full inquiry form + areas served + compliance |
| `/guides`        | Structure-only Insights/Guides (linked in **footer** only) |
| `/properties`    | Hidden future IDX/listings placeholder — **not** in nav, `noindex` |

### Why *Listings* and *Agents* were removed from primary nav
- **Listings** would foreground the fact that there are no active listings yet,
  making the brokerage feel thin. A subtle "coming soon" placeholder and a
  hidden `/properties` route hold the space until IDX/MLS is live.
- **Agents** implies a team roster. With a single founder/broker, *About* reads
  as more intentional and polished. Re-add Team/Agents once there are multiple.

## Reusable components

`PageHero`, `SectionHeader`, `ServiceCard`, `NeighborhoodCard`, `CTASection`,
`DisclaimerBlock`, `ContactForm`, `AnimateIn`, plus section components
(`Approach`, `ClientPaths`, `WhyRevival`, `NeighborhoodsTeaser`,
`FutureListings`, `Navigation`, `Hero`, `Footer`). Shared data in
`app/data/neighborhoods.ts`; grain texture in `app/lib/grain.ts`.

## Live details (filled in)

- **Broker:** Kevin Vartan — Founder & Broker · CA DRE #02222010
- **Email:** kevinvartan@revivalgrouprealty.com · **Phone:** 310-779-2038

## Placeholders still to replace before launch

- **Founder bio + headshot** — `app/about/page.tsx` (placeholder bio paragraphs,
  monogram avatar instead of a photo).
- **Office address** — `[Office Address], San Diego, CA [ZIP]` in `app/about/page.tsx`.
- **Form endpoint** — `app/components/ContactForm.tsx` still posts to the parent
  company's Formspree ID (`mzdojazk`). Swap for the brokerage's own.
- **Platform links** — footer + about "Revival Group Development" links use `#`
  placeholders; point them at the live platform routes.
- **Privacy Policy / Terms** — footer links are `#` placeholders.

## TODOs (search the codebase for `TODO(`)

- `TODO(listings)` — IDX/MLS provider integration, MLS membership + IDX approval,
  required MLS attribution/disclaimers, listing feed, Featured/Sold/Private
  views, brokerage approval (see `FutureListings.tsx` and `/properties`).
- `TODO(form)` / `TODO(contact)` — replace Formspree endpoint + monitored inbox.
- `TODO(about)` — founder name, bio, headshot, license details.
- `TODO(platform)` — live Revival Group Development links.
- `TODO(compliance)` — DRE number, MLS/IDX disclaimer, Privacy/Terms pages.
- `TODO(guides)` — real guide content (no fake dated posts).

## Compliance notes

DRE license placeholder, Equal Housing Opportunity, "deemed reliable but not
guaranteed," and a "not legal/tax/financial/investment advice" disclaimer appear
in the footer and on advisory pages. Neighborhood copy avoids fair-housing-
sensitive language (no "family," "safe," "exclusive," etc.). An MLS/IDX
disclaimer placeholder is noted for when a listing feed is added.
