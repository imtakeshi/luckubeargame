(function () {
  var cfg = window.LUCKYBEAR_CONFIG || {};

  var site = document.getElementById("link-site");
  if (site && cfg.siteUrl) site.href = cfg.siteUrl;
  document.querySelectorAll(".tg-link").forEach(function (el) {
    if (cfg.telegramUrl) el.href = cfg.telegramUrl;
  });

  document.querySelectorAll(".game-card").forEach(function (el) {
    var key = el.getAttribute("data-game");
    var href =
      (cfg.gameLinks && cfg.gameLinks[key]) || cfg.gamesUrl || "#";
    el.href = href;
  });
})();
