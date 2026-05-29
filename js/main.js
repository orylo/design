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
    var label = catLabel[p.category] || "Work";   // 3개 카테고리 중 하나로 통일
    var ym = String(p.date || "").replace("-", ".");   // 2024-12 → 2024.12
    var isVideo = hasTag(p, "Video") || hasTag(p, "Film");
    // 호버 프리뷰: previewVideo(mp4)가 있으면 영상, 없으면 gif
    var previewMedia = p.previewVideo
      ? '<video class="tile__preview" src="' + esc(p.previewVideo) + '" muted loop playsinline preload="metadata"></video>'
      : '<img class="tile__preview" src="' + esc(p.preview || ("assets/work/" + p.slug + "/preview.gif")) + '" alt="" loading="lazy" onerror="this.remove()">';
    var hoverAttrs = p.previewVideo
      ? ' onmouseenter="var v=this.querySelector(\'video\');if(v){try{v.currentTime=0;v.play()}catch(e){}}" onmouseleave="var v=this.querySelector(\'video\');if(v)v.pause()"'
      : "";
    return (
      '<a class="tile' + (p.previewContain ? " tile--contain" : "") + '" href="project.html?slug=' + encodeURIComponent(p.slug) + '" aria-label="' + esc(p.titleKo) + '"' + hoverAttrs + '>' +
        '<span class="tile__media color-block--' + esc(p.color) + '" style="background:var(--color-block-' + esc(p.color) + ')">' +
          '<span class="tile__ph">' + esc(p.titleEn) + '</span>' +
          '<img class="tile__thumb" src="' + esc(p.thumb || ("assets/work/" + p.slug + "/thumb.jpg")) + '" alt="" loading="lazy" onerror="this.remove()">' +
          previewMedia +
        '</span>' +
        (isVideo ? '<span class="tile__badge" aria-hidden="true">&#9654;</span>' : "") +
        '<span class="tile__overlay">' +
          '<span class="tile__meta">' + esc(label) + ' | ' + esc(ym) + '</span>' +
          '<span class="tile__title">' + esc(p.titleKo) + '</span>' +
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
      var cls = "container section detail-body" + (s.align === "center" ? " detail-body--center" : "");
      return '<div class="' + cls + '">' +
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
    if (s.type === "tiles") {
      var t = (s.images || []).map(function (u) {
        return '<img src="' + esc(u) + '" alt="" loading="lazy" onerror="this.remove()">';
      }).join("");
      return '<div class="container section"><div class="detail-tiles">' + t + "</div></div>";
    }
    if (s.type === "images") {
      var im = (s.images || []).map(function (u) {
        return '<div class="img-ph"><img src="' + esc(u) + '" alt="" loading="lazy" onerror="this.parentNode.remove()"></div>';
      }).join("");
      return '<div class="container section"><div class="detail-gallery">' + im + "</div></div>";
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

    // 특정 프로젝트는 흰 배경으로
    if (p.slug === "chaegeun" || p.slug === "mukkuri-hangwa" || p.slug === "joseon-hats") {
      document.body.classList.add("detail-light");
    }
    // 흡연자 — 검정 배경 다크 테마
    if (p.slug === "heupyeonja") {
      document.body.classList.add("detail-dark");
    }

    var catLbl = catLabel[p.category] || p.category;
    var tags = (p.tags || []).join(" · ");
    var prev = all[idx - 1]; // 더 최신
    var next = all[idx + 1]; // 더 과거

    // 임베드형(유튜브) 링크는 본문에, 일반 버튼형 링크는 페이지 하단 우측에 표시
    var linkEmbed = "", linkButton = "";
    if (p.link && p.link.url) {
      var emb = ytEmbed(p.link.url);
      if (emb) {
        linkEmbed = '<div class="container section"><div class="detail-embed"><iframe src="' + esc(emb) +
          '" title="video" frameborder="0" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe></div></div>';
      } else {
        linkButton = '<div class="container detail-extlink"><a class="btn btn-primary" target="_blank" rel="noopener" href="' +
          esc(p.link.url) + '">' + esc(p.link.label || "View") + " ↗</a></div>";
      }
    }

    var overview = (p.overview || []).map(function (t) {
      return '<p class="body-lg" style="margin-bottom:16px">' + esc(t) + "</p>";
    }).join("");
    var overviewBlock = overview
      ? '<div class="container section-pad detail-body"><h2 class="headline" style="margin-bottom:16px">Overview</h2>' + overview + "</div>"
      : "";
    var sections = (p.sections || []).map(sectionHTML).join("");

    // 이미지: 프로젝트에 명시된 URL(p.hero/p.gallery)이 있으면 사용, 없으면 assets 규칙 경로
    var heroSrc = p.hero || ("assets/work/" + p.slug + "/hero.jpg");
    // gallery: 명시 배열이 있으면 그대로(빈 배열이면 표시 안 함), 없으면 규칙 경로
    var galList = p.gallery
      ? p.gallery
      : ["assets/work/" + p.slug + "/01.jpg", "assets/work/" + p.slug + "/02.jpg", "assets/work/" + p.slug + "/03.jpg"];
    var videoTop = p.video
      ? '<div class="container detail-videotop"><div class="ratio"><iframe src="' + esc(p.video) +
        '" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div></div>'
      : "";
    // 페이지 맨 아래 크레딧 블록(가운데 정렬)
    var creditBlock = (p.credit && p.credit.length)
      ? '<div class="container section detail-body detail-body--center"><h2 class="headline" style="margin-bottom:16px">Credit</h2>' +
        [].concat(p.credit).map(function (line) { return '<p class="body" style="margin:0 0 4px">' + esc(line) + "</p>"; }).join("") +
        "</div>"
      : "";
    var galleryHTML = galList.map(function (item) {
      // 2칼럼 행: { row: [urlA, urlB] }
      if (item && typeof item === "object" && item.row) {
        var cells = [].concat(item.row).map(function (u) {
          return '<img src="' + esc(u) + '" alt="" loading="lazy" onerror="this.style.display=\'none\'">';
        }).join("");
        return '<div class="img-ph img-row">' + cells + "</div>";
      }
      var u = (typeof item === "string") ? item : (item && item.src) || "";
      var narrow = (typeof item === "object" && item && item.narrow);
      var cls = narrow ? "img-ph img-ph--narrow" : "img-ph";
      if (/\.mp4(\b|#|$)/i.test(u)) {
        return '<div class="' + cls + '"><video src="' + esc(u) +
          '" autoplay muted loop playsinline controls preload="metadata"></video></div>';
      }
      return '<div class="' + cls + '"><img src="' + esc(u) + '" alt="" loading="lazy" onerror="this.parentNode.remove()"></div>';
    }).join("");

    host.innerHTML =
      '<div class="container detail-head">' +
        '<a class="btn btn-secondary" style="padding:8px 18px;min-height:auto" href="work.html">← Back to Work</a>' +
        '<p class="eyebrow" style="margin-top:24px;opacity:.6">' + esc(catLbl) + "</p>" +
        '<h1 class="display-lg" style="margin-top:8px;max-width:18ch">' + esc(p.titleKo) + "</h1>" +
        '<p class="subhead" style="margin-top:16px;max-width:60ch">' + esc(p.concept || "") + "</p>" +
      "</div>" +

      '<div class="detail-hero img-ph"><img class="detail-hero__img" src="' + esc(heroSrc) + '" alt="" onerror="this.parentNode.remove()"></div>' +

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

      overviewBlock +

      linkEmbed +
      videoTop +
      sections +

      '<div class="container"><div class="detail-gallery">' + galleryHTML + "</div></div>" +

      creditBlock +
      linkButton +

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

  /* ---- Contact form → Web3Forms 전송 ---- */
  function initForm() {
    document.querySelectorAll("[data-contact-form]").forEach(function (form) {
      var status = form.querySelector("[data-form-status]");
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var data = new FormData(form);
        var name = (data.get("name") || "").toString().trim();
        var email = (data.get("email") || "").toString().trim();
        var msg = (data.get("message") || "").toString().trim();

        // 메일 앱 fallback 링크 갱신
        var mailto = "mailto:orylo0424@gmail.com?subject=" +
          encodeURIComponent("[Portfolio] " + (name ? name + "님의 문의" : "문의")) +
          "&body=" + encodeURIComponent(msg + "\n\n— " + name + " (" + email + ")");
        var mailBtn = form.querySelector("[data-mailto]");
        if (mailBtn) mailBtn.setAttribute("href", mailto);

        function setStatus(t) { if (status) { status.classList.add("is-visible"); status.textContent = t; } }

        var key = (data.get("access_key") || "").toString().trim();
        if (!key || key.indexOf("WEB3FORMS") !== -1 || key.indexOf("여기에") !== -1) {
          setStatus("메일 전송 키가 아직 설정되지 않았어요. 아래 ‘메일 앱으로 보내기’ 버튼을 이용해 주세요.");
          return;
        }

        if (!data.get("subject")) data.append("subject", "[Portfolio 문의] " + (name ? name + "님" : "새 메시지"));

        var submitBtn = form.querySelector('button[type="submit"]');
        var origText = submitBtn ? submitBtn.textContent : "";
        if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = "보내는 중…"; }
        setStatus("전송 중이에요…");

        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Accept": "application/json" },
          body: data
        })
          .then(function (r) { return r.json(); })
          .then(function (res) {
            if (res && res.success) {
              form.reset();
              setStatus("감사합니다, " + (name || "방문자") + "님! 메시지가 전송됐어요. 곧 회신드릴게요.");
            } else {
              setStatus("전송에 실패했어요. 아래 ‘메일 앱으로 보내기’ 버튼을 이용해 주세요.");
            }
          })
          .catch(function () {
            setStatus("전송 중 오류가 났어요. 아래 ‘메일 앱으로 보내기’ 버튼을 이용해 주세요.");
          })
          .then(function () {
            if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = origText; }
          });
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
