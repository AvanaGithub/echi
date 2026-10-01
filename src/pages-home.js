/* Homepage */
"use strict";
const { ICONS, SITE } = require("./layout");
const { products, homeGrid, formatINR } = require("./products");

const USPS = ["Easy to use", "Active for up to 9 months", "No chemical agents", "Scientifically researched"];

function uspStrip() {
  const items = USPS.map(
    (u) => `<div class="usp-strip__item">${ICONS.check}<span>${u}</span></div>`
  ).join("");
  return `<section class="usp-strip" aria-label="Why e.CHI">
    <div class="usp-strip__track">${items}${items}${items}</div>
  </section>`;
}

function productCard(p) {
  return `<article class="product-card">
    ${p.flag ? `<span class="product-card__flag">${p.flag}</span>` : ""}
    <a href="product-${p.slug}.html" aria-label="${p.name}">
      <div class="product-card__media ph-box">
        <!-- PLACEHOLDER: product shot + application/lifestyle shot from Veya (hover swap) -->
        <div class="ph ph--product ph--main"><span class="chip-illustration"><span>${p.name}</span></span><span class="ph__label">Placeholder · product image (Veya)</span></div>
        <div class="ph ph--product-alt ph--alt"><span class="ph__label">Placeholder · application image (Veya)</span></div>
      </div>
    </a>
    <div class="product-card__eyebrow">${p.eyebrow}</div>
    <h3 class="product-card__name"><a href="product-${p.slug}.html">${p.name}</a></h3>
    <div class="product-card__price">${formatINR(p.price)} <small>incl. GST</small></div>
    <div class="product-card__quick">
      <a class="btn" href="product-${p.slug}.html">Learn more</a>
    </div>
  </article>`;
}

const FAQ_HOME = [
  ["When can I expect to notice the first changes?", "Every body responds in its own time. Some users report a difference within days, for others it takes a few weeks of continuous wear. We recommend wearing the chip consistently for at least four weeks before judging its effect."],
  ["How long can I wear the e.CHI frequency chip?", "The chip is designed for continuous wear, day and night. It remains active for up to nine months from first use."],
  ["Does the chip need to be removed overnight?", "No. The chip is designed to stay on around the clock — many users find night-time, when the body regenerates, especially valuable."],
  ["Where do I correctly attach the chip?", "Place the chip on or as close as possible to the affected area — for example on the knee for the Knee Osteoarthritis chip, or on the lower back for BackFriend. Each product page shows the recommended position."],
  ["Does the chip have to be worn directly on the skin?", "Direct skin contact works best, but the chip can also be worn very close to the body — for example fixed inside a knee sleeve or waistband — without losing its function."],
  ["What if I have sensitive skin or react to plasters?", "The chip itself is made of skin-friendly silicone. If the adhesive plaster irritates your skin, you can fix the chip with a hypoallergenic tape or wear it in a sleeve close to the body."],
  ["How long does the e.CHI frequency chip last?", "Each chip stays active for up to nine months from first use. After that, simply replace it with a new one."],
  ["Can I wear the chip while showering, bathing or playing sports?", "Yes. The chip is water-resistant and made for everyday life — showering, swimming, sweating and sport are no problem. Replace the plaster if it loosens."],
  ["Can the chip be worn by children or during pregnancy?", "As a precaution, we recommend consulting your doctor before use by children or during pregnancy."],
  ["Are there situations in which the chip should not be used?", "Yes. Do not use e.CHI chips if you have epilepsy, severe heart failure, an organ transplant or a severe mental illness. If you are unsure, please speak to your doctor first."],
];

function faqAccordion(faqs) {
  return `<div class="accordion">
    ${faqs
      .map(
        ([q, a], i) => `<div class="accordion__item">
      <button class="accordion__btn" aria-expanded="false" id="faq-btn-${i}">${q}</button>
      <div class="accordion__panel" role="region" aria-labelledby="faq-btn-${i}"><p>${a}</p></div>
    </div>`
      )
      .join("\n    ")}
  </div>`;
}

function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

