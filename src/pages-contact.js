/* Contact, FAQ (full), Become a Partner, Grievance Redressal */
"use strict";
const { ICONS, SITE } = require("./layout");
const { faqAccordion, FAQ_HOME } = require("./pages-home");

const FAQ_EXTRA = [
  ["Do you deliver across India?", "Yes. We ship free of charge to all serviceable PIN codes across India. Metro cities typically receive orders in 3–5 working days; other locations in 5–7 working days. You can check your PIN code on any product page."],
  ["How do I pay?", "You can pay by UPI, credit and debit cards (Visa, Mastercard, RuPay), netbanking and wallets via Razorpay, or choose Cash on Delivery. All prices include GST, and a GST invoice is issued with every order."],
  ["Can I get a GST invoice for my clinic or business?", "Yes. Enter your GSTIN at checkout (or share it with our team when ordering by WhatsApp) and we will issue a B2B GST invoice."],
  ["Is the product genuine imported stock?", "Yes. Avana Surgical Systems is the authorised Indian distributor of e.CHI by Veya Frequencies. Every chip is imported directly from Veya in Europe."],
  ["What is your return policy?", "Unopened chips in original packaging can be returned within 7 days of delivery. For hygiene reasons, opened or worn chips cannot be returned unless defective. See our Returns & Refunds policy for details."],
  ["Is e.CHI a medicine or a medical device in India?", "e.CHI chips are energetic wellness products, not medicines. The Knee Osteoarthritis chip is classified as a non-invasive medical device in the EU. e.CHI is not a substitute for professional medical advice — please consult a doctor for physical complaints."],
];

function contactMain() {
  return `
<section class="page-hero page-hero--mist">
  <div class="container">
    <p class="breadcrumbs"><a href="index.html">Home</a> / Contact</p>
    <h1 class="display display--md">We're here<br><strong>to help</strong></h1>
    <p class="lede">Questions about e.CHI, your order, or partnering with us? The Avana team in Chennai is happy to help.</p>
  </div>
</section>
<section class="section">
  <div class="container split" style="align-items:start">
    <div class="info-card">
      <h2 class="display display--sm" style="margin-bottom:20px">Send us<br><strong>an enquiry</strong></h2>
      <form class="form-grid" data-demo-form data-success="Thank you! Our team will reach out within one working day.">
        <div class="field"><label for="c-name">Name *</label><input id="c-name" name="name" required></div>
        <div class="field"><label for="c-phone">Phone *</label><input id="c-phone" name="phone" type="tel" placeholder="+91" pattern="^(\\+91[\\-\\s]?)?[6-9][0-9]{9}$" required></div>
        <div class="field"><label for="c-email">Email *</label><input id="c-email" name="email" type="email" required></div>
        <div class="field"><label for="c-city">City</label><input id="c-city" name="city"></div>
        <div class="field full"><label for="c-product">Product interest</label>
          <select id="c-product" name="product">
            <option value="">Select a product (optional)</option>
            <option>Knee Osteoarthritis</option><option>PainFriend</option>
            <option>BackFriend</option><option>InflammationFriend</option>
            <option>General enquiry</option>
          </select>
        </div>
        <div class="field full"><label for="c-msg">Message</label><textarea id="c-msg" name="message" placeholder="How can we help?"></textarea></div>
        <div class="full"><button class="btn" type="submit">Send enquiry</button></div>
        <p class="form-note full">Your details are used only to answer your enquiry, per our <a class="text-link" href="privacy-policy.html">Privacy Policy</a>.</p>
      </form>
    </div>
    <div>
      <ul class="contact-list" style="margin-bottom:26px">
        <li>${ICONS.pin}<span><strong>Avana Surgical Systems Pvt Ltd</strong><br>No.91, Sundar Nagar 4th Avenue,<br>Nandambakkam, Chennai,<br>Tamil Nadu &ndash; 600 032, India</span></li>
        <li>${ICONS.phone}<span><a href="tel:04422331061">044-2233 1061</a> / <a href="tel:04422331062">1062</a> / <a href="tel:04422331063">1063</a></span></li>
        <li>${ICONS.mail}<span><a class="text-link" href="mailto:${SITE.email}">${SITE.email}</a></span></li>
        <li>${ICONS.whatsapp.replace('width="28" height="28"', 'width="18" height="18"')}<span><a class="text-link" href="https://wa.me/${SITE.whatsapp}" target="_blank" rel="noopener">Chat on WhatsApp</a></span></li>
        <li>${ICONS.clock}<span>Monday – Saturday, 9:30 AM – 6:30 PM IST</span></li>
      </ul>
      <div class="split__media split__media--wide ph-box ph--map">
        <!-- PLACEHOLDER: replace with Google Maps embed iframe for the Avana Chennai office, e.g.
             <iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="100%" style="border:0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Avana Surgical Systems, Chennai"></iframe> -->
        <div class="ph"><span class="ph__label">Placeholder · Google Map embed (Avana Chennai office)</span></div>
      </div>
    </div>
  </div>
</section>`;
}

