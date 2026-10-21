# e.CHI India — Website (Avana Medical Devices, Authorised Distributor)

An India-localised site for e.CHI by Veya Frequencies (e-chi.de design system),
built as a static multi-page site. e.CHI remains the primary brand; Avana
Medical Devices Pvt Ltd appears as the authorised distributor and service
partner for India.

## Design system (sampled from the original)

| Token | Value |
|---|---|
| Font | Space Grotesk (Google Fonts, 300–700) |
| Ink / text | `#020101` |
| Background | `#ffffff`, light-grey sections `#f5f3f0` |
| Accent (pill buttons) | `#EFAE45`, hover `#E09C2B`, radius 32px, bold white label |
| Headline pattern | First line regular (400), second line bold (700), letter-spacing −0.04em |

## Structure

- `build.js` — static site generator (`node build.js` regenerates all pages)
- `src/` — templates and content:
  - `layout.js` — head/SEO, header, footer, offices, contact constants (**edit SITE here**)
  - `products.js` — product catalogue and INR prices (**edit prices here**)
  - `pages-home.js`, `pages-products.js`, `pages-info.js`, `pages-contact.js`, `pages-legal.js`
- `assets/css/styles.css` — the full design system
- `assets/js/main.js` — hero video, announcement rotation, accordion, office tabs, video players, forms
- `assets/video/` — hero, explainer and chip videos (compressed, with poster frames)
- `*.html` — 13 generated pages + `sitemap.xml` + `robots.txt` (do not edit by hand; edit `src/` and rebuild)

## Pages (13)

Home · Products · 4 product detail pages (Knee Osteoarthritis, PainFriend,
BackFriend, InflammationFriend) · Function · Stories · About Us · Contact ·
FAQ · Shipping Policy · Returns & Refunds

## Run locally

```
node build.js
node serve.js 8090
```

`serve.js` is for local preview only — in production, serve the folder with
nginx (or any static web server).

## Deploy (DigitalOcean droplet + nginx)

1. Upload the whole folder (minus `.git`) to `/var/www/echi` on the droplet.
2. nginx server block: root `/var/www/echi`, `index index.html`, domain per DNS.
3. HTTPS via certbot. Re-deploy = rebuild locally, re-upload changed files.

## Before go-live

See `PLACEHOLDERS.md` for the remaining items (WhatsApp number, manufacturer
address, OG image, analytics IDs, Veya content approval).
