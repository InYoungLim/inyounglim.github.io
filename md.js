// 글 본문 표시 규칙 (Others 글과 글쓰기 화면이 함께 씁니다)
(function () {
  // 글 본문용 간단한 표시 규칙
  var inline = function (s) {
    return s.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">')
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
            .replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
  };
  var md = function (src) {
    return src.replace(/\r/g, "").trim().split(/\n\s*\n/).map(function (b) {
      var lines = b.split("\n");
      var im = b.trim().match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
      if (im) return '<figure><img src="' + im[2] + '" alt="' + im[1] + '">' + (im[1] ? "<figcaption>" + im[1] + "</figcaption>" : "") + "</figure>";
      if (/^## /.test(b)) return "<h3>" + inline(b.slice(3)) + "</h3>";
      if (lines.every(function (x) { return /^- /.test(x); })) return "<ul>" + lines.map(function (x) { return "<li>" + inline(x.slice(2)) + "</li>"; }).join("") + "</ul>";
      if (lines.every(function (x) { return /^> ?/.test(x); })) return "<blockquote>" + inline(lines.map(function (x) { return x.replace(/^> ?/, ""); }).join("<br>")) + "</blockquote>";
      return "<p>" + inline(lines.join("<br>")) + "</p>";
    }).join("");
  };

  window.MD = md;
})();
