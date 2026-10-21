# Go-live checklist (remaining items)

Edit values in `src/layout.js` (SITE object) / `src/products.js`, then run `node build.js`.

## Business details
- [ ] `baseUrl` — confirm final domain (currently `https://www.echi-india.in`; also used in sitemap.xml, robots.txt, canonical URLs)
- [x] Company name — Avana Medical Devices Pvt Ltd (site-wide)
- [x] Phone — 044-2233 1061 / 1062 / 1063
- [x] Email — info@avanamedical.com
- [x] Address — No.91, Sundar Nagar 4th Avenue, Nandambakkam, Chennai 600 032
- [ ] **WhatsApp Business number** — still `91XXXXXXXXXX`; all "Chat/Order on WhatsApp" buttons are dead links until set

## Products
- [x] Range trimmed to 4 chips; MRP ₹18,400 set on all
- [x] Official product + application images (hover swap)
- [ ] Manufacturer street address (Veya) in product compliance boxes

## Media & SEO
- [x] Hero video, explainer video, chip loop (compressed, with posters)
- [x] Official e.CHI logos (white/grey) + Avana logos (colour/light)
- [x] noindex removed — site is indexable
- [ ] OG image 1200×630 (currently a generated SVG placeholder)
- [ ] GA4 / GTM / Meta Pixel / Clarity snippets (marked in src/layout.js head)
- [ ] Footer social profile URLs (Instagram / Facebook / LinkedIn currently "#")

## Content & integrations
- [ ] Veya approval of imagery and adapted copy under the distribution agreement
- [ ] Enquiry/newsletter forms → connect to CRM/ESP (currently front-end demo)
- [ ] PIN-code check → real serviceability API (currently accepts any valid PIN)
- [ ] Cart/checkout — demo only; "Proceed to checkout" opens the WhatsApp-ordering modal