function homeMain() {
  return `
<!-- ============================== HERO SLIDER ============================== -->
<section class="hero" aria-label="Highlights">
  <!-- Single shared background video for all hero slides.
       File: assets/video/hero-1.mp4 (+ optional poster hero-1.jpg).
       The gradient below remains the fallback if the file is missing. -->
  <div class="hero__media ph-box ph--hero-1">
    <video class="hero__video" autoplay muted loop playsinline preload="metadata" poster="assets/video/hero-1.jpg" aria-hidden="true" tabindex="-1">
      <source src="assets/video/hero-1.mp4" type="video/mp4">
    </video>
  </div>
  <div class="hero__slide is-active">
    <div class="hero__content container">
      <h1 class="display hero__heading">Less knee pain.<br><strong>More movement.</strong></h1>
      <p class="hero__chip">The <strong>e.CHI Knee Osteoarthritis</strong> chip is a non-invasive device for pain relief in knee osteoarthritis, clinically evaluated in Europe.</p>
      <a class="btn" href="product-knee-osteoarthritis.html">Discover now</a>
    </div>
  </div>
  <div class="hero__slide">
    <div class="hero__content container">
      <h1 class="display hero__heading">A new era of<br><strong>regeneration</strong></h1>
      <p class="hero__chip">Portable frequency therapy</p>
      <a class="btn" href="products.html">Discover now</a>
    </div>
  </div>
  <div class="hero__dots">
    <button class="hero__dot is-active" aria-label="Slide 1">1</button>
    <button class="hero__dot" aria-label="Slide 2">2</button>
  </div>
</section>

${uspStrip()}

<!-- ============================== PRODUCT GRID ============================== -->
<section class="section" id="products">
  <div class="container">
    <div class="section-head">
      <h2 class="display display--md">e.CHI <strong>frequency chips</strong></h2>
      <a class="btn btn--ghost" href="products.html">All products</a>
    </div>
    <div class="product-grid">
      ${homeGrid.map((slug) => productCard(products.find((p) => p.slug === slug))).join("\n      ")}
    </div>
  </div>
</section>

<!-- ============================== FEATURES ============================== -->
<section class="section section--mist">
  <div class="container">
    <h2 class="display display--md">Welcome to the era of<br><strong>portable frequency therapy.</strong></h2>
    <p class="lede">Your body is a masterpiece. It knows how to regulate, regenerate and balance itself — sometimes it just needs a gentle nudge.</p>
    <a class="text-link" href="function.html">Learn more</a>
    <div class="feature-grid">
      <article class="feature-card">
        <div class="feature-card__media ph-box"><div class="ph ph--science"><span class="ph__label">Placeholder · image (Veya)</span></div></div>
        <div class="feature-card__body">
          <h3>Biophysical innovation</h3>
          <p>Advanced frequency algorithms support the body's own processes at the cellular level — gently, naturally and without any technical device.</p>
        </div>
      </article>
      <article class="feature-card">
        <div class="feature-card__media ph-box"><div class="ph ph--lifestyle"><span class="ph__label">Placeholder · image (Veya)</span></div></div>
        <div class="feature-card__body">
          <h3>Natural companions in everyday life</h3>
          <p>e.CHI frequency chips are applied to the affected area like a patch. From there they activate the body's bioelectrical field — no battery, no device, and active for up to nine months.</p>
        </div>
      </article>
      <article class="feature-card">
        <div class="feature-card__media ph-box"><div class="ph ph--chip"><span class="chip-illustration"><span>e.CHI</span></span><span class="ph__label">Placeholder · image (Veya)</span></div></div>
        <div class="feature-card__body">
          <h3>No side effects</h3>
          <p>e.CHI frequency chips are made of skin-friendly silicone and contain no chemical agents whatsoever.</p>
        </div>
      </article>
      <article class="feature-card">
        <div class="feature-card__media ph-box"><div class="ph ph--wave"><span class="ph__label">Placeholder · image (Veya)</span></div></div>
        <div class="feature-card__body">
          <h3>Scientifically researched</h3>
          <p>e.CHI frequency technology builds on more than 30 years of biophysical research and is continuously tested in cell-biological studies.</p>
        </div>
      </article>
    </div>
  </div>
</section>

<!-- ============================== SCIENCE ============================== -->
<section class="section section--ink">
  <div class="container split">
    <div>
      <h2 class="display display--md">30+ years of<br><strong>scientific experience<br>in biophysics</strong></h2>
      <p class="lede">Our technology partners in Austria, Germany and Switzerland are among the pioneers of modern frequency research.</p>
      <p class="lede">Over three decades of research have produced highly precise methods for analysing and digitising natural frequencies and storing them on carrier materials using a patented process. This know-how is the foundation of e.CHI technology today.</p>
      <a class="btn" href="function.html">Learn more</a>
    </div>
    <div class="split__media ph-box ph--science">
      <!-- PLACEHOLDER: laboratory / research imagery from Veya -->
      <div class="ph"><span class="ph__label">Placeholder · research image (Veya)</span></div>
    </div>
  </div>
</section>

<!-- ============================== STORIES ============================== -->
<section class="section">
  <div class="container">
    <div class="section-head">
      <div>
        <h2 class="display display--md">The original from<br><strong>top-level sports</strong></h2>
        <p class="lede">The patented e.CHI frequency chips were originally developed for elite sport, where Olympic and world champions have relied on this technology for years.</p>
      </div>
      <a class="btn btn--ghost" href="stories.html">All stories</a>
    </div>
    <!-- NOTE: Athlete names/images require a licence from Veya for India use.
         Until confirmed, this section shows placeholder story cards. -->
    <div class="story-grid">
      <article class="story-card">
        <div class="story-card__media ph-box ph--portrait"><div class="ph"><span class="ph__label">Placeholder · athlete image (pending licence)</span></div></div>
        <h3 class="story-card__name">Stories from India</h3>
        <p class="story-card__role">Olympic & world-champion athlete stories — coming soon</p>
        <a class="text-link" href="stories.html">Learn more</a>
      </article>
      <article class="story-card">
        <div class="story-card__media ph-box ph--portrait"><div class="ph"><span class="ph__label">Placeholder · athlete image (pending licence)</span></div></div>
        <h3 class="story-card__name">Stories from India</h3>
        <p class="story-card__role">Indian sports & physiotherapy stories — coming soon</p>
        <a class="text-link" href="stories.html">Learn more</a>
      </article>
      <article class="story-card">
        <div class="story-card__media ph-box ph--portrait"><div class="ph"><span class="ph__label">Placeholder · athlete image (pending licence)</span></div></div>
        <h3 class="story-card__name">Stories from India</h3>
        <p class="story-card__role">Customer experiences from across India — coming soon</p>
        <a class="text-link" href="stories.html">Learn more</a>
      </article>
    </div>
  </div>
</section>

<!-- ============================== FAQ ============================== -->
<section class="section section--mist">
  <div class="container" style="max-width:900px">
    <div class="section-head">
      <h2 class="display display--md"><strong>FAQs</strong></h2>
      <a class="text-link" href="faq.html">See all questions</a>
    </div>
    <p class="lede">Frequently asked questions, briefly explained.</p>
    ${faqAccordion(FAQ_HOME)}
  </div>
</section>

<!-- ============================== NEWSLETTER ============================== -->
<section class="section section--tight">
  <div class="container">
    <div class="newsletter">
      <h2 class="display display--sm">Subscribe and get<br><strong>10% off your first order</strong></h2>
      <p class="lede" style="margin-inline:auto">Tips on frequency therapy, new products for India and exclusive offers — no spam, unsubscribe anytime.</p>
      <form data-demo-form data-success="Welcome aboard! Your 10% code is on its way.">
        <input type="email" name="email" placeholder="Your email address" required aria-label="Email address">
        <input type="tel" name="whatsapp" placeholder="WhatsApp number (+91…)" pattern="^(\\+91[\\-\\s]?)?[6-9][0-9]{9}$" aria-label="WhatsApp number">
        <button class="btn" type="submit">Subscribe</button>
      </form>
      <p class="form-note">By subscribing you agree to our <a class="text-link" href="privacy-policy.html">Privacy Policy</a> (DPDP Act 2023).</p>
    </div>
  </div>
</section>`;
}

module.exports = { homeMain, faqAccordion, faqSchema, productCard, uspStrip, FAQ_HOME, USPS };

