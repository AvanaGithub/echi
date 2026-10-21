/* Contact, FAQ (full), Grievance Redressal */
"use strict";
const { ICONS, SITE } = require("./layout");
const { faqAccordion, FAQ_HOME } = require("./pages-home");

const FAQ_EXTRA = [
  ["Do you deliver across India?", "Yes. We ship free of charge to all serviceable PIN codes across India. Metro cities typically receive orders in 3–5 working days; other locations in 5–7 working days. You can check your PIN code on any product page."],
  ["How do I pay?", "You can pay by UPI, credit and debit cards (Visa, Mastercard, RuPay), netbanking and wallets via Razorpay, or choose Cash on Delivery. All prices include GST, and a GST invoice is issued with every order."],
  ["Can I get a GST invoice for my clinic or business?", "Yes. Enter your GSTIN at checkout (or share it with our team when ordering by WhatsApp) and we will issue a B2B GST invoice."],
  ["Is the product genuine?", "Yes. Avana Medical Devices is the authorised Indian distributor of e.CHI by Veya Frequencies. Every chip comes directly from Veya Frequencies in Europe."],
  ["What is your return policy?", "Unopened chips in original packaging can be returned within 7 days of delivery. For hygiene reasons, opened or worn chips cannot be returned unless defective. See our Returns & Refunds policy for details."],
  ["Is e.CHI a medicine or a medical device in India?", "e.CHI chips are energetic wellness products, not medicines. The Knee Osteoarthritis chip is classified as a non-invasive medical device in the EU. e.CHI is not a substitute for professional medical advice — please consult a doctor for physical complaints."],
];

function contactMain() {
  return `
<section class="page-hero page-hero--mist">
  <div class="container">
    <p class="breadcrumbs"><a href="index.html">Home</a> / Contact</p>
    <h1 class="display display--md">We're here<br><strong>to help</strong></h1>
    <p class="lede">Questions about e.CHI or your order? The Avana team in Chennai is happy to help.</p>
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
        <p class="form-note full">Your details are used only to answer your enquiry.</p>
      </form>
    </div>
    <div>
      <ul class="contact-list" style="margin-bottom:26px">
        <li>${ICONS.pin}<span><strong>Avana Medical Devices Pvt Ltd</strong><br>No.91, Sundar Nagar 4th Avenue,<br>Nandambakkam, Chennai,<br>Tamil Nadu &ndash; 600 032, India</span></li>
        <li>${ICONS.phone}<span><a href="tel:04422331061">044-2233 1061</a> / <a href="tel:04422331062">1062</a> / <a href="tel:04422331063">1063</a></span></li>
        <li>${ICONS.mail}<span><a class="text-link" href="mailto:${SITE.email}">${SITE.email}</a></span></li>
        <li>${ICONS.whatsapp.replace('width="28" height="28"', 'width="18" height="18"')}<span><a class="text-link" href="https://wa.me/${SITE.whatsapp}" target="_blank" rel="noopener">Chat on WhatsApp</a></span></li>
        <li>${ICONS.clock}<span>Monday – Saturday, 9:30 AM – 6:30 PM IST</span></li>
      </ul>
      <div class="map-frame" style="margin-top:0">
        <a class="map-frame__fallback" href="https://www.google.com/maps/search/?api=1&query=AVANA%20Medical%20Devices%20Pvt%20Ltd%2C%20Sundar%20Nagar%204th%20Avenue%2C%20Nandambakkam%2C%20Chennai%20600032" target="_blank" rel="noopener">
          <span class="map-frame__pin">${ICONS.pin}</span>
          <strong>Avana Medical Devices Pvt Ltd</strong>
        </a>
        <iframe src="https://www.google.com/maps?q=AVANA%20Medical%20Devices%20Pvt%20Ltd%2C%20Sundar%20Nagar%204th%20Avenue%2C%20Nandambakkam%2C%20Chennai%20600032&z=16&output=embed" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Map: Avana Medical Devices Pvt Ltd, Chennai"></iframe>
        <a class="map-frame__open" href="https://www.google.com/maps/search/?api=1&query=AVANA%20Medical%20Devices%20Pvt%20Ltd%2C%20Sundar%20Nagar%204th%20Avenue%2C%20Nandambakkam%2C%20Chennai%20600032" target="_blank" rel="noopener" aria-label="Open in Google Maps" title="Open in Google Maps">${ICONS.pin}</a>
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
    <p class="lede">Everything about wearing and caring for e.CHI frequency chips. Can't find your answer? <a class="text-link" href="contact.html">Contact us</a> or message us on WhatsApp.</p>
  </div>
</section>
<section class="section">
  <div class="container" style="max-width:900px">
    <h2 class="display display--sm" style="margin-bottom:22px">Using <strong>e.CHI</strong></h2>
    ${faqAccordion(FAQ_HOME)}
  </div>
</section>`;
}

const INDIAN_STATES = ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu & Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Puducherry","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Other UT"];


function grievanceMain() {
  return `
<section class="page-hero page-hero--mist">
  <div class="container">
    <p class="breadcrumbs"><a href="index.html">Home</a> / Grievance Redressal</p>
    <h1 class="display display--md">Grievance<br><strong>redressal</strong></h1>
    <p class="lede">In line with the Consumer Protection (E-Commerce) Rules 2020 and the DPDP Act 2023, Avana Medical Devices has appointed a Grievance Officer for this website.</p>
  </div>
</section>
<section class="section">
  <div class="container prose">
    <div class="info-card" style="margin-bottom:36px">
      <h2 style="margin-top:0">Grievance Officer</h2>
      <ul class="contact-list">
        <li>${ICONS.account.replace('width="20" height="20"', 'width="18" height="18"')}<span><strong>[Grievance Officer name PLACEHOLDER]</strong><br>Avana Medical Devices Pvt Ltd, Chennai</span></li>
        <li>${ICONS.mail}<span>grievance@avanamedical.com <span class="badge-pending">Placeholder</span></span></li>
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

module.exports = { contactMain, faqMain, grievanceMain, FAQ_EXTRA };
