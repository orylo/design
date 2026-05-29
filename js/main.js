/* =====================================================================
   main.js — 렌더링 & 인터랙션
   ===================================================================== */
(function () {
  "use strict";

  var catLabel = {};
  if (typeof CATEGORIES !== "undefined") {
    CATEGORIES.forEach(function (c) { catLabel[c.key] = c.label; });
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (m) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m];
    });
  }

  /* ---- Project tile markup ---- */
  function hasTag(p, t) { return (p.tags || []).indexOf(t) !== -1; }

  function tileHTML(p) {
    var label = (p.tags && p.tags[0]) || (catLabel[p.category] || "Work");
    var ym = String(p.date || "").replace("-", ".");   // 2024-12 → 2024.12
    var isVideo = hasTag(p, "Video") || hasTag(p, "Film");
    return (
      '<a class="tile" href="project.html?slug=' + encodeURIComponent(p.slug) + '" aria-label="' + esc(p.titleKo) + '">' +
        '<span class="tile__media color-block--' + esc(p.color) + '" style="background:var(--color-block-' + esc(p.color) + ')">' +
          esc(p.titleEn) +
        '</span>' +
        (isVideo ? '<span class="tile__badge" aria-hidden="true">&#9654;</span>' : "") +
        '<span class="tile__overlay">' +
          '<span class="tile__title">' + esc(p.titleKo) + '</span>' +
          '<span class="tile__meta">' + esc(label) + ' | ' + esc(ym) + '</span>' +
        '</span>' +
      '</a>'
    );
  }

  /* ---- Home: featured (latest 4) ---- */
  function renderFeatured() {
    var host = document.querySelector("[data-featured-grid]");
    if (!host) return;
    var items = sortedProjects().filter(function (p) { return p.featured; }).slice(0, 4);
    host.innerHTML = items.map(tileHTML).join("");
  }

  /* ---- Work: filter tabs + grid ---- */
  function renderWork() {
    var host = document.querySelector("[data-work-grid]");
    var tabsHost = document.querySelector("[data-filter-tabs]");
    if (!host) return;

    var active = "all";

    if (tabsHost) {
      tabsHost.innerHTML = CATEGORIES.map(function (c) {
        return '<button class="filter-tab' + (c.key === "all" ? " is-active" : "") +
          '" data-cat="' + c.key + '">' + esc(c.label) + "</button>";
      }).join("");

      tabsHost.addEventListener("click", function (e) {
        var btn = e.target.closest(".filter-tab");
        if (!btn) return;
        active = btn.getAttribute("data-cat");
        tabsHost.querySelectorAll(".filter-tab").forEach(function (b) {
          b.classList.toggle("is-active", b === btn);
        });
        paint();
      });
    }

    function paint() {
      var list = sortedProjects().filter(function (p) {
        return active === "all" || p.category === active;
      });
      host.innerHTML = list.length
        ? list.map(tileHTML).join("")
        : '<p class="body" style="opacity:.6">해당 카테고리의 작업이 아직 없습니다.</p>';
      var count = document.querySelector("[data-work-count]");
      if (count) count.textContent = list.length;
    }
    paint();
  }

  /* ---- Project detail ---- */
  function ytEmbed(url) {
    var m = String(url || "").match(/(?:youtu\.be\/|[?&]v=|\/embed\/)([\w-]{11})/);
    return m ? "https://www.youtube.com/embed/" + m[1] : null;
  }

  function sectionHTML(s) {
    if (!s) return "";
    if (s.type === "text") {
      var body = [].concat(s.body || []).map(function (t) {
        return '<p class="body-lg" style="margin-bottom:16px">' + esc(t) + "</p>";
      }).join("");
      return '<div class="container section detail-body">' +
        (s.title ? '<h2 class="headline" style="margin-bottom:16px">' + esc(s.title) + "</h2>" : "") +
        body + "</div>";
    }
    if (s.type === "chapter") {
      return '<div class="container section"><div class="detail-chapter">' +
        '<div class="detail-chapter__text">' +
          '<span class="caption" style="opacity:.5">CHAPTER ' + esc(s.index) + "</span>" +
          '<h3 class="headline" style="margin:8px 0 12px">' + esc(s.title) + "</h3>" +
          '<p class="body">' + esc(s.body) + "</p>" +
        "</div>" +
        '<div class="img-ph detail-chapter__img">CHAPTER IMAGE</div>' +
      "</div></div>";
    }
    if (s.type === "process") {
      var steps = (s.steps || []).map(function (st) {
        return '<div class="process-step">' +
          '<span class="caption process-step__no">' + esc(st.step) + "</span>" +
          '<div class="process-step__title">' + esc(st.title) + "</div>" +
          '<p class="body-sm" style="opacity:.8;margin-top:6px">' + esc(st.body) + "</p></div>";
      }).join("");
      return '<div class="container section">' +
        (s.title ? '<h2 class="headline" style="margin-bottom:24px">' + esc(s.title) + "</h2>" : "") +
        '<div class="process-grid">' + steps + "</div></div>";
    }
    if (s.type === "quote") {
      return '<div class="container section"><p class="subhead detail-quote">' + esc(s.text) + "</p></div>";
    }
    if (s.type === "gallery") {
      var g = "", n = s.count || 3;
      for (var i = 1; i <= n; i++) g += '<div class="img-ph">IMAGE ' + i + "</div>";
      return '<div class="container section"><div class="detail-gallery">' + g + "</div></div>";
    }
    return "";
  }

  function renderDetail() {
    var host = document.querySelector("[data-detail]");
    if (!host) return;

    var slug = new URLSearchParams(location.search).get("slug");
    var all = sortedProjects();
    var idx = all.findIndex(function (p) { return p.slug === slug; });
    var p = all[idx];

    if (!p) {
      host.innerHTML = '<div class="container section-pad"><h1 class="display-lg">작업을 찾을 수 없어요</h1>' +
        '<p class="body" style="margin-top:16px">요청하신 프로젝트가 없습니다.</p>' +
        '<a class="btn btn-primary" style="margin-top:24px" href="work.html">← Work로 돌아가기</a></div>';
      return;
    }

    document.title = p.titleEn + " — orylo";

    var catLbl = catLabel[p.category] || p.category;
    var tags = (p.tags || []).join(" · ");
    var prev = all[idx - 1]; // 더 최신
    var next = all[idx + 1]; // 더 과거

    var linkBlock = "";
    if (p.link && p.link.url) {
      var emb = ytEmbed(p.link.url);
      linkBlock = emb
        ? '<div class="container section"><div class="detail-embed"><iframe src="' + esc(emb) +
            '" title="video" frameborder="0" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe></div></div>'
        : '<div class="container section"><a class="btn btn-primary" target="_blank" rel="noopener" href="' +
            esc(p.link.url) + '">' + esc(p.link.label || "View") + " ↗</a></div>";
    }

    var overview = (p.overview || []).map(function (t) {
      return '<p class="body-lg" style="margin-bottom:16px">' + esc(t) + "</p>";
    }).join("");
    var sections = (p.sections || []).map(sectionHTML).join("");

    host.innerHTML =
      '<div class="container detail-head">' +
        '<a class="btn btn-secondary" style="padding:8px 18px;min-height:auto" href="work.html">← Back to Work</a>' +
        '<p class="eyebrow" style="margin-top:24px;opacity:.6">' + esc(catLbl) + "</p>" +
        '<h1 class="display-lg" style="margin-top:8px;max-width:18ch">' + esc(p.titleKo) + "</h1>" +
        '<p class="subhead" style="margin-top:16px;max-width:60ch">' + esc(p.concept || "") + "</p>" +
      "</div>" +

      '<div class="detail-hero img-ph">HERO IMAGE PLACEHOLDER</div>' +

      '<div class="container">' +
        '<div class="detail-meta">' +
          metaCell("Role", (p.role || []).join("<br>")) +
          metaCell("Period", p.period) +
          metaCell("Category", catLbl) +
          metaCell("Client", p.client) +
        "</div>" +
        '<div class="detail-meta" style="border-top:none">' +
          metaCell("Tools", (p.tools || []).join(", ")) +
          metaCell("Tags", tags) +
          metaCell("Year", p.year) +
          metaCell("", "") +
        "</div>" +
      "</div>" +

      '<div class="container section-pad detail-body">' +
        '<h2 class="headline" style="margin-bottom:16px">Overview</h2>' + overview +
      "</div>" +

      linkBlock +
      sections +

      '<div class="container section"><div class="detail-gallery">' +
        '<div class="img-ph">IMAGE 1</div><div class="img-ph">IMAGE 2</div><div class="img-ph">IMAGE 3</div>' +
      "</div></div>" +

      '<div class="container"><div class="detail-nav">' +
        (next ? '<a class="btn-ghost btn" href="project.html?slug=' + encodeURIComponent(next.slug) + '">← ' + esc(next.titleKo) + "</a>" : "<span></span>") +
        (prev ? '<a class="btn-ghost btn" href="project.html?slug=' + encodeURIComponent(prev.slug) + '">' + esc(prev.titleKo) + " →</a>" : "<span></span>") +
      "</div></div>";

    function metaCell(k, v) {
      if (!k && !v) return '<div class="detail-cell"></div>';
      return '<div class="detail-cell"><div class="caption k">' + esc(k) + '</div><div class="v">' + (v || "") + "</div></div>";
    }
  }

  /* ---- Mobile nav ---- */
  function initNav() {
    var toggle = document.querySelector("[data-nav-toggle]");
    var overlay = document.querySelector("[data-nav-overlay]");
    var close = document.querySelector("[data-nav-close]");
    if (!toggle || !overlay) return;
    function open() { overlay.classList.add("is-open"); document.body.style.overflow = "hidden"; }
    function shut() { overlay.classList.remove("is-open"); document.body.style.overflow = ""; }
    toggle.addEventListener("click", open);
    if (close) close.addEventListener("click", shut);
    overlay.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", shut); });
  }

  /* ---- Contact form (UI only) ---- */
  function initForm() {
    document.querySelectorAll("[data-contact-form]").forEach(function (form) {
      var status = form.querySelector("[data-form-status]");
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var data = new FormData(form);
        var name = (data.get("name") || "").toString().trim();
        var email = (data.get("email") || "").toString().trim();
        var msg = (data.get("message") || "").toString().trim();

        if (status) {
          status.classList.add("is-visible");
          status.textContent = "감사합니다, " + (name || "방문자") + "님! 메일 전송 기능은 준비 중이에요. 아래 버튼으로 바로 메일을 보내실 수 있습니다.";
        }
        var mailto = "mailto:orylo0424@gmail.com?subject=" +
          encodeURIComponent("[Portfolio] " + (name ? name + "님의 문의" : "문의")) +
          "&body=" + encodeURIComponent(msg + "\n\n— " + name + " (" + email + ")");
        var btn = form.querySelector("[data-mailto]");
        if (btn) btn.setAttribute("href", mailto);
      });
    });
  }

  /* ---- Footer year ---- */
  function initYear() {
    var el = document.querySelector("[data-year]");
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ---- Home: switch overlay nav to solid after the hero ---- */
  function initStickyNav() {
    var top = document.querySelector("[data-sitetop]");
    if (!top || !document.body.classList.contains("is-home")) return;
    function onScroll() {
      top.classList.toggle("is-solid", window.scrollY > window.innerHeight * 0.7);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderFeatured();
    renderWork();
    renderDetail();
    initNav();
    initForm();
    initYear();
    initStickyNav();
  });
})();
