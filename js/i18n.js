/* =====================================================================
   i18n.js — 언어 감지 · 사전 · 프로젝트 영어 콘텐츠
   ---------------------------------------------------------------------
   - 기본 언어: 브라우저가 한국어면 'ko', 그 외 'en'. localStorage로 기억.
   - 프로젝트 영어가 없으면 자동으로 한국어로 폴백(절대 안 깨짐).
   - main.js 보다 먼저 로드되어야 합니다.
   ===================================================================== */
(function () {
  "use strict";

  var stored = null;
  try { stored = localStorage.getItem("lang"); } catch (e) {}
  var navLang = (navigator.language || navigator.userLanguage || "en").toLowerCase();
  var LANG = (stored === "ko" || stored === "en")
    ? stored
    : (navLang.indexOf("ko") === 0 ? "ko" : "en");

  window.LANG = LANG;
  document.documentElement.lang = LANG;

  window.setLang = function (l) {
    try { localStorage.setItem("lang", l); } catch (e) {}
    location.reload();
  };

  /* ---- UI 문구 사전 (JS가 생성하는 텍스트 + 토글) ---- */
  var DICT = {
    ko: {
      toggle: "EN",
      view_all: "전체 보기 →",
      back_to_work: "← Work로 돌아가기",
      overview: "Overview",
      not_found_title: "작업을 찾을 수 없어요",
      not_found_body: "요청하신 프로젝트가 없습니다.",
      no_works: "해당 카테고리의 작업이 아직 없습니다.",
      credit: "Credit",
      locked_label: "비공개 작업",
      // 폼
      form_sending: "전송 중이에요…",
      form_sent: "감사합니다! 메시지가 전송됐어요. 곧 회신드릴게요.",
      form_fail: "전송에 실패했어요. 아래 ‘메일 앱으로 보내기’ 버튼을 이용해 주세요.",
      form_err: "전송 중 오류가 났어요. 아래 ‘메일 앱으로 보내기’ 버튼을 이용해 주세요.",
      form_nokey: "메일 전송이 아직 설정되지 않았어요. 아래 ‘메일 앱으로 보내기’ 버튼을 이용해 주세요.",
      sending_btn: "보내는 중…"
    },
    en: {
      toggle: "KO",
      view_all: "View all →",
      back_to_work: "← Back to Work",
      overview: "Overview",
      not_found_title: "Project not found",
      not_found_body: "The project you requested doesn’t exist.",
      no_works: "No work in this category yet.",
      credit: "Credit",
      locked_label: "Confidential",
      form_sending: "Sending…",
      form_sent: "Thank you! Your message has been sent — I’ll get back to you soon.",
      form_fail: "Sending failed. Please use the “Open in mail app” button below.",
      form_err: "Something went wrong. Please use the “Open in mail app” button below.",
      form_nokey: "Email sending isn’t set up yet. Please use the “Open in mail app” button below.",
      sending_btn: "Sending…"
    }
  };
  window.t = function (key) {
    var d = DICT[LANG] || DICT.en;
    return d[key] != null ? d[key] : (DICT.ko[key] != null ? DICT.ko[key] : key);
  };

  /* ---- 프로젝트 영어 콘텐츠 (slug → {concept, overview[], sections[]}) ----
     없는 항목/필드는 자동으로 한국어로 폴백됩니다. 채워가는 중. */
  // 프로젝트 영어 콘텐츠는 js/projects.js(내보내기 결과)에서 채웁니다.
  window.PROJECTS_EN = window.PROJECTS_EN || {};
})();
