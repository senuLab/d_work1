$(function () {
  $(".header-course-switch").click(function () {
    if ($(this).hasClass("drawer-show")) {
      $(this).css("color", "black");
      $(".header-drawer").slideUp();
      $(this).removeClass("drawer-show");
    } else {
      $(this).css("color", "red");
      $(".header-drawer").slideDown();
      $(this).addClass("drawer-show");
    }
  });

  $(".header-drawer").hover(
    function () {
      $(this).css("color", "red").css("border-color", "red");
      $(this).css("opacity", "0.7");
    },
    function () {
      $(this).css("color", "black").css("border-color", "black");
      $(this).css("opacity", "1");
    }
  );
});
