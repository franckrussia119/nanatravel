# NanaTravelServices — Cameroon Travel Agency Site

A trilingual (English / French / Russian) travel agency website for small-group
journeys across Cameroon — tours, culture, food, and an enquiry form. Built with
Next.js, ready to deploy on Coolify via Docker.

## What's inside

- **Next.js 16** (App Router) + TypeScript + Tailwind CSS 4
- **next-intl** for `/en`, `/fr`, `/ru` routing, with every page and piece of
  content translated
- A currency toggle (USD / RUB) that remembers the visitor's choice
- 8 sample tours, 6 culture entries, 8 food entries, and testimonials — all in
  `/data`, all trilingual, easy to edit or extend
- A homepage hero built from three independent auto-rotating photo sliders
  (one full-bleed background slider plus two smaller floating card sliders)
- Real photography throughout — tours, culture entries, and the hero all use
  actual photos (see `public/images/`), not placeholders
- A **"Beyond Cameroon"** section and three sample destinations in other
  African countries (Kenya, Morocco, Tanzania) in `data/countries.ts`,
  alongside the Cameroon-focused core of the site
- A **Services** page (visa assistance, hotel booking, car rental, Airbnb &
  long-term rentals) and a dedicated **Study in Russia** page for African
  students, with full accompaniment program details
