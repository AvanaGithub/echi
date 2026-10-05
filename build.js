/* e.CHI India — static site generator
   Usage: node build.js   (writes *.html + sitemap.xml + robots.txt into this folder) */
"use strict";
const fs = require("fs");
const path = require("path");

const { SITE, page, organizationSchema } = require("./src/layout");
const { products } = require("./src/products");
const { homeMain, faqSchema, FAQ_HOME } = require("./src/pages-home");
const { collectionMain, pdpMain, productSchema } = require("./src/pages-products");
const { functionMain, storiesMain, aboutMain } = require("./src/pages-info");
const { contactMain, faqMain, partnerMain } = require("./src/pages-contact");
const { shippingMain, returnsMain } = require("./src/pages-legal");

const OUT = __dirname;
const org = organizationSchema();

const pages = [
  {
    path: "index.html",
    title: "e.CHI India — Portable Frequency Therapy Chips | Official Distributor",
    description:
      "e.CHI frequency chips, now in India. Drug-free, portable frequency therapy for knee pain, back pain and everyday wellness. Free pan-India shipping. Authorised distributor: Avana Surgical Systems, Chennai.",
    overlay: true,
    bodyClass: "has-hero",
    schema: [org, faqSchema(FAQ_HOME)],
    main: homeMain(),
  },
  {
    path: "products.html",
    current: "products.html",
    title: "e.CHI Frequency Chips — Buy in India | Knee, Pain, Back & Inflammation",
    description:
      "Shop the e.CHI frequency chip range in India: Knee Osteoarthritis, PainFriend, BackFriend and InflammationFriend. ₹ prices incl. GST, free shipping, genuine imported stock.",
    schema: [org],
    main: collectionMain(),
  },
  {
    path: "function.html",
    current: "function.html",
    title: "How e.CHI Frequency Chips Work — The Science | e.CHI India",
    description:
      "How portable frequency therapy works: 30+ years of biophysical research, natural frequencies digitised and stored on a chip you wear like a patch. No battery, no chemicals, active up to 9 months.",
    schema: [org],
    main: functionMain(),
  },
  {
    path: "stories.html",
    current: "stories.html",
    title: "Stories from India | e.CHI India",
    description:
      "Experiences with e.CHI frequency chips from Indian athletes, physiotherapists, clinicians and everyday users — coming soon. Share your own e.CHI story with us.",
    schema: [org],
    main: storiesMain(),
  },
  {
    path: "about.html",
    current: "about.html",
    title: "About e.CHI & Avana Medical Devices — Your Partner in India",
    description:
      "e.CHI by Veya Frequencies: 30+ years of biophysical research from Austria, Germany and Switzerland. Distributed in India by Avana Medical Devices Pvt Ltd, Chennai — transforming healthcare through technology.",
    schema: [org],
    main: aboutMain(),
  },
  {
    path: "contact.html",
    current: "contact.html",
    title: "Contact e.CHI India — Avana Medical Devices, Chennai",
    description:
      "Questions about e.CHI frequency chips? Contact Avana Medical Devices Pvt Ltd in Chennai — phone, email, WhatsApp and enquiry form. Mon–Sat, 9:30 AM–6:30 PM IST.",
    schema: [org],
    main: contactMain(),
  },
  {
    path: "faq.html",
    title: "FAQ — e.CHI Frequency Chips India | How to Wear & Use",
    description:
      "Answers on wearing e.CHI frequency chips: where to attach them, how long they last, showering and sport, sensitive skin, and contraindications.",
    schema: [org, faqSchema(FAQ_HOME)],
    main: faqMain(),
  },
  {
    path: "become-a-partner.html",
    title: "Become an e.CHI Partner in India — Clinics, Physios, Pharmacies & Dealers",
    description:
      "Partner with Avana Surgical Systems to offer e.CHI frequency therapy in India. Partner pricing, training, marketing support and genuine imported stock for clinics, physiotherapists, pharmacies and dealers.",
    schema: [org],
    main: partnerMain(),
  },
  {
    path: "shipping-policy.html",
    title: "Shipping Policy — Free Pan-India Delivery | e.CHI India",
    description:
      "Free shipping across India on all e.CHI orders. Delivery in 3–7 working days for most PIN codes, with tracking by SMS, email and WhatsApp.",
    schema: [org],
    main: shippingMain(),
  },
  {
    path: "returns-refunds.html",
    title: "Returns & Refunds Policy | e.CHI India",
    description:
      "7-day returns on unopened e.CHI chips, free replacement for defective or damaged items, refunds in 7–10 working days. Avana Surgical Systems, Chennai.",
    schema: [org],
    main: returnsMain(),
  },
];

/* Product detail pages */
for (const p of products) {
  pages.push({
    path: `product-${p.slug}.html`,
    current: "products.html",
    title: `e.CHI ${p.name} — Frequency Chip India | Price incl. GST`,
    description: p.short.slice(0, 155),
    ogType: "product",
    schema: [org, productSchema(p)],
    main: pdpMain(p),
  });
}

for (const pg of pages) {
  fs.writeFileSync(path.join(OUT, pg.path), page(pg), "utf8");
  console.log("built", pg.path);
}

/* sitemap.xml */
const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map((pg) => {
    const loc = SITE.baseUrl + "/" + (pg.path === "index.html" ? "" : pg.path);
    return `  <url><loc>${loc}</loc><lastmod>${today}</lastmod><xhtml:link rel="alternate" hreflang="en-IN" href="${loc}"/></url>`;
  })
  .join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(OUT, "sitemap.xml"), sitemap, "utf8");

/* robots.txt */
fs.writeFileSync(
  path.join(OUT, "robots.txt"),
  `User-agent: *\nAllow: /\nSitemap: ${SITE.baseUrl}/sitemap.xml\n`,
  "utf8"
);

console.log(`\nDone — ${pages.length} pages + sitemap.xml + robots.txt`);
