// 화면을 그리는 코드입니다. 내용·설정은 profile.js(와 글은 posts.js)에서만 고치세요.
(function () {
  var S = window.SITE, P = window.POSTS || [];
  var qs = new URLSearchParams(location.search);
  var lang = qs.get("lang") || "ko";
  var pid = qs.get("p") || S.menu[0].id;
  var showDraft = qs.get("draft") === "1";
  var T = function (v) { if (v == null) return ""; if (typeof v === "string") return v; return v[lang] || v.en || v.ko || ""; };
  var url = function (p, l, extra) { var u = "index.html?p=" + p; if ((l || lang) !== "ko") u += "&lang=" + (l || lang); return u + (extra || ""); };
  var r = document.documentElement.style;
  r.setProperty("--link", S.colors.link); r.setProperty("--menu-bg", S.colors.menuBg);
  r.setProperty("--menu-text", S.colors.menuText); r.setProperty("--menu-active", S.colors.menuActive);
  document.documentElement.lang = {ko:"ko",en:"en",ja:"ja",zhHans:"zh-Hans",zhHant:"zh-Hant"}[lang] || "ko";
  document.body.className = "lang-" + lang;
  var postId = qs.get("post");
  var keep = postId ? "&post=" + encodeURIComponent(postId) : "";

  // 왼쪽 메뉴
  var nav = S.menu.map(function (m) { return '<a href="' + url(m.id) + '"' + (m.id === pid ? ' class="on"' : "") + ">" + T(m.label) + "</a>"; }).join("");
  var one = function (l) { return '<a href="' + url(pid, l.code, keep) + '"' + (l.code === lang ? ' class="on"' : "") + ">" + l.label + "</a>"; };
  var langs = S.languages.map(function (l) {
    if (l.sub) {
      var on = l.sub.some(function (s) { return s.code === lang; });
      return '<div class="lgrp"><span' + (on ? ' class="on"' : "") + ">" + l.label + "</span>(" + l.sub.map(one).join('<span class="dot">·</span>') + ")</div>";
    }
    return one(l);
  }).join("");
  document.getElementById("side").innerHTML = '<nav class="menu">' + nav + '</nav><nav class="langs">' + langs + "</nav>";

  var md = window.MD;

  var page = S.menu.filter(function (m) { return m.id === pid; })[0] || S.menu[0];
  var h = "", title = "";
  var row = function (it) {
    if (it.heading) return "<h2>" + T(it.heading) + "</h2>";
    var t = T(it.title); if (it.url) t = '<a href="' + it.url + '" target="_blank" rel="noopener">' + t + "</a>";
    var n = (typeof it.note === "string" && S.OUT && S.OUT[it.note]) ? T(S.OUT[it.note]) : T(it.note);
    return '<div class="row"><span class="d">' + (it.date || "") + "</span><span>" + t + (n ? ", " + n : "") + "</span></div>";
  };
  if (page.type === "home") {
    var roles = (S.roles[lang] || S.roles.en || S.roles.ko).join("<br>");
    var hanja = (lang === "ko" && S.hanja) ? ' <span class="hanja">(' + S.hanja + ")</span>" : "";
    var en = (lang === "ko" || lang === "ja") ? ' <span class="en">' + S.nameEn + "</span>" : "";
    h += '<div class="card"><img src="' + S.photo + '" alt=""><div>';
    h += '<h1 class="name">' + T(S.name) + hanja + en + "</h1>";
    h += '<p class="roles">' + roles + "</p>";
    var lk = (S.links || []).map(function (x) { var ext = /^https?:/.test(x.url); return '<a href="' + x.url + '"' + (ext ? ' target="_blank" rel="noopener"' : "") + ">" + T(x.label) + "</a>"; }).join('<span class="sep"> · </span>');
    h += (lk ? '<p class="links">' + lk + "</p>" : "") + "</div></div>";
    h += '<p class="intro">' + T(S.intro) + "</p>";
    if (S.history && S.history.items.length) {
      if (T(S.history.title)) h += "<h2>" + T(S.history.title) + "</h2>"; var open = false; S.history.items.forEach(function (i) { if (i.heading) { if (open) h += "</ul>"; h += "<h2 class=\"hh\">" + T(i.heading) + "</h2><ul class=\"bul\">"; open = true; } else { if (!open) { h += "<ul class=\"bul\">"; open = true; } h += "<li>" + T(i) + "</li>"; } }); if (open) h += "</ul>";
    }
  } else if (page.type === "list") {
    var items = (S.lists && S.lists[page.id]) || [];
    h += "<h1 class=\"pt\">" + T(page.label) + "</h1>";
    h += '<div class="list">' + items.map(row).join("") + "</div>";
  } else if (page.type === "posts") {
    var vis = P.filter(function (p) { return showDraft || !p.draft; });
    var cur = postId && P.filter(function (p) { return p.id === postId; })[0];
    if (cur) {
      title = T(cur.title);
      h += '<p class="back"><a href="' + url(pid, null, showDraft ? "&draft=1" : "") + '">' + T(S.backLabel) + "</a>" + (/^(file:|http:\/\/(127\.0\.0\.1|localhost))/.test(location.href) ? ' <a class="write" href="write.html?edit=' + encodeURIComponent(cur.id) + '">이 글 고치기</a>' : "") + "</p>";
      h += '<article class="post"><h1 class="pt">' + T(cur.title) + '</h1><p class="pdate">' + (cur.date || "") + "</p>" + md(T(cur.body)) + "</article>";
    } else {
      var local = /^(file:|http:\/\/(127\.0\.0\.1|localhost))/.test(location.href);
      h += "<h1 class=\"pt\">" + T(page.label) + (local ? ' <a class="write" href="write.html">+ 글쓰기</a>' : "") + "</h1>";
      h += '<div class="list">' + vis.map(function (p) {
        return '<div class="row"><span class="d">' + (p.date || "") + '</span><span><a href="' + url(pid, null, "&post=" + encodeURIComponent(p.id) + (showDraft ? "&draft=1" : "")) + '">' + T(p.title) + "</a>" + (p.draft ? " (draft)" : "") + "</span></div>";
      }).join("") + ((S.lists && S.lists[page.id]) || []).map(row).join("") + "</div>";
    }
  } else if (page.type === "text") {
    h += "<h1 class=\"pt\">" + T(page.label) + "</h1><div>" + T(page.body) + "</div>";
  }
  document.getElementById("app").innerHTML = h;
  document.title = T(S.name) + (page.type === "home" ? "" : " | " + (title || T(page.label)));

  // 일본어·중국어 화면에서만 해당 글꼴을 불러옵니다.
  var cjk = { ja: "Noto+Sans+JP", zhHans: "Noto+Sans+SC", zhHant: "Noto+Sans+TC" }[lang];
  if (cjk) { var l = document.createElement("link"); l.rel = "stylesheet"; l.href = "https://fonts.googleapis.com/css2?family=" + cjk + ":wght@400;700&display=swap"; document.head.appendChild(l); }
})();