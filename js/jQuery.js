$(function () {
  $(".header-course-switch").click(function () {
    if ($(this).hasClass("drawer-show")) {
      $(this).css("color", "black");
      $(".header-drawer").slideUp();
      $(this).removeClass("drawer-show");
    } else {
      $(this).css("color", "#ec6d64");
      $(".header-drawer").slideDown();
      $(this).addClass("drawer-show");
    }
  });

  $(".header-drawer").hover(
    function () {
      $(this).css("background-color", "#ec6d64");
    },
    function () {
      $(this).css("background-color", "white");
    }
  );

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 80) {
      $(".scroll-btn").fadeIn();
    } else if ($(window).scrollTop() <= 79) {
      $(".scroll-btn").fadeOut();
    }
  });

  $(".scroll-btn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "0.5s");
  });

  $(".scroll-btn").hover(
    function () {
      $(this).css("opacity", "1.0");
    },
    function () {
      $(this).css("opacity", "0.7");
    }
  );

  $(".course-item img").click(function () {
    $(".course-modal-img").attr("src", `${$(this).attr("src")}`);
    $(".course-modal-bg, .course-modal-img").fadeIn();
  });

  $(".course-modal-bg, .course-modal-img").click(function () {
    $(".course-modal-bg, .course-modal-img").fadeOut();
  });
});