- An enquiry form (`/contact`) that posts to `/api/contact`, which emails you
  via [Resend](https://resend.com) if configured, or otherwise logs the
  enquiry to the server console
- A luxury visual identity — deep emerald, antique gold, and burgundy on
  ivory, Playfair Display + Cormorant Garamond for headlines, smooth
  transitions and scroll reveals throughout
- A custom SVG logo (compass emblem + wordmark, `components/logo.tsx`) — no
  external logo file needed, and it recolors automatically with the palette
- Branded illustration tiles (`components/illustration-tile.tsx`) fill in
  for categories with no real photo yet (e.g. Car Rental, Airbnb listings)
  instead of leaving a blank or generic placeholder
- Each major page has its own accent color — Study in Russia uses Russian
  flag red and blue, Food uses warm paprika and coffee tones, Culture uses
  a regal indigo and gold — layered on top of the shared brand palette (see
  "Per-page color themes" below)
- Prices are shown as ranges (e.g. "$890 – $1,200") rather than a single
  number, computed automatically from one base price per tour
- Motion throughout: animated count-up stats on the homepage, a gentle
  ambient float on the hero's photo cards, a fade transition between page
  navigations, plus the hover/reveal transitions from the core design system
- Self-hosted fonts — no external font requests at runtime
- A `Dockerfile` producing a small, production-ready image for Coolify or any
  other Docker host

### Per-page color themes

Study in Russia, Food, and Culture each have a scoped color override defined
in `app/globals.css` (`.theme-russia`, `.theme-food`, `.theme-culture`).
Each one redefines a few of the shared color tokens (e.g. `--color-ochre`,
`--color-forest`) just for that page, so headings, buttons, and accents
inside it pick up the new palette automatically — no component changes
needed. To add a themed page, wrap its root element in a new class and
define the overrides the same way.

### Price ranges

Every tour, service, and country trip still stores a single `priceUsd` in
its data file — that's the low end of the range. The high end is calculated
automatically as 35% above it (see `PRICE_RANGE_MULTIPLIER` in
`lib/currency.ts`) and rendered with `<PriceRangeTag usd={...} />`
(`components/price-tag.tsx`). Adjust the multiplier there to widen or
narrow the range site-wide, or edit individual `priceUsd` values in
`data/tours.ts` / `data/countries.ts` to change where a specific range starts.

### Business contact details

The phone number, email, and legal registration details shown in the footer
and on the Contact page come from a single file: `data/legal.ts`. Update the
`contactInfo` and `legalInfo` objects there to change them everywhere at
once.

### Changing the color palette

Every color on the site is defined once, in `app/globals.css`, at the top of
the `:root` block:

```css
--color-sand: #f4efe2;         /* ivory background */
--color-forest: #0f3d2e;       /* deep emerald */
--color-ochre: #b8862f;        /* antique gold */
--color-clay: #6d1f2c;         /* deep burgundy */
--color-teal: #16324a;         /* deep sapphire (coast accent) */
```

Change any of these six hex values and the entire site — buttons, headings,
region tags, hovers — updates everywhere, since every component references
these same tokens rather than hardcoded colors.

### The homepage hero sliders

`components/hero.tsx` defines three image arrays near the top of the file:
`BG_IMAGES` (the big full-bleed background, 5 images), `WILD_IMAGES` and
`CULTURE_IMAGES` (the two small floating cards, 3 images each). Add, remove,
or reorder entries in those arrays — and drop matching files in
`public/images/hero/`, `public/images/hero/wild/`, and
`public/images/hero/culture-slider/` — to change what rotates through.

## Getting started locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` — it will redirect to `/en`. Try `/fr` and `/ru`
too.

## Adding your own photos

Every photo on the site currently shows a colored placeholder with a label
(e.g. "Rhumsiki peaks") because no real images have been added yet. To swap
one in, just drop a file at the exact path referenced in the data files —
the placeholder disappears automatically once the file exists.

Paths to fill in, all under `public/images/`:

| Folder | Used for |
|---|---|
| `hero/` | Homepage hero photos (`hero-main.jpg`, `hero-secondary.jpg`) |
| `tours/` | One photo per tour, see `slug` + `image` field in `data/tours.ts` |
| `culture/` | One photo per culture entry, see `data/culture.ts` |
| `food/` | One photo per dish, see `data/food.ts` |
| `about/` | Team/office photo for the About page (`team.jpg`) |
| `study-russia/` | Hero photo for the Study in Russia page (`campus.jpg`) |

Recommended: landscape photos at least 1600px wide, JPEG, optimized
(under ~400KB each) so pages stay fast. You don't need to resize precisely —
the site crops images to fit each slot automatically.

## Editing content (tours, culture, food, prices)

Everything text-based lives in `/data` and `/messages`, not hardcoded in
components — you don't need to touch component code to update content.

- **Tours**: `data/tours.ts` — each tour has a title, summary, highlights,
  full day-by-day itinerary, included/not-included lists, price in USD, and
  a region (`coast` / `rainforest` / `savanna` / `highlands`). Every text
  field is an object with `en`, `fr`, and `ru` versions.
- **Culture**: `data/culture.ts`
- **Food**: `data/food.ts`
- **Testimonials**: `data/testimonials.ts`
- **Everything else** (buttons, labels, page headings, form fields):
  `messages/en.json`, `messages/fr.json`, `messages/ru.json` — matching keys
  across the three files.

### Prices and the RUB conversion rate

All prices are stored as a single `priceUsd` number per tour. The rouble
price shown to visitors is calculated automatically using the fixed rate in
`lib/currency.ts`:

```ts
export const USD_TO_RUB_RATE = 95;
```

Update that number occasionally to keep RUB pricing realistic — there's no
live exchange-rate API call, by design, so the site never depends on a
third-party service being up.

### Adding a new tour

Copy an existing entry in `data/tours.ts`, give it a new unique `slug`
(this becomes its URL: `/tours/your-slug`), and fill in the fields. It will
automatically appear on the `/tours` listing page and be filterable by
region. To feature it on the homepage too, add its slug to the `featured`
filter list in `components/featured-tours.tsx`.

## The enquiry form

Submissions POST to `app/api/contact/route.ts`. By default (no environment
variables set) it just logs the enquiry to the server console — useful for
local development, but you'll miss real enquiries in production unless you
configure email:

1. Create a free account at [resend.com](https://resend.com)
2. Verify a sending domain (or use their shared test domain while you set
   things up)
3. Create an API key
4. Set these environment variables (see `.env.example`):
   - `RESEND_API_KEY`
   - `CONTACT_NOTIFY_EMAIL` — where enquiries should be sent
   - `CONTACT_FROM_EMAIL` — optional, defaults to Resend's shared sender

No database is used — this is intentionally a simple "send me an email"
flow, not a booking system with payments.

## Deploying

### GitHub

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

### Coolify

1. In Coolify, create a new **Application** from your GitHub repository.
2. Build pack: **Dockerfile** (Coolify will detect the `Dockerfile` at the
   repo root automatically).
3. Set the port to **3000** (matches `EXPOSE 3000` in the Dockerfile).
4. Add environment variables under the app's **Environment Variables** tab:
   - `RESEND_API_KEY`
   - `CONTACT_NOTIFY_EMAIL`
   - `CONTACT_FROM_EMAIL` (optional)
5. Deploy. Coolify will build the Docker image and run it — no other
   configuration is required.

The Dockerfile uses Next.js's `standalone` output, so the resulting image is
small and starts quickly, independent of `npm install` at runtime.

## Project structure

```
app/
  [locale]/            All pages, nested under the active language
    page.tsx           Homepage
    tours/              Listing + [slug] detail pages
    culture/, food/, about/, contact/
  api/contact/         Enquiry form endpoint
components/            Shared UI (header, footer, cards, sections)
data/                  Tours, culture, food, testimonials content
messages/              en.json, fr.json, ru.json — all UI strings
i18n/                  next-intl routing/config
lib/                   Types, currency formatting, region labels
public/images/         Where your photos go (see above)
```

## Notes

- This site is an independent template and is not affiliated with, or a
  copy of, any specific commercial theme's code or imagery — it was built
  from scratch to match the brief.
- No booking/payment processing is included; the contact form is a simple
  lead-generation enquiry form by design.
