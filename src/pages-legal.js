/* Legal & policy pages */
"use strict";
const { SITE } = require("./layout");

const wrap = (crumb, titleHtml, body) => `
<section class="page-hero page-hero--mist">
  <div class="container">
    <p class="breadcrumbs"><a href="index.html">Home</a> / ${crumb}</p>
    <h1 class="display display--md">${titleHtml}</h1>
  </div>
</section>
<section class="section">
  <div class="container prose">
    ${body}
  </div>
</section>`;

function shippingMain() {
  return wrap("Shipping Policy", "Shipping<br><strong>policy</strong>", `
    <p><em>Last updated: 22/09/2026</em></p>
    <h2>Coverage & charges</h2>
    <p>We deliver e.CHI products across India through reputed courier partners. <strong>Shipping is free on all orders.</strong> You can check serviceability for your PIN code on any product page.</p>
    <h2>Delivery timelines</h2>
    <table>
      <tr><th>Destination</th><th>Estimated delivery</th></tr>
      <tr><td>Chennai & Tamil Nadu</td><td>2–4 working days</td></tr>
      <tr><td>Metro cities (Mumbai, Delhi NCR, Bengaluru, Hyderabad, Kolkata, Pune, Ahmedabad)</td><td>3–5 working days</td></tr>
      <tr><td>Rest of India</td><td>5–7 working days</td></tr>
      <tr><td>Remote / North-East / island territories</td><td>7–10 working days</td></tr>
    </table>
    <p>Timelines are estimates from the date of dispatch, excluding Sundays and public holidays. Orders are dispatched within 1–2 working days of confirmation. Cash-on-Delivery orders may require telephonic confirmation before dispatch.</p>
    <h2>Tracking</h2>
    <p>You will receive the tracking number by SMS, email and WhatsApp as soon as your order ships.</p>
    <h2>Damaged or missing parcels</h2>
    <p>If your parcel arrives damaged, please refuse delivery or note the damage with the courier, and contact us within 48 hours at ${SITE.email} or ${SITE.phone} with photos. We will arrange a replacement.</p>`);
}

function returnsMain() {
  return wrap("Returns & Refunds", "Returns &<br><strong>refunds</strong>", `
    <p><em>Last updated: 22/09/2026</em></p>
    <h2>7-day return window</h2>
    <p><strong>Unopened</strong> e.CHI chips in their original, sealed packaging can be returned within <strong>7 days of delivery</strong> for a full refund of the product price.</p>
    <h2>What cannot be returned</h2>
    <p>For hygiene reasons, chips that have been opened, applied to the skin or worn cannot be returned or exchanged — unless the product is defective or was damaged in transit.</p>
    <h2>Defective or wrong items</h2>
    <p>If you receive a defective, damaged or incorrect item, contact us within 48 hours of delivery with photos. We will arrange free reverse pickup and send a replacement, or issue a full refund including any shipping paid.</p>
    <h2>How to initiate a return</h2>
    <ol>
      <li>Email ${SITE.email} or WhatsApp us with your order number and reason for return.</li>
      <li>We arrange reverse pickup from your address (or share a return address where pickup is unavailable).</li>
      <li>Once the item passes our quality check, the refund is processed.</li>
    </ol>
    <h2>Refund timelines</h2>
    <p>Refunds are issued to the original payment method within <strong>7–10 working days</strong> of the returned item passing quality check. Cash-on-Delivery refunds are made by bank transfer (UPI/NEFT) to details you provide.</p>
    <h2>Cancellations</h2>
    <p>Orders can be cancelled free of charge any time before dispatch. Once shipped, please use the return process above.</p>`);
}

