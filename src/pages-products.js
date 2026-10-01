/* Products collection + product detail pages */
"use strict";
const { SITE, ICONS } = require("./layout");
const { products, formatINR } = require("./products");
const { productCard } = require("./pages-home");

function collectionMain() {
  return `
<section class="page-hero page-hero--mist">
  <div class="container">
    <p class="breadcrumbs"><a href="index.html">Home</a> / Products</p>
    <h1 class="display display--md">e.CHI <strong>frequency chips</strong></h1>
    <p class="lede">Portable frequency therapy for everyday life — applied like a patch, active for up to nine months, without chemical agents. Genuine imported stock, delivered pan-India with GST invoice by Avana Surgical Systems.</p>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="product-grid">
      ${products.map((p) => productCard(p)).join("\n      ")}
    </div>
    <p class="form-note" style="margin-top:28px">All prices in ₹ incl. GST.</p>
  </div>
</section>`;
}

function productSchema(p) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "e.CHI " + p.name,
    description: p.short,
    brand: { "@type": "Brand", name: "e.CHI by Veya Frequencies" },
    countryOfOrigin: "AT",
    offers: {
      "@type": "Offer",
      url: SITE.baseUrl + "/product-" + p.slug + ".html",
      priceCurrency: "INR",
      price: String(p.price),
      availability: "https://schema.org/PreOrder",
      seller: { "@type": "Organization", name: "Avana Surgical Systems Pvt Ltd" },
    },
  };
}

function complianceBox(p) {
  return `<div class="compliance-box">
    <h4>Product & seller information (Consumer Protection E-Commerce Rules, 2020)</h4>
    <dl>
      <dt>Product</dt><dd>e.CHI ${p.name} frequency chip</dd>
      <dt>Manufacturer</dt><dd>Veya Frequencies, [Manufacturer street address PLACEHOLDER], Austria / Germany</dd>
      <dt>Importer & distributor</dt><dd>${SITE.address}</dd>
      <dt>Country of origin</dt><dd>Austria (EU)</dd>
      <dt>MRP</dt><dd>${formatINR(p.price)} (incl. of all taxes) <span class="badge-pending">Placeholder</span></dd>
      <dt>Net contents</dt><dd>1 frequency chip + fixing plasters</dd>
      <dt>Customer care</dt><dd>${SITE.phone} · ${SITE.email}</dd>
    </dl>
  </div>`;
}

function pdpMain(p) {
  const benefits = p.benefits
    .map((b) => `<li>${ICONS.check}<span>${b}</span></li>`)
    .join("\n        ");
  const paragraphs = p.long.map((t) => `<p>${t}</p>`).join("\n      ");
  return `
<section class="section" style="padding-top:calc(var(--header-h) + 24px)">
  <div class="container">
    <p class="breadcrumbs"><a href="index.html">Home</a> / <a href="products.html">Products</a> / ${p.name}</p>
    <div class="pdp">
      <div class="pdp__gallery">
        <div class="pdp__hero-img ph-box">
          <!-- PLACEHOLDER: main product image from Veya -->
          <div class="ph ph--product"><span class="chip-illustration"><span>${p.name}</span></span><span class="ph__label">Placeholder · product image (Veya)</span></div>
        </div>
        <div class="pdp__thumbs">
          <div class="ph-box ph--product-alt"><div class="ph"><span class="ph__label">Application</span></div></div>
          <div class="ph-box ph--lifestyle"><div class="ph"><span class="ph__label">Lifestyle</span></div></div>
          <div class="ph-box ph--chip"><div class="ph"><span class="ph__label">Packaging</span></div></div>
        </div>
      </div>
      <div>
        <div class="product-card__eyebrow">${p.eyebrow}</div>
        <h1 class="pdp__title">${p.name}</h1>
        ${p.medical ? '<p><span class="badge-pending">Medical device (EU)</span></p>' : ""}
        <div class="pdp__price">${formatINR(p.price)} <small>incl. GST</small></div>
        <p class="pdp__mrp-note">MRP inclusive of all taxes · Free shipping across India <span class="badge-pending">Price placeholder</span></p>
        <p class="lede">${p.short}</p>
        <ul class="usp-inline">
        ${benefits}
        </ul>
        <div class="pdp__actions">
          <div class="qty" aria-label="Quantity">
            <button id="qty-minus" aria-label="Decrease quantity">−</button>
            <input id="pdp-qty" type="number" min="1" value="1" aria-label="Quantity">
            <button id="qty-plus" aria-label="Increase quantity">+</button>
          </div>
          <button class="btn" data-add-to-cart data-use-qty data-id="${p.slug}" data-name="${p.name}" data-price="${p.price}">Add to cart</button>
        </div>
        <p class="form-note">Pay via UPI, cards, netbanking or wallets (Razorpay) — or Cash on Delivery. GST invoice available; add your GSTIN at checkout for B2B orders.</p>
        <div class="pin-check">
          <strong>Check delivery to your PIN code</strong>
          <div class="pin-check__row">
            <input id="pin-input" inputmode="numeric" maxlength="6" placeholder="e.g. 600001" aria-label="PIN code">
            <button class="btn btn--dark btn--sm" id="pin-check-btn">Check</button>
          </div>
          <p class="pin-check__result" id="pin-result" role="status"></p>
        </div>
        <div class="prose">
      ${paragraphs}
        </div>
        ${p.regulatoryNote ? '<p class="form-note">* Classified as a non-invasive medical device in the EU.</p>' : ""}
        ${complianceBox(p)}
        <p class="form-note" style="margin-top:18px">e.CHI chips are energetic wellness products and are not intended to diagnose, treat or cure any disease${p.medical ? " (except where registered as a medical device)" : ""}. If you have physical complaints, please consult a doctor. Not for use with epilepsy, severe heart failure, organ transplants or severe mental illness — <a class="text-link" href="faq.html">see FAQ</a>.</p>
      </div>
    </div>
  </div>
</section>
<section class="section section--mist section--tight">
  <div class="container">
    <h2 class="display display--sm">You may <strong>also like</strong></h2>
    <div class="product-grid" style="margin-top:28px">
      ${products
        .filter((x) => x.slug !== p.slug)
        .slice(0, 3)
        .map((x) => productCard(x))
        .join("\n      ")}
    </div>
  </div>
</section>`;
}

module.exports = { collectionMain, pdpMain, productSchema };
