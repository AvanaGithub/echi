/* Shared layout: head, header, footer, drawers, icons */
"use strict";

const SITE = {
  name: "e.CHI India",
  baseUrl: "https://www.echi-india.in", // PLACEHOLDER: replace with the final domain
  phone: "044-2233 1061", // Avana office: 044-2233 1061 / 1062 / 1063
  whatsapp: "91XXXXXXXXXX", // PLACEHOLDER: WhatsApp business number (digits only)
  email: "info@avanasurgical.com",
  address: "Avana Surgical Systems Pvt Ltd, No.91, Sundar Nagar 4th Avenue, Nandambakkam, Chennai, Tamil Nadu 600 032, India",
  gstin: "[GSTIN PLACEHOLDER]",
};

const ICONS = {
  search: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>',
  account: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg>',
  cart: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h12l1.2 12.2a1.6 1.6 0 0 1-1.6 1.8H6.4a1.6 1.6 0 0 1-1.6-1.8L6 7Z"/><path d="M9 10V6a3 3 0 0 1 6 0v4"/></svg>',
  menu: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  check: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m4.5 12.5 5 5 10-11"/></svg>',
  arrowUp: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5m-6 6 6-6 6 6"/></svg>',
  whatsapp: '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a9.9 9.9 0 0 0-8.6 14.9L2 22l5.3-1.4A10 10 0 1 0 12 2Zm0 1.8a8.2 8.2 0 1 1-4.2 15.2l-.5-.3-3 .8.8-2.9-.3-.5A8.2 8.2 0 0 1 12 3.8Zm-3.1 4c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.9 4.5 3.9 2.2.9 2.7.7 3.1.7.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3l-1.7-.8c-.2-.1-.4-.1-.6.1l-.8.9c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.1-.2 0-.4.1-.5l.6-.7c.1-.2.1-.3.2-.5v-.5L10.5 8c-.1-.3-.3-.3-.5-.3h-1.1Z"/></svg>',
  phone: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l1.5 4.5-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2L20 15v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>',
  mail: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  pin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-5.8-7-11a7 7 0 0 1 14 0c0 5.2-7 11-7 11Z"/><circle cx="12" cy="10" r="2.6"/></svg>',
  clock: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
  instagram: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="3.8"/><circle cx="16.8" cy="7.2" r="0.4" fill="currentColor" stroke="currentColor"/></svg>',
  facebook: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.5h-2a3.5 3.5 0 0 0-3.5 3.5v3H7.5v3.5H10v5h3.5v-5h2.5l.5-3.5h-3V8.3a.8.8 0 0 1 .8-.8h2.2Z"/></svg>',
  linkedin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M8 10.8V16.5M8 7.5v.01M11.6 16.5v-3.4a2.2 2.2 0 0 1 4.4 0v3.4"/></svg>',
};

/* e.CHI wordmark: rounded-rectangle outline with "e.CHI" — mirrors the original mark */
function echiLogo(color) {
  return `<svg viewBox="0 0 150 74" role="img" aria-label="e.CHI" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="144" height="68" rx="22" fill="none" stroke="${color}" stroke-width="5"/>
    <text x="75" y="49" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="30" font-weight="600" letter-spacing="1" fill="${color}">e.CHI</text>
  </svg>`;
}

const NAV = [
  { href: "products.html", label: "Products", num: "1" },
  { href: "function.html", label: "Function", num: "2" },
  { href: "stories.html", label: "Stories", num: "3" },
  { href: "about.html", label: "About Us", num: "4" },
  { href: "contact.html", label: "Contact", num: "5" },
];

