jQuery(document).ready(function (o) {
  var t = o(".to-top");
  o(window).scroll(function () {
    o(this).scrollTop() > 300
      ? t.addClass("to-is-visible")
      : t.removeClass("to-is-visible to-fade-out"),
      o(this).scrollTop() > 1200 && t.addClass("to-fade-out");
  }),
    t.on("click", function (t) {
      t.preventDefault(), o("body,html").animate({ scrollTop: 0 }, 700);
    });
});
