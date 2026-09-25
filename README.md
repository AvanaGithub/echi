# e.CHI India — Website (Avana Surgical Systems, Authorised Distributor)

A pixel-faithful, India-localised replica of the e.CHI by Veya Frequencies site
(e-chi.de/en design system), built as a static multi-page site. e.CHI remains the
primary brand; Avana Surgical Systems Pvt Ltd appears as the authorised
distributor and service partner for India.

## Design system (sampled from the original)

| Token | Value |
|---|---|
| Font | Space Grotesk (Google Fonts, 300–700) |
| Ink / text | `#020101` |
| Background | `#ffffff`, light-grey sections `#f5f3f0` |
| Accent (pill buttons) | `#EFAE45`, hover `#E09C2B`, radius 32px, bold white label |
| Headline pattern | First line regular (400), second line bold (700), letter-spacing −0.04em |
| Navigation | Numbered: Products¹ Function² Stories³ About Us⁴ Contact⁵ |

## Structure

- `build.js` — static site generator (`node build.js` regenerates all pages)
- `src/` — templates and content:
  - `layout.js` — head/SEO, header, footer, drawers, contact constants (**edit SITE here**)
  - `products.js` — product catalogue and INR prices (**edit prices here**)
  - `pages-home.js`, `pages-products.js`, `pages-info.js`, `pages-contact.js`, `pages-legal.js`
- `assets/css/styles.css` — the full design system
- `assets/js/main.js` — slider, announcement rotation, cart drawer, accordion, PIN check, cookie banner, forms
- `*.html` — 21 generated pages + `sitemap.xml` + `robots.txt` (do not edit by hand; edit `src/` and rebuild)

## Pages

Home · Products · 8 product detail pages · Function · Stories · About Us ·
Contact · FAQ · Become a Partner · Shipping Policy · Returns & Refunds · Terms ·
Privacy Policy (DPDP Act 2023) · Grievance Redressal

## Run locally

```
node build.js
npx http-server -p 8090 .
```

## India compliance built in

- Consumer Protection (E-Commerce) Rules 2020 box on every product page
  (manufacturer, importer, country of origin, MRP, customer care)
- Grievance Redressal page with 48h/30-day timelines
- DPDP Act 2023 privacy policy + cookie consent banner
- Original disclaimer preserved in meaning (energetic wellness products, not
  medical products; contraindications FAQ)
- All medical-device claims for India marked **PENDING REGULATORY REVIEW**

## Before go-live

See `PLACEHOLDERS.md` for the complete checklist of items to replace
(prices, images, contact details, GSTIN, analytics IDs, licensed content).

**Content licensing note:** product imagery, athlete stories/photos and final
marketing copy must come from (and be approved by) Veya Frequencies under the
distribution agreement before publishing. Placeholder gradients and adapted copy
are used until then.
