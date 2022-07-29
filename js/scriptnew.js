document.addEventListener("DOMContentLoaded", () => {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });

  AOS.init({
    once: true,
  });

  var image = document.getElementsByClassName("bannerParalax");
  new simpleParallax(image);

  function mobileNav() {
    if (document.querySelector(".smobitrigger")) {
      const btn = document.querySelector(".smobitrigger");
      const body = document.querySelector("body");
      const menu = document.querySelector(".mobimenu");
      const overlay = document.querySelector(".mobimenu-overlay");

      btn.addEventListener("click", (event) => {
        event.preventDefault();
        if (btn.getAttribute("aria-expanded") === "false") {
          btn.classList.add("is-active");
          body.classList.add("nav-active");
          btn.setAttribute("aria-expanded", "true");
          menu.classList.add("is-active");
          overlay.classList.add("is-active");
        } else {
          btn.classList.remove("is-active");
          body.classList.remove("nav-active");
          btn.setAttribute("aria-expanded", "false");
          menu.classList.remove("is-active");
          overlay.classList.remove("is-active");
        }
      });
      overlay.addEventListener("click", (event) => {
        event.preventDefault();
        btn.classList.remove("is-active");
        body.classList.remove("nav-active");
        btn.setAttribute("aria-expanded", "false");
        menu.classList.remove("is-active");
        overlay.classList.remove("is-active");
      });
    }
  }
  mobileNav();
});

$(document).ready(function () {
  $(window).on("scroll resize touchmove", function () {
    if ($(window).scrollTop() > 45) $("div.banTopWrap").addClass("fixed");
    else $("div.banTopWrap").removeClass("fixed");
  });
});
