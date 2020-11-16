// load jquery paling atas
$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
      $(".navbar-wrapper").addClass("scroll");
    } else {
      $(".navbar-wrapper").removeClass("scroll");
    }
  });

  // slide in menu
  $(".sidenav-btn").click(function (e) {
    $("#sidenav").css("width", "320px");
    $("#sidenav").css("overflow", "scroll");

    $(".sidenav-overlay").addClass("side-open");
  });

  $(".sidenav-close").click(function () {
    $("#sidenav").css("width", "0");
    $(".sidenav-overlay").removeClass("side-open");
  });

  //searchnav
  $(".search-bar").click(function () {
    $("#searchnav").css("height", "100%");
    $("body").css("overflow", "hidden");
  });

  $(".back-btn").click(function () {
    $("#searchnav").css("height", "0");
    $("body").css("overflow", "auto");
  });

  //banner slide
  $(".banner").owlCarousel({
    margin: 7,
    loop: true,
    // autoWidth: true,
    items: 1.3,
    slideTransition: "linear",
    autoplay: true,
    autoplaySpeed: 600,
    autoplayHoverPause: true,
  });

  // menu populer
  $(".menu-populer").owlCarousel({
    margin: 7,
    loop: false,
    items: 2.5,
    slideTransition: "linear",
    dots: false,
  });
});
