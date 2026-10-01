/* Product catalogue — e.CHI frequency chips (India range)
   NOTE: All INR prices are PLACEHOLDERS pending final MRP from Avana/Veya. */
"use strict";

const products = [
  {
    slug: "knee-osteoarthritis",
    name: "Knee Osteoarthritis",
    eyebrow: "e.CHI Frequency Chips",
    flag: "Medical device*",
    price: 12999, // PLACEHOLDER (EU price €127) — confirm INR MRP
    medical: true,
    short:
      "The e.CHI Knee Osteoarthritis chip is a non-invasive device developed for pain relief in knee osteoarthritis and has been clinically evaluated in Europe.",
    long: [
      "Knee osteoarthritis can slowly take away the things you love — morning walks, stairs, playing with your grandchildren. The e.CHI Knee Osteoarthritis chip was developed to support you gently, without tablets and without machines.",
      "Worn on the knee like a patch, the chip works with precisely tuned frequency information that supports the body's own regulation at the affected joint. It contains no chemical agents, needs no battery, and stays active for up to nine months.",
      "In Europe, this chip is classified as a non-invasive medical device for pain relief in knee osteoarthritis and has been clinically evaluated. Its status as a medical device in India is currently under review.",
    ],
    regulatoryNote: true,
    benefits: ["Developed for knee osteoarthritis", "Clinically evaluated (EU)", "Active for up to 9 months", "No chemical agents"],
  },
  {
    slug: "painfriend",
    name: "PainFriend",
    eyebrow: "e.CHI Frequency Chips",
    price: 9999, // PLACEHOLDER (EU price €99) — confirm INR MRP
    short: "Your everyday companion for general, localised discomfort — applied like a patch, active for up to nine months.",
    long: [
      "PainFriend is the all-rounder of the e.CHI family. Whether it is a tense shoulder after long hours at a desk or tired muscles after sport, PainFriend is designed to support the body's own balancing processes exactly where you place it.",
      "Simply stick the chip on or near the affected area. It is made of skin-friendly silicone, contains no chemical agents and works without batteries or devices — day and night, for up to nine months.",
    ],
    benefits: ["For localised, everyday discomfort", "Wear day and night", "Active for up to 9 months", "Skin-friendly silicone"],
  },
  {
    slug: "inflammationfriend",
    name: "InflammationFriend",
    eyebrow: "e.CHI Frequency Chips",
    price: 9999, // PLACEHOLDER — confirm INR MRP
    short: "Designed to support the body's own regulation where irritation and swelling slow you down.",
    long: [
      "Whether after intense training or in everyday strain, InflammationFriend is designed to support the body's own regulating processes in irritated areas.",
      "Like every e.CHI chip, it is applied directly to the skin near the affected area, works without batteries or chemical agents, and remains active for up to nine months.",
    ],
    benefits: ["Supports the body's own regulation", "Ideal after sport and strain", "Active for up to 9 months", "No chemical agents"],
  },
  {
    slug: "backfriend",
    name: "BackFriend",
    eyebrow: "e.CHI Frequency Chips",
    price: 9999, // PLACEHOLDER — confirm INR MRP
    short: "Support for a hard-working back — from desk chairs to long drives to lifting days.",
    long: [
      "Our backs carry us through everything — long commutes, desk marathons, heavy bags. BackFriend is designed to support the body's own regulation along the back, wherever you need it.",
      "Apply the chip to the lower or upper back like a patch. No devices, no cables, no chemical agents — just quiet support for up to nine months.",
    ],
    benefits: ["For desk workers and drivers", "Apply wherever needed", "Active for up to 9 months", "No chemical agents"],
  },
];

/* Products shown on the homepage grid */
const homeGrid = ["knee-osteoarthritis", "painfriend", "backfriend", "inflammationfriend"];

function formatINR(n) {
  return "₹" + Number(n).toLocaleString("en-IN");
}

module.exports = { products, homeGrid, formatINR };
