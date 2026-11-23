(function () {
  "use strict";

  const data = window.SOPARIA_DATA;
  if (!data) return;

  const menuContainer = document.getElementById("menuContainer");
  const categoryNav = document.getElementById("categoryNav");
  const categoryBarWrap = document.getElementById("categoryBarWrap");
  const searchInput = document.getElementById("menuSearch");
  const clearSearchBtn = document.getElementById("clearSearch");
  const resetSearchBtn = document.getElementById("resetSearchBtn");
  const searchSummary = document.getElementById("searchSummary");
  const emptyState = document.getElementById("emptyState");
  const siteHeader = document.getElementById("siteHeader");
  const menuToggle = document.getElementById("menuToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const backToTopBtn = document.getElementById("backToTop");
  const currentYearEl = document.getElementById("currentYear");
  const visitorCountText = document.getElementById("visitorCountText");
  const fontDecreaseBtn = document.getElementById("fontDecrease");
  const fontResetBtn = document.getElementById("fontReset");
  const fontIncreaseBtn = document.getElementById("fontIncrease");
  const contrastToggleBtn = document.getElementById("contrastToggle");
  const langPtBtn = document.getElementById("langPt");
  const langEnBtn = document.getElementById("langEn");
  const a11yLive = document.getElementById("a11yLive");

  const UI_STRINGS = {
    pt: {
      htmlLang: "pt-BR",
      pageTitle: "Consulta Cardápio | Restaurante e Soparia da Sabbá",
      skipLink: "Pular para o cardápio",
      brandSub: "Restaurante e",
      navMenu: "Cardápio",
      navContact: "Contato & Localização",
      navDelivery: "Pedidos Delivery",
      navDeliveryCompact: "Delivery",
      navDeliveryMobile: "Pedidos Delivery (Linktree)",
      paymentNoticeHtml:
        'Aceitamos pagamento em <strong>dinheiro, PIX, cartão débito e crédito VISA, MASTERCARD e ELO</strong> <strong class="notice-warning">(não aceitamos vale-refeição!)</strong>',
      ordersNotice: "Aceitamos encomendas!",
      a11yLabel: "Acessibilidade",
      contrastBtn: "Alto Contraste",
      menuTitle: "Cardápio",
      serviceFee: "Taxa de Serviço 10%",
      consultationNote: "Cardápio para consulta",
      searchPlaceholder: "Buscar prato, sopa, massa, bebida...",
      searchAriaLabel: "Buscar no cardápio",
      emptyTitle: "Nenhum item encontrado",
      emptyText:
        "Tente buscar por outro nome ou ingrediente (ex: sopa, camarão, lasanha, suco).",
      emptyReset: "Ver todo o cardápio",
      contactKicker: "Restaurante e Soparia da Sabbá",
      contactHeading: "Contato & Localização",
      addressTitle: "Endereço",
      openMaps: "Abrir no Google Maps",
      hoursTitle: "Horários",
      dineInLabel: "Aberto ao Público",
      dineInValue: "Todos os dias • De 16:30 às 22:30",
      deliveryLabel: "Entrega (Delivery)",
      deliveryValue: "Todos os dias • De 11:00 às 22:30",
      contactCardTitle: "Contato & Delivery",
      footerCopyHtml: '&copy; <span id="currentYear">2026</span> por Restaurante e Soparia da Sabbá',
      footerSub:
        "Av. Gov. José Lindoso, 1394 - Novo Aleixo, Manaus/AM • Cardápio digital para consulta",
      backToTopLink: "Voltar ao topo ↑",
      backToTopAria: "Voltar ao topo",
      visitSingular: "visita",
      visitPlural: "visitas",
      visitsFallback: "Visitas: —",
      searchOne: "item encontrado",
      searchMany: "itens encontrados",
      searchFor: "para",
      fontAnnounce: (pct) => `Tamanho do texto ajustado para ${pct} por cento.`,
      contrastOn: "Modo alto contraste ativado.",
      contrastOff: "Modo alto contraste desativado.",
      langAnnounce: "Idioma alterado para português."
    },
    en: {
      htmlLang: "en",
      pageTitle: "Menu | Restaurante e Soparia da Sabbá",
      skipLink: "Skip to menu",
      brandSub: "Restaurant &",
      navMenu: "Menu",
      navContact: "Contact & Location",
      navDelivery: "Delivery Orders",
      navDeliveryCompact: "Delivery",
      navDeliveryMobile: "Delivery Orders (Linktree)",
      paymentNoticeHtml:
        '<strong>Cash, PIX, and Visa, Mastercard &amp; Elo debit/credit cards</strong> accepted <strong class="notice-warning">(meal vouchers not accepted!)</strong>',
      ordersNotice: "Catering & pre-orders welcome!",
      a11yLabel: "Accessibility",
      contrastBtn: "High Contrast",
      menuTitle: "Menu",
      serviceFee: "10% Service Charge",
      consultationNote: "Menu for browsing only",
      searchPlaceholder: "Search dish, soup, pasta, drink...",
      searchAriaLabel: "Search the menu",
      emptyTitle: "No items found",
      emptyText:
        "Try searching for another dish or ingredient (e.g., soup, shrimp, lasagna, juice).",
      emptyReset: "Show full menu",
      contactKicker: "Restaurante e Soparia da Sabbá",
      contactHeading: "Contact & Location",
      addressTitle: "Address",
      openMaps: "Open in Google Maps",
      hoursTitle: "Opening Hours",
      dineInLabel: "Dine-In",
      dineInValue: "Daily • 4:30 PM – 10:30 PM",
      deliveryLabel: "Delivery",
      deliveryValue: "Daily • 11:00 AM – 10:30 PM",
      contactCardTitle: "Contact & Delivery",
      footerCopyHtml: '&copy; <span id="currentYear">2026</span> Restaurante e Soparia da Sabbá',
      footerSub:
        "Av. Gov. José Lindoso, 1394 - Novo Aleixo, Manaus/AM • Digital menu for browsing",
      backToTopLink: "Back to top ↑",
      backToTopAria: "Back to top",
      visitSingular: "visit",
      visitPlural: "visits",
      visitsFallback: "Visits: —",
      searchOne: "item found",
      searchMany: "items found",
      searchFor: "for",
      fontAnnounce: (pct) => `Text size set to ${pct} percent.`,
      contrastOn: "High contrast mode enabled.",
      contrastOff: "High contrast mode disabled.",
      langAnnounce: "Language changed to English."
    }
  };

  let currentLang = "pt";
  try {
    const savedLang = localStorage.getItem("soparia_lang");
    if (savedLang === "en" || savedLang === "pt") {
      currentLang = savedLang;
    }
  } catch (_) {}

  let activeCategoryId = data.categories[0] ? data.categories[0].id : "";
  let scrollRafPending = false;
  let pillAnimFrame = null;
  let manualScrollLockUntil = 0;
  let lastVisitorTotal = null;

  function t(key) {
    return UI_STRINGS[currentLang][key];
  }

  function pick(ptVal, enVal) {
    if (currentLang === "en" && typeof enVal === "string") {
      return enVal;
    }
    return ptVal || "";
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function normalizeText(str) {
    return String(str || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  }

  function formatPrice(value) {
    const locale = currentLang === "en" ? "en-US" : "pt-BR";
    return (
      "R$ " +
      Number(value).toLocaleString(locale, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    );
  }

  function renderItem(item) {
    const featuredClass = item.featured ? " menu-item--featured" : "";
    const itemName = pick(item.name, item.nameEn);
    const itemDesc = pick(item.description, item.descriptionEn);
    const itemBadge = pick(item.badge, item.badgeEn);

    const badgeHtml = itemBadge
      ? `<span class="item-badge">${escapeHtml(itemBadge)}</span>`
      : "";
    const descHtml = itemDesc
      ? `<p class="menu-item-desc">${escapeHtml(itemDesc)}</p>`
      : "";

    return `
      <article class="menu-item${featuredClass}">
        <div class="menu-item-top">
          <div class="menu-item-title-wrap">
            <h3 class="menu-item-name">${escapeHtml(itemName)}</h3>
            ${badgeHtml}
          </div>
          <span class="menu-item-dots" aria-hidden="true"></span>
          <span class="menu-item-price">${formatPrice(item.price)}</span>
        </div>
        ${descHtml}
      </article>
    `;
  }

  function renderCategoryHeader(category) {
    const catTitle = pick(category.title, category.titleEn);
    const catSubtitle = pick(category.subtitle, category.subtitleEn);
    const subtitleHtml = catSubtitle
      ? `<p class="category-subtitle">${escapeHtml(catSubtitle)}</p>`
      : "";

    if (category.banner) {
      return `
        <div class="category-banner">
          <img
            src="${escapeHtml(category.banner)}"
            alt="${escapeHtml(catTitle)}"
            class="category-banner-img"
            decoding="async"
          >
          <div class="category-banner-overlay">
            <h2 class="category-title">${escapeHtml(catTitle)}</h2>
            ${subtitleHtml}
          </div>
        </div>
      `;
    }

    return `
      <div class="category-header-plain">
        <h2 class="category-title">${escapeHtml(catTitle)}</h2>
        ${subtitleHtml}
      </div>
    `;
  }

  function renderCategoryPills(categories) {
    categoryNav.innerHTML = categories
      .map((cat) => {
        const isActive = cat.id === activeCategoryId;
        const catTitle = pick(cat.title, cat.titleEn);
        return `
          <a
            href="#cat-${escapeHtml(cat.id)}"
            class="category-pill${isActive ? " is-active" : ""}"
            data-cat-pill="${escapeHtml(cat.id)}"
          >${escapeHtml(catTitle)}</a>
        `;
      })
      .join("");
  }

  function itemMatchesQuery(item, normalized) {
    return (
      normalizeText(item.name).includes(normalized) ||
      normalizeText(item.description).includes(normalized) ||
      normalizeText(item.nameEn).includes(normalized) ||
      normalizeText(item.descriptionEn).includes(normalized)
    );
  }

  function filterCategories(query) {
    const normalized = normalizeText(query);
    if (!normalized) {
      return { categories: data.categories, totalMatches: null };
    }

    let totalMatches = 0;
    const filtered = [];

    for (const cat of data.categories) {
      const catMatches =
        normalizeText(cat.title).includes(normalized) ||
        normalizeText(cat.titleEn).includes(normalized);
      const matchedItems = cat.items.filter((item) =>
        catMatches ? true : itemMatchesQuery(item, normalized)
      );

      const matchedSubcategories = [];
      if (Array.isArray(cat.subcategories)) {
        for (const sub of cat.subcategories) {
          const subMatches =
            normalizeText(sub.title).includes(normalized) ||
            normalizeText(sub.titleEn).includes(normalized);
          const subItems = sub.items.filter((item) =>
            catMatches || subMatches ? true : itemMatchesQuery(item, normalized)
          );
          if (subItems.length > 0) {
            matchedSubcategories.push({ ...sub, items: subItems });
            totalMatches += subItems.length;
          }
        }
      }

      totalMatches += matchedItems.length;

      if (matchedItems.length > 0 || matchedSubcategories.length > 0) {
        filtered.push({
          ...cat,
          items: matchedItems,
          subcategories: matchedSubcategories
        });
      }
    }

    return { categories: filtered, totalMatches };
  }

  function renderMenu(query = "") {
    const { categories, totalMatches } = filterCategories(query);

    if (query.trim()) {
      clearSearchBtn.hidden = false;
      if (totalMatches > 0) {
        const label = totalMatches === 1 ? t("searchOne") : t("searchMany");
        searchSummary.textContent = `${totalMatches} ${label} ${t("searchFor")} "${query.trim()}"`;
        searchSummary.hidden = false;
      } else {
        searchSummary.hidden = true;
      }
    } else {
      clearSearchBtn.hidden = true;
      searchSummary.hidden = true;
    }

    if (categories.length === 0) {
      menuContainer.innerHTML = "";
      emptyState.hidden = false;
      return;
    }

    emptyState.hidden = true;

    menuContainer.innerHTML = categories
      .map((cat) => {
        const itemsHtml =
          cat.items.length > 0
            ? `<div class="menu-grid">${cat.items.map(renderItem).join("")}</div>`
            : "";

        const subcategoriesHtml = Array.isArray(cat.subcategories)
          ? cat.subcategories
              .map((sub) => {
                const subTitle = pick(sub.title, sub.titleEn);
                return `
                  <div class="subcategory-block">
                    <h3 class="subcategory-title">${escapeHtml(subTitle)}</h3>
                    <div class="menu-grid">${sub.items.map(renderItem).join("")}</div>
                  </div>
                `;
              })
              .join("")
          : "";

        return `
          <section class="menu-category" id="cat-${escapeHtml(cat.id)}" data-cat-section="${escapeHtml(cat.id)}">
            ${renderCategoryHeader(cat)}
            ${itemsHtml}
            ${subcategoriesHtml}
          </section>
        `;
      })
      .join("");
  }

  // Centraliza a pill ativa apenas dentro da barra horizontal (sem interferir no scroll vertical da página)
  function centerPillHorizontally(pill) {
    if (!pill || !categoryNav) return;

    const maxScroll = categoryNav.scrollWidth - categoryNav.clientWidth;
    if (maxScroll <= 0) return;

    const targetLeft = Math.max(
      0,
      Math.min(
        maxScroll,
        pill.offsetLeft - (categoryNav.clientWidth - pill.offsetWidth) / 2
      )
    );

    const startLeft = categoryNav.scrollLeft;
    const distance = targetLeft - startLeft;
    if (Math.abs(distance) < 4) return;

    if (pillAnimFrame) {
      cancelAnimationFrame(pillAnimFrame);
    }

    const duration = 220;
    const startTime = performance.now();

    function step(now) {
      const elapsed = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      categoryNav.scrollLeft = startLeft + distance * eased;
      if (elapsed < 1) {
        pillAnimFrame = requestAnimationFrame(step);
      } else {
        pillAnimFrame = null;
      }
    }

    pillAnimFrame = requestAnimationFrame(step);
  }

  function setActiveCategoryPill(catId) {
    if (!catId || catId === activeCategoryId) return;
    activeCategoryId = catId;

    let activePill = null;
    const pills = categoryNav.querySelectorAll(".category-pill");
    pills.forEach((pill) => {
      const isMatch = pill.dataset.catPill === catId;
      pill.classList.toggle("is-active", isMatch);
      if (isMatch) activePill = pill;
    });

    if (activePill) {
      centerPillHorizontally(activePill);
    }
  }

  function getStickyOffset(includeCategoryBar) {
    const headerH = siteHeader ? siteHeader.getBoundingClientRect().height : 74;
    if (!includeCategoryBar || !categoryBarWrap) {
      return headerH;
    }
    const isBarSticky = getComputedStyle(categoryBarWrap).position === "sticky";
    const barH = isBarSticky ? categoryBarWrap.getBoundingClientRect().height : 0;
    return headerH + barH + 12;
  }

  function scrollToTargetId(targetId) {
    if (!targetId || targetId === "topo") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(targetId);
    if (!el) return;

    const isCategory = targetId.startsWith("cat-");
    const offset = getStickyOffset(isCategory);
    const targetTop = Math.max(
      0,
      el.getBoundingClientRect().top + window.pageYOffset - offset
    );

    manualScrollLockUntil = performance.now() + 1200;
    window.scrollTo({ top: targetTop, behavior: "smooth" });
  }

  function releaseScrollLock() {
    manualScrollLockUntil = 0;
  }

  window.addEventListener("wheel", releaseScrollLock, { passive: true });
  window.addEventListener("touchstart", releaseScrollLock, { passive: true });
  if ("onscrollend" in window) {
    window.addEventListener(
      "scrollend",
      () => {
        if (manualScrollLockUntil) {
          manualScrollLockUntil = 0;
          applyScrollState();
        }
      },
      { passive: true }
    );
  }

  function updateActiveCategoryFromScroll() {
    if (performance.now() < manualScrollLockUntil) return;

    const sections = menuContainer.querySelectorAll("[data-cat-section]");
    if (!sections.length) return;

    const triggerY = getStickyOffset(true) + 24;
    let currentId = sections[0].dataset.catSection;

    for (let i = 0; i < sections.length; i++) {
      const rect = sections[i].getBoundingClientRect();
      if (rect.top <= triggerY) {
        currentId = sections[i].dataset.catSection;
      } else {
        break;
      }
    }

    setActiveCategoryPill(currentId);
  }

  function applyScrollState() {
    scrollRafPending = false;
    const scrollY = window.scrollY || window.pageYOffset;

    siteHeader.classList.toggle("is-scrolled", scrollY > 40);
    backToTopBtn.hidden = scrollY < 450;

    const contatoSection = document.getElementById("contato");
    const navLinks = document.querySelectorAll(".desktop-nav .nav-link");
    if (contatoSection && navLinks.length) {
      const contatoTop = contatoSection.getBoundingClientRect().top;
      const isInContact = contatoTop <= getStickyOffset(false) + 60;
      navLinks.forEach((link) => {
        const target = link.dataset.nav;
        link.classList.toggle(
          "active",
          (isInContact && target === "contato") ||
            (!isInContact && target === "cardapio")
        );
      });
    }

    updateActiveCategoryFromScroll();
  }

  function onScroll() {
    if (!scrollRafPending) {
      scrollRafPending = true;
      requestAnimationFrame(applyScrollState);
    }
  }

  function closeMobileDrawer() {
    if (!mobileDrawer || !menuToggle) return;
    mobileDrawer.hidden = true;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", currentLang === "en" ? "Open menu" : "Abrir menu");
  }

  // Event Listeners
  searchInput.addEventListener("input", (e) => {
    renderMenu(e.target.value);
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    renderMenu("");
    searchInput.focus();
  });

  resetSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    renderMenu("");
    searchInput.focus();
  });

  // Navegação suave controlada para categorias, contato e topo
  document.addEventListener("click", (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const href = link.getAttribute("href");
    if (!href || href === "#") return;

    const targetId = href.slice(1);
    const pill = link.closest(".category-pill");

    e.preventDefault();
    closeMobileDrawer();

    if (pill) {
      const catId = pill.dataset.catPill;
      if (searchInput.value.trim()) {
        searchInput.value = "";
        renderMenu("");
      }
      setActiveCategoryPill(catId);
      requestAnimationFrame(() => scrollToTargetId(targetId));
      return;
    }

    scrollToTargetId(targetId);
  });

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener("click", () => {
      const isOpen = !mobileDrawer.hidden;
      mobileDrawer.hidden = isOpen;
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen
          ? currentLang === "en"
            ? "Open menu"
            : "Abrir menu"
          : currentLang === "en"
          ? "Close menu"
          : "Fechar menu"
      );
    });
  }

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", onScroll, { passive: true });

  function renderVisitorText() {
    if (!visitorCountText) return;
    if (lastVisitorTotal === null) {
      visitorCountText.textContent = t("visitsFallback");
      return;
    }
    const locale = currentLang === "en" ? "en-US" : "pt-BR";
    const formatted = lastVisitorTotal.toLocaleString(locale);
    const label = lastVisitorTotal === 1 ? t("visitSingular") : t("visitPlural");
    visitorCountText.textContent = `${formatted} ${label}`;
  }

  function loadVisitorCount() {
    if (!visitorCountText) return;

    const endpoint = "https://lucasfaraujo.goatcounter.com/counter/TOTAL.json";

    fetch(endpoint, { cache: "no-store" })
      .then((res) => {
        if (res.status === 404) {
          return { count: "0" };
        }
        if (!res.ok) {
          throw new Error("HTTP " + res.status);
        }
        return res.json();
      })
      .then((payload) => {
        const raw = String(payload && payload.count ? payload.count : "0");
        const num = parseInt(raw.replace(/\D/g, ""), 10);
        lastVisitorTotal = Number.isFinite(num) ? num : 0;
        renderVisitorText();
      })
      .catch(() => {
        lastVisitorTotal = null;
        renderVisitorText();
      });
  }

  function announceA11y(message) {
    if (!a11yLive) return;
    a11yLive.textContent = "";
    requestAnimationFrame(() => {
      a11yLive.textContent = message;
    });
  }

  function applyLanguage(lang, announce) {
    currentLang = lang === "en" ? "en" : "pt";
    document.documentElement.lang = t("htmlLang");
    document.title = t("pageTitle");

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (UI_STRINGS[currentLang][key] !== undefined) {
        el.textContent = UI_STRINGS[currentLang][key];
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.dataset.i18nHtml;
      if (UI_STRINGS[currentLang][key] !== undefined) {
        el.innerHTML = UI_STRINGS[currentLang][key];
      }
    });

    const yearEl = document.getElementById("currentYear");
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }

    if (searchInput) {
      searchInput.placeholder = t("searchPlaceholder");
      searchInput.setAttribute("aria-label", t("searchAriaLabel"));
    }

    if (backToTopBtn) {
      backToTopBtn.setAttribute("aria-label", t("backToTopAria"));
    }

    if (langPtBtn && langEnBtn) {
      const isPt = currentLang === "pt";
      langPtBtn.classList.toggle("is-active", isPt);
      langPtBtn.setAttribute("aria-pressed", String(isPt));
      langEnBtn.classList.toggle("is-active", !isPt);
      langEnBtn.setAttribute("aria-pressed", String(!isPt));
    }

    try {
      localStorage.setItem("soparia_lang", currentLang);
    } catch (_) {}

    renderCategoryPills(data.categories);
    renderMenu(searchInput ? searchInput.value : "");
    renderVisitorText();
    applyScrollState();

    if (announce) {
      announceA11y(t("langAnnounce"));
    }
  }

  function setupAccessibility() {
    const FONT_STEPS = [90, 100, 112.5, 125, 137.5];
    const DEFAULT_IDX = 1;
    const STORAGE_FONT_KEY = "soparia_font_scale_idx";
    const STORAGE_CONTRAST_KEY = "soparia_high_contrast";

    let fontIdx = DEFAULT_IDX;
    let highContrast = false;

    try {
      const savedIdx = parseInt(localStorage.getItem(STORAGE_FONT_KEY), 10);
      if (Number.isInteger(savedIdx) && savedIdx >= 0 && savedIdx < FONT_STEPS.length) {
        fontIdx = savedIdx;
      }
      highContrast = localStorage.getItem(STORAGE_CONTRAST_KEY) === "1";
    } catch (_) {
      // Ignora caso localStorage esteja bloqueado
    }

    function applyFontScale(announce) {
      const scale = FONT_STEPS[fontIdx];
      document.documentElement.style.fontSize = `${scale}%`;
      if (fontResetBtn) {
        fontResetBtn.textContent = `${Math.round(scale)}%`;
        fontResetBtn.disabled = fontIdx === DEFAULT_IDX;
      }
      if (fontDecreaseBtn) {
        fontDecreaseBtn.disabled = fontIdx <= 0;
      }
      if (fontIncreaseBtn) {
        fontIncreaseBtn.disabled = fontIdx >= FONT_STEPS.length - 1;
      }
      try {
        localStorage.setItem(STORAGE_FONT_KEY, String(fontIdx));
      } catch (_) {}

      if (announce) {
        announceA11y(t("fontAnnounce")(Math.round(scale)));
      }
    }

    function applyContrast(announce) {
      document.documentElement.classList.toggle("high-contrast", highContrast);
      if (contrastToggleBtn) {
        contrastToggleBtn.setAttribute("aria-pressed", String(highContrast));
      }
      const themeMeta = document.querySelector('meta[name="theme-color"]');
      if (themeMeta) {
        themeMeta.setAttribute("content", highContrast ? "#FFFFFF" : "#FF9400");
      }
      try {
        localStorage.setItem(STORAGE_CONTRAST_KEY, highContrast ? "1" : "0");
      } catch (_) {}

      if (announce) {
        announceA11y(highContrast ? t("contrastOn") : t("contrastOff"));
      }
    }

    if (fontDecreaseBtn) {
      fontDecreaseBtn.addEventListener("click", () => {
        if (fontIdx > 0) {
          fontIdx -= 1;
          applyFontScale(true);
        }
      });
    }

    if (fontIncreaseBtn) {
      fontIncreaseBtn.addEventListener("click", () => {
        if (fontIdx < FONT_STEPS.length - 1) {
          fontIdx += 1;
          applyFontScale(true);
        }
      });
    }

    if (fontResetBtn) {
      fontResetBtn.addEventListener("click", () => {
        if (fontIdx !== DEFAULT_IDX) {
          fontIdx = DEFAULT_IDX;
          applyFontScale(true);
        }
      });
    }

    if (contrastToggleBtn) {
      contrastToggleBtn.addEventListener("click", () => {
        highContrast = !highContrast;
        applyContrast(true);
      });
    }

    if (langPtBtn) {
      langPtBtn.addEventListener("click", () => {
        if (currentLang !== "pt") applyLanguage("pt", true);
      });
    }

    if (langEnBtn) {
      langEnBtn.addEventListener("click", () => {
        if (currentLang !== "en") applyLanguage("en", true);
      });
    }

    applyFontScale(false);
    applyContrast(false);
  }

  // Inicialização
  if (currentYearEl) {
    currentYearEl.textContent = String(new Date().getFullYear());
  }

  setupAccessibility();
  applyLanguage(currentLang, false);
  setTimeout(loadVisitorCount, 650);
})();