function head({ title, description, path, ogType = "website", schema = [], extraHead = "" }) {
  const url = SITE.baseUrl + "/" + (path === "index.html" ? "" : path);
  const schemaBlocks = schema
    .map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`)
    .join("\n  ");
  return `<!DOCTYPE html>
<html lang="en-IN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex, nofollow"><!-- PREVIEW ONLY: remove this line at go-live so the site can be indexed -->
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="${url}">
  <link rel="alternate" hreflang="en-IN" href="${url}">
  <link rel="alternate" hreflang="x-default" href="${url}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:type" content="${ogType}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${SITE.baseUrl}/assets/img/og-default.svg"><!-- PLACEHOLDER: replace with licensed OG image (1200x630 WebP) from Veya -->
  <meta property="og:locale" content="en_IN">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="assets/img/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/styles.css?v=${Date.now()}">
  ${schemaBlocks}
  <!-- ANALYTICS PLACEHOLDERS: add GA4 (gtag.js), Google Tag Manager, Meta Pixel and Microsoft Clarity snippets here before go-live -->
  ${extraHead}
</head>`;
}

function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "e.CHI India — Avana Surgical Systems Pvt Ltd",
    url: SITE.baseUrl,
    logo: SITE.baseUrl + "/assets/img/favicon.svg",
    description:
      "Authorised distributor of e.CHI by Veya Frequencies in India. Portable frequency therapy chips, imported and distributed by Avana Surgical Systems Pvt Ltd, Chennai.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: SITE.phone,
      email: SITE.email,
      areaServed: "IN",
      availableLanguage: ["en"],
    },
  };
}

function announcementBar() {
  const items = [
    '🏃 Recommended by professional athletes',
    '🌱 Natural, drug-free alternative',
  ];
  return `<div class="announce" role="region" aria-label="Announcements">
    <div class="announce__track">
      ${items.map((t, i) => `<div class="announce__item${i === 0 ? " is-active" : ""}">${t}</div>`).join("\n      ")}
    </div>
  </div>`;
}

function header({ overlay = false, current = "" }) {
  const cls = overlay ? "header header--overlay" : "header header--page";
  const logoColor = "currentColor";
  return `<a class="skip-link" href="#main">Skip to content</a>
${announcementBar()}
<header class="${cls}" id="site-header">
  <div class="container header__inner">
    <div class="header__left">
      <button class="icon-btn menu-btn" id="menu-btn" aria-label="Open menu">${ICONS.menu}</button>
      <a class="header__avana" href="about.html" title="Avana Surgical Systems">
        <img class="header__avana-color" src="assets/img/avana-logo.webp" alt="Avana Surgical Systems" width="2000" height="742">
        <img class="header__avana-light" src="assets/img/avana-logo-light.webp" alt="" aria-hidden="true" width="2000" height="742">
      </a>
    </div>
    <a class="brand" href="index.html" aria-label="e.CHI home">${echiLogo(logoColor)}</a>
    <div class="header__right">
      <nav class="nav" aria-label="Main navigation">
        ${NAV.map((n) => `<a href="${n.href}"${current === n.href ? ' class="is-current"' : ""}>${n.label}</a>`).join("\n        ")}
      </nav>
    </div>
  </div>
</header>
<div class="drawer-scrim" id="drawer-scrim"></div>
<nav class="mobile-nav" id="mobile-nav" aria-label="Mobile navigation">
  ${NAV.map((n) => `<a href="${n.href}">${n.label}</a>`).join("\n  ")}
  <a href="faq.html">FAQ</a>
  <a href="become-a-partner.html">Become a Partner</a>
  <div class="mobile-nav__foot">
    e.CHI by Veya Frequencies<br>
    Distributed in India by Avana Surgical Systems Pvt Ltd, Chennai
  </div>
</nav>`;
}

function cartDrawer() {
  return `<aside class="cart-drawer" id="cart-drawer" aria-label="Shopping cart">
  <div class="cart-drawer__head">
    <h3>Your cart</h3>
    <button class="icon-btn" data-close-drawer aria-label="Close cart">✕</button>
  </div>
  <div class="cart-drawer__body" id="cart-body"></div>
  <div class="cart-drawer__foot">
    <div class="cart-total"><span>Subtotal</span><span id="cart-total">₹0</span></div>
    <p class="cart-note">Prices incl. GST. Free shipping across India. GST invoice available at checkout (add your GSTIN for B2B orders).</p>
    <button class="btn" id="checkout-btn" style="width:100%">Proceed to checkout</button>
  </div>
</aside>
<div class="modal-scrim" id="checkout-modal">
  <div class="modal" role="dialog" aria-modal="true" aria-label="Checkout information">
    <button class="modal__close" data-close-modal aria-label="Close">✕</button>
    <h3>Checkout — coming online soon</h3>
    <p style="color:var(--ink-soft)">Secure payment via <strong>Razorpay</strong> (UPI, cards, netbanking, wallets) and <strong>Cash on Delivery</strong> is being connected. <span class="badge-pending">Placeholder</span></p>
    <p style="color:var(--ink-soft)">Until then, order directly from our team — we deliver pan-India with a GST invoice.</p>
    <a class="btn" style="width:100%" href="https://wa.me/${SITE.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20order%20an%20e.CHI%20frequency%20chip." target="_blank" rel="noopener">Order on WhatsApp</a>
    <p class="form-note">Or call ${SITE.phone} · ${SITE.email}</p>
  </div>
</div>`;
}

/* Explainer video section — shared by the homepage and Function page */
function explainerSection(extraClass = "") {
  return `<section class="section video-section${extraClass ? " " + extraClass : ""}">
  <div class="container" style="max-width:980px;text-align:center">
    <span class="eyebrow">How it works</span>
    <h2 class="display display--md">Frequency therapy,<br><strong>explained in minutes</strong></h2>
    <p class="lede" style="margin-inline:auto">Watch how e.CHI frequency chips are designed to support your body's own regulation — no devices, no cables, no chemical agents.</p>
    <div class="video-frame">
      <video preload="metadata" playsinline>
        <source src="assets/video/explainer-english.mp4" type="video/mp4">
      </video>
      <button class="video-frame__play" aria-label="Play explainer video">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5-11-6.5Z"/></svg>
      </button>
    </div>
  </div>
</section>`;
}

const OFFICES = [
  {
    city: "Chennai",
    label: "Corporate Office",
    address: "No.91, Sundar Nagar 4th Avenue, Nandambakkam, Chennai – 600032, Tamil Nadu, India",
    phoneDisplay: "+91 44 2233 1061 / 1062 / 1063",
    phoneTel: "+914422331061",
  },
  {
    city: "Mumbai",
    label: "Regional Office",
    address: "The Summit Business Bay (Omkar), Office No. 606, 6th Floor, Andheri Kurla Road, Chakala, Andheri East, Mumbai – 400093",
    phoneDisplay: "+91 22 4970 0628",
    phoneTel: "+912249700628",
  },
  {
    city: "Delhi",
    label: "Regional Office",
    address: "Avana Medical Devices Pvt Ltd, B6, Qutab Institutional Area, New Delhi, Delhi – 110016",
    phoneDisplay: "+91 11 4153 8222",
    phoneTel: "+911141538222",
  },
  {
    city: "Bengaluru",
    label: "Regional Office",
    address: "No.52, 3rd Floor, Agastya Arcade, 80 Feet Road, New BEL Rd, Devasandra Layout, Bengaluru – 560094, Karnataka, India",
    phoneDisplay: "+91 80 2351 2259",
    phoneTel: "+918023512259",
  },
];

function officesBlock() {
  const tabs = OFFICES.map(
    (o, i) => `<button class="office-tab${i === 0 ? " is-active" : ""}" data-office="${i}">${o.city}</button>`
  ).join("\n        ");
  const panels = OFFICES.map(
    (o, i) => `<div class="office-panel${i === 0 ? " is-active" : ""}" data-office-panel="${i}">
          <strong>${o.label} – ${o.city}</strong>
          <p>${o.address}</p>
          <div class="office-panel__actions">
            <a href="tel:${o.phoneTel}">${ICONS.phone} ${o.phoneDisplay}</a>
            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.address)}" target="_blank" rel="noopener">${ICONS.pin} Locate us</a>
          </div>
        </div>`
  ).join("\n        ");
  return `<div class="footer__offices">
      <h4>Our offices</h4>
      <div class="office-tabs" role="tablist" aria-label="Office locations">
        ${tabs}
      </div>
      <div class="office-panels">
        ${panels}
      </div>
    </div>`;
}

function footer() {
  const col = (title, links) => `<div>
      <h4>${title}</h4>
      <ul>${links.map(([label, href]) => `<li><a href="${href}">${label}</a></li>`).join("")}</ul>
    </div>`;
  return `<footer class="footer" id="footer">
  <div class="container">
    <div class="footer__grid">
      <div class="footer__brand">
        <a href="about.html" title="Avana Surgical Systems"><img class="footer__brand-logo" src="assets/img/avana-logo-light.webp" alt="Avana Surgical Systems" width="2000" height="742" loading="lazy"></a>
        <p style="max-width:34ch">e.CHI by Veya Frequencies, Austria/Germany.<br>Imported and distributed in India by Avana Surgical Systems Pvt Ltd, Chennai.</p>
        <div class="social-links" aria-label="Social media">
          <!-- PLACEHOLDER: link to e.CHI India social profiles when live -->
          <a href="#" aria-label="Instagram (coming soon)">${ICONS.instagram}</a>
          <a href="#" aria-label="Facebook (coming soon)">${ICONS.facebook}</a>
          <a href="#" aria-label="LinkedIn (coming soon)">${ICONS.linkedin}</a>
        </div>
      </div>
      ${col("e.CHI", [["About Us", "about.html"], ["Stories", "stories.html"], ["Products", "products.html"], ["Technology", "function.html"]])}
      ${col("Service", [["Contact", "contact.html"], ["FAQ", "faq.html"], ["Shipping", "shipping-policy.html"], ["Returns & Refunds", "returns-refunds.html"]])}
    </div>
    ${officesBlock()}
    <div class="footer__meta">
      <p class="footer__disclaimer">
        e.CHI frequency chips are energetic wellness products, not medical products, unless a specific chip is expressly
        registered as a medical device in India. They are not a
        substitute for professional medical advice, diagnosis or treatment. If you have physical complaints, please consult a
        doctor. Do not use e.CHI chips if you have epilepsy, severe heart failure, an organ transplant or a severe mental
        illness — see our <a href="faq.html" class="text-link" style="color:inherit">FAQ on contraindications</a>.
        Avana Surgical Systems Pvt Ltd is the importer and distributor and makes no product-efficacy claims of its own.
      </p>
      <div class="footer__bottom">
        <span>© 2026 Veya Frequencies · Distributed in India by Avana Surgical Systems Pvt Ltd</span>
        <a href="#top" id="footer-top-link">Back to top ↑</a>
      </div>
    </div>
  </div>
</footer>
<button class="back-to-top" id="back-to-top" aria-label="Back to top">${ICONS.arrowUp}</button>
<div class="toast" id="toast" role="status"></div>
${cartDrawer()}
<script src="assets/js/main.js" defer></script>
</body>
</html>`;
}

function page({ title, description, path, current = "", overlay = false, bodyClass = "", main, schema = [], ogType }) {
  return `${head({ title, description, path, schema, ogType })}
<body id="top" class="${bodyClass}">
${header({ overlay, current })}
<main id="main">
${main}
</main>
${footer()}`;
}

module.exports = { SITE, ICONS, NAV, echiLogo, head, header, footer, page, organizationSchema, announcementBar, explainerSection };
