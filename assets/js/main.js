/* e.CHI India — site behaviour */
(function () {
  "use strict";

  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  function formatINR(n) {
    return "₹" + Number(n).toLocaleString("en-IN");
  }

  /* ---------------------------------------------------- announcement rotate */
  var annItems = $$(".announce__item");
  if (annItems.length > 1) {
    var annIdx = 0;
    setInterval(function () {
      annItems[annIdx].classList.remove("is-active");
      annIdx = (annIdx + 1) % annItems.length;
      annItems[annIdx].classList.add("is-active");
    }, 4200);
  }

  /* ------------------------------------------------------------ sticky header */
  var header = $(".header");
  if (header && header.classList.contains("header--overlay")) {
    var onScroll = function () {
      header.classList.toggle("is-solid", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* -------------------------------------------------------------- mobile nav */
  var scrim = $("#drawer-scrim");
  var mobileNav = $("#mobile-nav");
  function closeDrawers() {
    if (scrim) scrim.classList.remove("is-open");
    if (mobileNav) mobileNav.classList.remove("is-open");
    var cd = $("#cart-drawer");
    if (cd) cd.classList.remove("is-open");
    document.body.style.overflow = "";
  }
  var menuBtn = $("#menu-btn");
  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      mobileNav.classList.add("is-open");
      scrim.classList.add("is-open");
      document.body.style.overflow = "hidden";
    });
  }
  if (scrim) scrim.addEventListener("click", closeDrawers);
  $$("[data-close-drawer]").forEach(function (b) { b.addEventListener("click", closeDrawers); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeDrawers(); });

  /* ------------------------------------------------------------- hero videos */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  $$(".hero__video").forEach(function (video) {
    var source = video.querySelector("source");
    if (source) {
      source.addEventListener("error", function () { video.remove(); }); // file missing -> gradient fallback
    }
    if (reduceMotion) { video.removeAttribute("autoplay"); video.pause(); }
  });
  function syncHeroVideos(activeSlide) {
    if (reduceMotion) return;
    $$(".hero__slide").forEach(function (s) {
      var v = s.querySelector(".hero__video");
      if (!v) return;
      if (s === activeSlide) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
      else { v.pause(); }
    });
  }

  /* ------------------------------------------------------------- hero slider */
  var slides = $$(".hero__slide");
  var dots = $$(".hero__dot");
  if (slides.length > 1) {
    var heroIdx = 0;
    var heroTimer;
    function goSlide(i) {
      slides[heroIdx].classList.remove("is-active");
      if (dots[heroIdx]) dots[heroIdx].classList.remove("is-active");
      heroIdx = i % slides.length;
      slides[heroIdx].classList.add("is-active");
      if (dots[heroIdx]) dots[heroIdx].classList.add("is-active");
      syncHeroVideos(slides[heroIdx]);
    }
    function startHero() {
      heroTimer = setInterval(function () { goSlide(heroIdx + 1); }, 6500);
    }
    dots.forEach(function (d, i) {
      d.addEventListener("click", function () {
        clearInterval(heroTimer);
        goSlide(i);
        startHero();
      });
    });
    startHero();
  }

  /* --------------------------------------------------------------- accordion */
  $$(".accordion__btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.parentElement;
      var open = item.classList.contains("is-open");
      var acc = item.parentElement;
      $$(".accordion__item", acc).forEach(function (i) { i.classList.remove("is-open"); });
      if (!open) item.classList.add("is-open");
      btn.setAttribute("aria-expanded", String(!open));
    });
  });

  /* -------------------------------------------------------- explainer video */
  $$(".video-frame__play").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var frame = btn.closest(".video-frame");
      var video = frame.querySelector("video");
      frame.classList.add("is-playing");
      video.controls = true;
      var p = video.play();
      if (p && p.catch) p.catch(function () {});
    });
  });

  /* ----------------------------------------------------------- office tabs */
  $$(".office-tab").forEach(function (tab) {
    tab.addEventListener("click", function () {
      var idx = tab.getAttribute("data-office");
      $$(".office-tab").forEach(function (t) { t.classList.toggle("is-active", t === tab); });
      $$(".office-panel").forEach(function (p) {
        p.classList.toggle("is-active", p.getAttribute("data-office-panel") === idx);
      });
    });
  });

  /* ------------------------------------------------------------- back to top */
  var btt = $("#back-to-top");
  if (btt) {
    window.addEventListener("scroll", function () {
      btt.classList.toggle("is-visible", window.scrollY > 700);
    }, { passive: true });
    btt.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
  }

  /* ------------------------------------------------------------------- toast */
  var toastEl = $("#toast");
  var toastTimer;
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove("is-visible"); }, 2600);
  }

  /* -------------------------------------------------------------------- cart */
  var CART_KEY = "echi_in_cart";
  function getCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch (e) { return []; }
  }
  function saveCart(cart) {
    try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) { /* storage blocked */ }
    renderCart();
  }
  function cartQty(cart) {
    return cart.reduce(function (s, l) { return s + l.qty; }, 0);
  }
  function renderCart() {
    var cart = getCart();
    var count = $("#cart-count");
    if (count) {
      var q = cartQty(cart);
      count.textContent = q;
      count.classList.toggle("is-visible", q > 0);
    }
    var body = $("#cart-body");
    var totalEl = $("#cart-total");
    if (!body) return;
    if (!cart.length) {
      body.innerHTML = '<p class="cart-empty">Your cart is empty.<br><a class="text-link" href="products.html">Browse e.CHI frequency chips</a></p>';
      if (totalEl) totalEl.textContent = formatINR(0);
      return;
    }
    var total = 0;
    body.innerHTML = cart.map(function (l) {
      total += l.price * l.qty;
      return '<div class="cart-line">' +
        '<div class="cart-line__thumb ph-box ph--chip"></div>' +
        '<div style="flex:1">' +
        '<div class="cart-line__name">' + l.name + '</div>' +
        '<div class="cart-line__meta">' + l.qty + ' × ' + formatINR(l.price) + ' <small>incl. GST</small></div>' +
        '<button class="cart-line__remove" data-remove="' + l.id + '">Remove</button>' +
        '</div>' +
        '<strong>' + formatINR(l.price * l.qty) + '</strong>' +
        '</div>';
    }).join("");
    if (totalEl) totalEl.textContent = formatINR(total);
    $$("[data-remove]", body).forEach(function (b) {
      b.addEventListener("click", function () {
        saveCart(getCart().filter(function (l) { return l.id !== b.getAttribute("data-remove"); }));
      });
    });
  }
  function addToCart(id, name, price, qty) {
    var cart = getCart();
    var line = cart.filter(function (l) { return l.id === id; })[0];
    if (line) { line.qty += qty; } else { cart.push({ id: id, name: name, price: price, qty: qty }); }
    saveCart(cart);
    toast(name + " added to cart");
    openCart();
  }
  function openCart() {
    var cd = $("#cart-drawer");
    if (!cd) return;
    cd.classList.add("is-open");
    scrim.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
  var cartBtn = $("#cart-btn");
  if (cartBtn) cartBtn.addEventListener("click", openCart);
  renderCart();

  $$("[data-add-to-cart]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var qtyInput = $("#pdp-qty");
      addToCart(
        btn.getAttribute("data-id"),
        btn.getAttribute("data-name"),
        Number(btn.getAttribute("data-price")),
        qtyInput && btn.hasAttribute("data-use-qty") ? Math.max(1, Number(qtyInput.value) || 1) : 1
      );
    });
  });

  var qtyMinus = $("#qty-minus"), qtyPlus = $("#qty-plus"), qtyInput = $("#pdp-qty");
  if (qtyMinus && qtyInput) {
    qtyMinus.addEventListener("click", function () { qtyInput.value = Math.max(1, Number(qtyInput.value) - 1); });
    qtyPlus.addEventListener("click", function () { qtyInput.value = Number(qtyInput.value) + 1; });
  }

  var checkoutBtn = $("#checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", function () {
      var m = $("#checkout-modal");
      if (m) m.classList.add("is-open");
    });
  }
  $$("[data-close-modal]").forEach(function (b) {
    b.addEventListener("click", function () {
      var m = b.closest(".modal-scrim");
      if (m) m.classList.remove("is-open");
    });
  });
  $$(".modal-scrim").forEach(function (m) {
    m.addEventListener("click", function (e) { if (e.target === m) m.classList.remove("is-open"); });
  });

  /* --------------------------------------------------------------- PIN check */
  var pinBtn = $("#pin-check-btn");
  if (pinBtn) {
    pinBtn.addEventListener("click", function () {
      var input = $("#pin-input");
      var out = $("#pin-result");
      var pin = (input.value || "").trim();
      out.classList.remove("is-ok", "is-bad");
      if (!/^[1-9][0-9]{5}$/.test(pin)) {
        out.textContent = "Please enter a valid 6-digit PIN code.";
        out.classList.add("is-bad");
        return;
      }
      out.textContent = "Great news — we deliver to " + pin + ". Estimated delivery: 3–7 working days.";
      out.classList.add("is-ok");
    });
  }

  /* --------------------------------------------------------------- cookie bar */
  var COOKIE_KEY = "echi_in_cookie_consent";
  var cookieBar = $("#cookie-bar");
  if (cookieBar) {
    var consent = null;
    try { consent = localStorage.getItem(COOKIE_KEY); } catch (e) { /* ignore */ }
    if (!consent) cookieBar.classList.add("is-visible");
    $$("[data-cookie]", cookieBar).forEach(function (b) {
      b.addEventListener("click", function () {
        try { localStorage.setItem(COOKIE_KEY, b.getAttribute("data-cookie")); } catch (e) { /* ignore */ }
        cookieBar.classList.remove("is-visible");
        toast(b.getAttribute("data-cookie") === "all" ? "All cookies accepted" : "Only essential cookies enabled");
      });
    });
  }
  $$("[data-open-cookie]").forEach(function (b) {
    b.addEventListener("click", function (e) {
      e.preventDefault();
      if (cookieBar) cookieBar.classList.add("is-visible");
    });
  });

  /* ------------------------------------------------------------------- forms */
  $$("form[data-demo-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = form.getAttribute("data-success") || "Thank you! We will get back to you shortly.";
      toast(msg);
      form.reset();
    });
  });
})();
