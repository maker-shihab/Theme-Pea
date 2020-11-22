$(document).ready(function () {
  // Mobile menu
  $(".menu-bars").click(function () {
    $(".manu-area").slideToggle(500);

    return false;
  });

  $("#bar1").barfiller({
    // color of bar
    barColor: "#fff",

    // shows a tooltip
    tooltip: true,

    // duration in ms
    duration: 1000,

    // re-animate on resize
    animateOnResize: true,

    // custom symbol
    symbol: "%",
  });
  $("#bar2").barfiller({
    // color of bar
    barColor: "#fff",

    // shows a tooltip
    tooltip: true,

    // duration in ms
    duration: 1000,

    // re-animate on resize
    animateOnResize: true,

    // custom symbol
    symbol: "%",
  });
  $("#bar3").barfiller({
    // color of bar
    barColor: "#fff",

    // shows a tooltip
    tooltip: true,

    // duration in ms
    duration: 1000,

    // re-animate on resize
    animateOnResize: true,

    // custom symbol
    symbol: "%",
  });

  $(".review-content-text").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: "1rem",
    fade: true,
    asNavFor: ".review-content",
  });
  $(".review-content").slick({
    asNavFor: ".review-content-text",
    dots: true,
    autoplay: true,
    focusOnSelect: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false
      }
    }
  ]
  });
});
$(window).scroll(function () {
  var scrollValu = $(this).scrollTop();

  if (scrollValu > 200) {
    $("#header").addClass("fixed-header");
  } else {
    $("#header").removeClass("fixed-header");
  }
});