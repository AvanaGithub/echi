# Go-live placeholder checklist

Everything marked `PLACEHOLDER` / `Pending` in the site, in one list.
Edit the values in `src/layout.js` (SITE object) and `src/products.js`, then run `node build.js`.

## 1. Business details (`src/layout.js` → SITE)
- [ ] `baseUrl` — final domain (currently `https://www.echi-india.in`)
- [x] `phone` — 044-2233 1061 / 1062 / 1063 (from ASSP site)
- [ ] `whatsapp` — WhatsApp Business number (digits only, e.g. 91XXXXXXXXXX)
- [x] `email` — info@avanasurgical.com (from ASSP site)
- [x] `address` — No.91, Sundar Nagar 4th Avenue, Nandambakkam, Chennai, Tamil Nadu 600 032
- [ ] `gstin` — Avana GSTIN (also referenced in Terms)
- [ ] CIN in `terms.html` (src/pages-legal.js)

## 2. Prices (`src/products.js`)
- [ ] Final India MRP for all 8 chips (currently ₹12,999 / ₹9,999 placeholders based on EU €127/€99)
- [ ] Confirm whether EnergyFriend and SleepFriend are in the India range (flagged "TBC")
- [ ] Remove the "Price placeholder" badges once confirmed (search `badge-pending` in src/)

## 3. Images (all from Veya, licensed)
- [ ] Hero slide 1 — couple walking, golden hillside (WebP, ~2000px wide)
- [ ] Hero slide 2 — water/wave imagery
- [ ] Product shots + application shots for hover swap (8 products × 2)
- [ ] Feature-block images (4), science/lab image, function-page images (3)
- [ ] Athlete portraits & stories — **pending licence from Veya for India use**
- [x] Avana logo — added as `assets/img/avana-logo.webp` (header + footer badges)
- [ ] OG image 1200×630 (replaces assets/img/og-default.svg)
- [ ] Convert all to WebP with `loading="lazy"` for Lighthouse 90+

## 4. Compliance & legal
- [ ] Grievance Officer name, email, phone (grievance page + product pages)
- [ ] Manufacturer street address (Veya) in product compliance boxes
- [ ] CDSCO / medical-device registration status for the Knee Osteoarthritis chip —
      then update or remove all "[PENDING REGULATORY REVIEW]" badges
- [ ] Legal review of Privacy Policy (DPDP) and Terms by counsel

## 5. Integrations
- [ ] Razorpay checkout (currently a placeholder modal → WhatsApp ordering)
- [ ] Real PIN-code serviceability API (currently accepts any valid 6-digit PIN)
- [ ] Newsletter/enquiry forms → connect to CRM/ESP (currently front-end demo, `data-demo-form`)
- [ ] Google Maps embed on Contact page (iframe snippet marked in src/pages-contact.js)
- [ ] GA4, Google Tag Manager, Meta Pixel, Microsoft Clarity snippets
      (marked `ANALYTICS PLACEHOLDERS` in src/layout.js head)
- [ ] Social profile URLs in footer (Instagram / Facebook / LinkedIn)
- [ ] Hindi / Tamil language versions (header toggle is a placeholder)

## 6. Content approvals
- [ ] All product/marketing copy to be approved by Veya Frequencies (adapted copy is used as placeholder)
- [ ] Stories page: replace placeholder cards with licensed athlete stories or Indian testimonials
