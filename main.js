// load jquery paling atas
$(function () {
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