function faqMain() {
  return `
<section class="page-hero page-hero--mist">
  <div class="container">
    <p class="breadcrumbs"><a href="index.html">Home</a> / FAQ</p>
    <h1 class="display display--md">Frequently asked<br><strong>questions</strong></h1>
    <p class="lede">Everything about wearing, caring for and ordering e.CHI frequency chips in India. Can't find your answer? <a class="text-link" href="contact.html">Contact us</a> or message us on WhatsApp.</p>
  </div>
</section>
<section class="section">
  <div class="container" style="max-width:900px">
    <h2 class="display display--sm" style="margin-bottom:22px">Using <strong>e.CHI</strong></h2>
    ${faqAccordion(FAQ_HOME)}
    <h2 class="display display--sm" style="margin:56px 0 22px">Ordering <strong>in India</strong></h2>
    ${faqAccordion(FAQ_EXTRA)}
  </div>
</section>`;
}

const INDIAN_STATES = ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu & Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Puducherry","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Other UT"];

function partnerMain() {
  return `
<section class="page-hero page-hero--mist">
  <div class="container">
    <p class="breadcrumbs"><a href="index.html">Home</a> / Become a Partner</p>
    <h1 class="display display--md">Become an e.CHI<br><strong>partner in India</strong></h1>
    <p class="lede">Clinics, physiotherapists, pharmacies and dealers — bring portable frequency therapy to your patients and customers, with genuine imported stock and full support from Avana Surgical Systems.</p>
  </div>
</section>
<section class="section">
  <div class="container split" style="align-items:start">
    <div>
      <h2 class="display display--sm">Why partner<br><strong>with us</strong></h2>
      <ul class="usp-inline" style="font-size:1.02rem;margin-top:22px">
        <li>${ICONS.check}<span><strong>Attractive partner pricing</strong> with transparent B2B GST invoicing.</span></li>
        <li>${ICONS.check}<span><strong>Genuine imported stock</strong>, held in India for fast replenishment.</span></li>
        <li>${ICONS.check}<span><strong>Training & education</strong> for your team on the science and correct application.</span></li>
        <li>${ICONS.check}<span><strong>Marketing support</strong> — display material, product literature and digital assets.</span></li>
        <li>${ICONS.check}<span><strong>A trusted partner</strong> — Avana has trained 500+ surgeons and served 40,000+ patients across India since 2014.</span></li>
      </ul>
      <p class="lede" style="margin-top:22px">We are onboarding partners in every state. Fill in the form and our partnerships team will call you back within two working days.</p>
    </div>
    <div class="info-card">
      <h2 class="display display--sm" style="margin-bottom:20px">Partner<br><strong>enquiry</strong></h2>
      <form class="form-grid" data-demo-form data-success="Thank you! Our partnerships team will call you within 2 working days.">
        <div class="field"><label for="p-name">Your name *</label><input id="p-name" name="name" required></div>
        <div class="field"><label for="p-biz">Clinic / business name *</label><input id="p-biz" name="business" required></div>
        <div class="field"><label for="p-type">You are a *</label>
          <select id="p-type" name="type" required>
            <option value="">Select…</option><option>Clinic / Hospital</option><option>Physiotherapist</option>
            <option>Pharmacy</option><option>Dealer / Distributor</option><option>Other</option>
          </select>
        </div>
        <div class="field"><label for="p-phone">Phone *</label><input id="p-phone" name="phone" type="tel" placeholder="+91" pattern="^(\\+91[\\-\\s]?)?[6-9][0-9]{9}$" required></div>
        <div class="field"><label for="p-city">City *</label><input id="p-city" name="city" required></div>
        <div class="field"><label for="p-state">State *</label>
          <select id="p-state" name="state" required><option value="">Select…</option>${INDIAN_STATES.map((s) => `<option>${s}</option>`).join("")}</select>
        </div>
        <div class="field full"><label for="p-gstin">GSTIN (if registered)</label><input id="p-gstin" name="gstin" placeholder="15-character GSTIN" pattern="[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}"></div>
        <div class="field full"><label for="p-msg">Message</label><textarea id="p-msg" name="message" placeholder="Tell us about your practice or business"></textarea></div>
        <div class="full"><button class="btn" type="submit">Submit enquiry</button></div>
      </form>
    </div>
  </div>
</section>`;
}

