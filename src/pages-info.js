/* Function / How it works, Stories, About Us */
"use strict";
const { ICONS, SITE, explainerSection } = require("./layout");

function functionMain() {
  return `
<section class="page-hero page-hero--mist">
  <div class="container">
    <p class="breadcrumbs"><a href="index.html">Home</a> / Function</p>
    <h1 class="display display--md">How e.CHI<br><strong>frequency chips work</strong></h1>
    <p class="lede">Your body is a masterpiece. It knows how to regulate, regenerate and balance itself — sometimes it just needs a gentle nudge. e.CHI provides that nudge, without devices, cables or chemical agents.</p>
  </div>
</section>

<section class="section">
  <div class="container split">
    <div class="split__media split__media--wide ph-box">
      <img class="cover-img" src="assets/img/function/wave-1.jpg" alt="Natural frequency waves" width="1024" height="683" loading="lazy">
    </div>
    <div>
      <span class="eyebrow">Step 1 — The science</span>
      <h2 class="display display--sm">Natural frequencies,<br><strong>precisely digitised</strong></h2>
      <p class="lede">Everything in nature oscillates — every cell, every process in the body has its own frequency signature. Over more than 30 years, our technology partners in Austria, Germany and Switzerland have developed highly precise methods to analyse and digitise these natural frequencies.</p>
    </div>
  </div>
</section>

<section class="section section--mist">
  <div class="container split split--reverse">
    <div>
      <span class="eyebrow">Step 2 — Inside the chip</span>
      <h2 class="display display--sm">Stored on a chip,<br><strong>using a patented process</strong></h2>
      <p class="lede">The digitised frequency information is stored inside each e.CHI chip using a patented process — no battery, no electronics, quietly active for up to nine months. Four elements make that possible:</p>
      <ul class="usp-inline">
        <li>${ICONS.check}<span><strong>Skin-friendly silicone shell</strong> — biocompatible and comfortable for days of continuous wear</span></li>
        <li>${ICONS.check}<span><strong>Mineral core</strong> — high-quality minerals that hold the frequency information and release it gradually</span></li>
        <li>${ICONS.check}<span><strong>Magnetic core</strong> — a weak permanent magnet keeps the stored patterns stable and protected</span></li>
        <li>${ICONS.check}<span><strong>Frequency imprinting</strong> — a precision generator writes the patterns onto the chip, where they stay active for months</span></li>
      </ul>
    </div>
    <div class="split__media split__media--wide ph-box" style="background:#fff">
      <img class="cover-img" style="object-fit:contain" src="assets/img/function/chip-anatomy.jpg" alt="e.CHI frequency chip construction" width="1024" height="768" loading="lazy">
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <span class="eyebrow">From nature to your body</span>
    <h2 class="display display--sm">How it works,<br><strong>in four steps</strong></h2>
    <div class="hiw-grid">
      <div class="hiw-card">
        <div class="hiw-card__media"><img src="assets/img/function/step-1.png" alt="Analysing and digitising natural frequencies" loading="lazy"></div>
        <p>Decades of research decode and digitise the natural frequencies found in nature.</p>
      </div>
      <div class="hiw-card">
        <div class="hiw-card__media"><img src="assets/img/function/step-2.png" alt="Transferring frequencies to the chip" loading="lazy"></div>
        <p>The frequency patterns are transferred onto the e.CHI chip in a patented process.</p>
      </div>
      <div class="hiw-card">
        <div class="hiw-card__media"><img src="assets/img/function/step-3.png" alt="Mineral carrier in skin-friendly silicone" loading="lazy"></div>
        <p>High-quality minerals embedded in skin-friendly silicone act as the carrier material.</p>
      </div>
      <div class="hiw-card">
        <div class="hiw-card__media"><img src="assets/img/function/step-4.png" alt="Chip applied to the body like a plaster" loading="lazy"></div>
        <p>Worn like a plaster on the affected area, the chip targets the body's bioelectrical field.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--mist">
  <div class="container split">
    <div class="split__media split__media--wide ph-box">
      <img class="cover-img" src="assets/img/products/painfriend-application.jpg" alt="e.CHI chip applied to the body" width="900" height="900" loading="lazy">
    </div>
    <div>
      <span class="eyebrow">Step 3 — The application</span>
      <h2 class="display display--sm">Applied like a patch,<br><strong>active day and night</strong></h2>
      <p class="lede">You wear the chip on or near the affected area, fixed with a skin-friendly plaster. From there it is designed to interact with the body's bioelectrical field and support its own regulation — while you walk, work, sleep and live.</p>
      <ul class="usp-inline">
        <li>${ICONS.check}<span>Easy to use — stick it on and forget it</span></li>
        <li>${ICONS.check}<span>Active for up to 9 months</span></li>
        <li>${ICONS.check}<span>No chemical agents, no battery, no device</span></li>
        <li>${ICONS.check}<span>Water-resistant — shower, swim and train as usual</span></li>
      </ul>
    </div>
  </div>
</section>

${explainerSection()}

<section class="section section--ink">
  <div class="container" style="max-width:880px;text-align:center">
    <h2 class="display display--md">Scientifically<br><strong>researched</strong></h2>
    <p class="lede" style="margin-inline:auto">e.CHI frequency technology builds on over 30 years of biophysical research and is continuously tested in cell-biological studies. The e.CHI Knee Osteoarthritis chip has additionally been clinically evaluated in Europe as a non-invasive medical device for pain relief in knee osteoarthritis.</p>
    <a class="btn" href="products.html">Discover the chips</a>
  </div>
</section>`;
}