function termsMain() {
  return wrap("Terms", "Terms of<br><strong>service</strong>", `
    <p><em>Last updated: 22/09/2026</em></p>
    <h2>1. Who we are</h2>
    <p>This website is operated by <strong>Avana Surgical Systems Pvt Ltd</strong>, Chennai, Tamil Nadu, India (“Avana”, “we”), the authorised Indian importer and distributor of e.CHI products manufactured by Veya Frequencies, Austria/Germany. GSTIN: ${SITE.gstin}. CIN: [CIN PLACEHOLDER].</p>
    <h2>2. Products & claims</h2>
    <p>e.CHI frequency chips are energetic wellness products. Unless a specific product is expressly registered as a medical device in India, e.CHI products are not medical products and are not intended to diagnose, treat, cure or prevent any disease. Product descriptions reflect information provided by the manufacturer, Veya Frequencies; Avana, as distributor, makes no product-efficacy claims of its own. If you have physical complaints, consult a doctor. Do not use e.CHI chips if you have epilepsy, severe heart failure, an organ transplant or a severe mental illness.</p>
    <h2>3. Orders & prices</h2>
    <p>All prices are in Indian Rupees (₹) and include GST. A GST invoice accompanies every order; B2B buyers may provide their GSTIN at checkout. We reserve the right to refuse or cancel orders in cases of pricing errors, suspected fraud or non-serviceable locations; any amount paid will be fully refunded.</p>
    <h2>4. Payments</h2>
    <p>Payments are processed by Razorpay (UPI, cards, netbanking, wallets). Cash on Delivery is available at serviceable PIN codes. We never store your card or banking credentials.</p>
    <h2>5. Shipping, returns & grievances</h2>
    <p>Shipping is governed by our <a class="text-link" href="shipping-policy.html">Shipping Policy</a>, returns by our <a class="text-link" href="returns-refunds.html">Returns & Refunds Policy</a>, and complaints by our <a class="text-link" href="grievance-redressal.html">Grievance Redressal</a> process.</p>
    <h2>6. Intellectual property</h2>
    <p>e.CHI, Veya Frequencies and related marks, images and content are the property of Veya Frequencies and are used here under authorisation. The Avana name and logo are the property of Avana Surgical Systems Pvt Ltd. No content on this site may be reproduced without permission.</p>
    <h2>7. Limitation of liability</h2>
    <p>To the maximum extent permitted by law, Avana's aggregate liability arising from any order is limited to the amount paid for that order. Nothing in these terms limits rights available to consumers under the Consumer Protection Act, 2019.</p>
    <h2>8. Governing law</h2>
    <p>These terms are governed by the laws of India. Courts at Chennai, Tamil Nadu shall have exclusive jurisdiction, subject to consumer-forum rights under applicable law.</p>`);
}

function privacyMain() {
  return wrap("Privacy Policy", "Privacy<br><strong>policy</strong>", `
    <p><em>Last updated: 22/09/2026 · Aligned to the Digital Personal Data Protection Act, 2023 (DPDP Act)</em></p>
    <h2>1. Data fiduciary</h2>
    <p><strong>Avana Surgical Systems Pvt Ltd</strong>, Chennai, Tamil Nadu, India is the data fiduciary for personal data collected on this website. Contact: ${SITE.email} · ${SITE.phone}.</p>
    <h2>2. What we collect & why</h2>
    <table>
      <tr><th>Data</th><th>Purpose</th><th>Basis</th></tr>
      <tr><td>Name, phone, email, address, PIN code</td><td>Processing and delivering your order; customer support</td><td>Consent / performance of contract</td></tr>
      <tr><td>GSTIN (B2B buyers)</td><td>Issuing GST invoices</td><td>Legal obligation</td></tr>
      <tr><td>Email & WhatsApp number (newsletter)</td><td>Marketing communications you opted into</td><td>Consent (withdraw anytime)</td></tr>
      <tr><td>Payment confirmation data</td><td>Order reconciliation (payments are processed by Razorpay; we never see your card/banking credentials)</td><td>Performance of contract</td></tr>
      <tr><td>Cookies & analytics identifiers</td><td>Site operation, analytics and marketing (GA4, Google Tag Manager, Meta Pixel, Microsoft Clarity)</td><td>Consent via cookie banner</td></tr>
    </table>
    <h2>3. Consent & withdrawal</h2>
    <p>We collect personal data only with your consent or as permitted by law. You may withdraw consent at any time — use the unsubscribe link in emails, reply STOP on WhatsApp, adjust “Cookie settings” in the footer, or write to us. Withdrawal does not affect processing already carried out.</p>
    <h2>4. Sharing</h2>
    <p>We share data only with service providers needed to fulfil your order — courier partners (delivery), Razorpay (payments), and IT/analytics providers — under appropriate safeguards. We do not sell personal data. Data may be shared with authorities where required by law.</p>
    <h2>5. Retention & security</h2>
    <p>Order and invoice data is retained as required by tax law (currently 8 years); marketing data until you withdraw consent; enquiry data up to 24 months. We use encryption in transit, access controls and reputable Indian/global hosting providers.</p>
    <h2>6. Your rights</h2>
    <p>Under the DPDP Act 2023 you have the right to access a summary of your personal data, correct or erase it, nominate a representative, and grieve. Write to ${SITE.email} or our <a class="text-link" href="grievance-redressal.html">Grievance Officer</a>. If unresolved, you may complain to the Data Protection Board of India.</p>
    <h2>7. Children</h2>
    <p>This site is not directed at children under 18. We do not knowingly process children's data without verifiable parental consent.</p>
    <h2>8. Cookies</h2>
    <p>Essential cookies keep the site working (cart, consent memory). Analytics and marketing cookies load only after you choose “Accept all” in the cookie banner. You can change your choice anytime via “Cookie settings” in the footer.</p>
    <h2>9. Changes</h2>
    <p>We will post any changes to this policy on this page with a revised date, and seek fresh consent where required.</p>`);
}

module.exports = { shippingMain, returnsMain, termsMain, privacyMain, wrap };