function grievanceMain() {
  return `
<section class="page-hero page-hero--mist">
  <div class="container">
    <p class="breadcrumbs"><a href="index.html">Home</a> / Grievance Redressal</p>
    <h1 class="display display--md">Grievance<br><strong>redressal</strong></h1>
    <p class="lede">In line with the Consumer Protection (E-Commerce) Rules 2020 and the DPDP Act 2023, Avana Surgical Systems has appointed a Grievance Officer for this website.</p>
  </div>
</section>
<section class="section">
  <div class="container prose">
    <div class="info-card" style="margin-bottom:36px">
      <h2 style="margin-top:0">Grievance Officer</h2>
      <ul class="contact-list">
        <li>${ICONS.account.replace('width="20" height="20"', 'width="18" height="18"')}<span><strong>[Grievance Officer name PLACEHOLDER]</strong><br>Avana Surgical Systems Pvt Ltd, Chennai</span></li>
        <li>${ICONS.mail}<span>grievance@avanasurgical.com <span class="badge-pending">Placeholder</span></span></li>
        <li>${ICONS.phone}<span>${SITE.phone} <span class="badge-pending">Placeholder</span></span></li>
        <li>${ICONS.clock}<span>Monday – Saturday, 9:30 AM – 6:30 PM IST</span></li>
      </ul>
    </div>
    <h2>How to raise a grievance</h2>
    <ol>
      <li>Email the Grievance Officer with your order number (if applicable), a description of the issue, and any supporting photos or documents.</li>
      <li>You will receive an <strong>acknowledgement within 48 hours</strong> of receipt.</li>
      <li>We aim to <strong>resolve every grievance within 30 days</strong>, keeping you informed of progress throughout, per the timelines in the Consumer Protection (E-Commerce) Rules, 2020.</li>
    </ol>
    <h2>Scope</h2>
    <p>The Grievance Officer handles complaints regarding orders, delivery, refunds, product quality, website content, advertising claims, and the handling of your personal data under the Digital Personal Data Protection Act, 2023. Data-protection grievances not resolved to your satisfaction may be escalated to the Data Protection Board of India.</p>
  </div>
</section>`;
}

module.exports = { contactMain, faqMain, partnerMain, grievanceMain, FAQ_EXTRA };