function storiesMain() {
  const card = (title, role, label) => `<article class="story-card">
      <div class="story-card__media ph-box ph--portrait"><div class="ph"><span class="ph__label">${label}</span></div></div>
      <h3 class="story-card__name">${title}</h3>
      <p class="story-card__role">${role}</p>
    </article>`;
  return `
<section class="page-hero page-hero--mist">
  <div class="container">
    <p class="breadcrumbs"><a href="index.html">Home</a> / Stories</p>
    <h1 class="display display--md">The original from<br><strong>top-level sports</strong></h1>
    <p class="lede">The patented e.CHI frequency chips were originally developed for elite sport. For years, Olympic and world champions in Europe have used this technology as part of their recovery and preparation.</p>
  </div>
</section>
<section class="section">
  <div class="container">
    <!-- NOTE: European athlete names, portraits and testimonials require a licence
         from Veya Frequencies for use in India. Once granted, replace these
         placeholder cards with the original athlete stories (Tobias Wendl,
         Tanja Frieden, Franz Klammer et al.). -->
    <h2 class="display display--sm">Stories from India —<br><strong>coming soon</strong></h2>
    <p class="lede">We are collecting experiences from Indian athletes, physiotherapists, clinicians and everyday users. Their stories will appear here soon.</p>
    <div class="story-grid" style="margin-top:36px">
      ${card("Athlete story", "Olympic & world-champion stories — pending India licence from Veya", "Placeholder · athlete image (pending licence)")}
      ${card("Physiotherapist story", "Voices from Indian sports physiotherapy — coming soon", "Placeholder · image")}
      ${card("Customer story", "Everyday experiences from across India — coming soon", "Placeholder · image")}
    </div>
  </div>
</section>
<section class="section section--mist">
  <div class="container" style="max-width:820px;text-align:center">
    <h2 class="display display--sm">Have an e.CHI story<br><strong>to share?</strong></h2>
    <p class="lede" style="margin-inline:auto">Whether you are an athlete, a clinician or simply moving more freely again — we would love to hear from you.</p>
    <a class="btn" href="contact.html">Share your story</a>
  </div>
</section>`;
}

function aboutMain() {
  return `
<section class="page-hero page-hero--mist">
  <div class="container">
    <p class="breadcrumbs"><a href="index.html">Home</a> / About Us</p>
    <h1 class="display display--md">About <strong>e.CHI</strong><br>and your partner in India</h1>
  </div>
</section>

<!-- ============ A) About e.CHI / Veya ============ -->
<section class="section">
  <div class="container split">
    <div>
      <span class="eyebrow">About e.CHI</span>
      <h2 class="display display--sm">Born from 30+ years of<br><strong>frequency research</strong></h2>
      <p class="lede">e.CHI is a brand of Veya Frequencies, based in Austria and Germany. Its foundation is more than three decades of biophysical research by technology partners in Austria, Germany and Switzerland — pioneers of modern frequency research.</p>
      <p class="lede">Their work produced highly precise methods for analysing and digitising natural frequencies and storing them on carrier materials in a patented process. Originally developed for elite sport, this technology has supported Olympic and world champions for years — and is now available for everyday life.</p>
      <p class="lede">Every e.CHI chip is developed and manufactured in Europe and continuously tested in cell-biological studies.</p>
    </div>
    <div class="split__media ph-box ph--science">
      <div class="ph"><span class="ph__label">Placeholder · Veya research image</span></div>
    </div>
  </div>
</section>

<!-- ============ B) Avana ============ -->
<section class="section section--mist">
  <div class="container split split--reverse">
    <div class="split__media ph-box ph--lifestyle">
      <div class="ph"><span class="ph__label">Placeholder · Avana team / Chennai office photo</span></div>
    </div>
    <div>
      <span class="eyebrow">Your e.CHI partner in India</span>
      <h2 class="display display--sm">Transforming Healthcare<br><strong>through Technology</strong></h2>
      <p class="lede">AVANA is building on a strong history of success to enhance the value it provides to healthcare providers and their patients. The company shares a commitment with healthcare providers to partner in providing the best and the most innovative technologies, treatments, and solutions to deliver high quality, cost-effective patient care.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="container" style="max-width:900px">
    <h2 class="display display--sm">What Avana does for<br><strong>e.CHI customers in India</strong></h2>
    <ul class="usp-inline" style="margin-top:26px;font-size:1.05rem">
      <li>${ICONS.check}<span><strong>Genuine imported stock</strong> — every chip comes directly from Veya Frequencies in Europe.</span></li>
      <li>${ICONS.check}<span><strong>Pan-India delivery</strong> — free shipping to every serviceable PIN code, with GST invoice.</span></li>
      <li>${ICONS.check}<span><strong>Customer support</strong> — responsive phone, email and WhatsApp support for every order.</span></li>
      <li>${ICONS.check}<span><strong>Clinic & dealer partnerships</strong> — we work with clinics, physiotherapists and pharmacies across the country.</span></li>
    </ul>
    <p class="lede" style="margin-top:26px">Our mission is simple: to partner with surgeons and hospitals through innovative technology, education and reliable execution. As distributor, Avana makes no product-efficacy claims of its own — everything you read about how e.CHI works comes from Veya Frequencies and its research partners.</p>
    <div style="display:flex;gap:14px;flex-wrap:wrap;margin-top:28px">
      <a class="btn" href="contact.html">Talk to our team</a>
      <a class="btn btn--ghost" href="https://wa.me/${SITE.whatsapp}" target="_blank" rel="noopener">Chat on WhatsApp</a>
    </div>
  </div>
</section>`;
}

module.exports = { functionMain, storiesMain, aboutMain };
