$(document).ready(function() {
  $(".slider").slick({
    arrows: false,
    dots: false,
    adaptiveHeight: true,
    // autoplay: true,
    speed: 300,
    easing: 'linear',
    initialSlide: 0,
    infinite: true,
    draggable: true,
    swipe: true,
    touchThreshold: 10,
    touchMove: true,
    waitForAnimate: true,
    centerMode: false,
    variableWidth: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          // autoplay: true,
          autoplaySpeed: 1000,
          pauseOnFocus: true,
          pauseOnHover: true,
          pauseOnDotsHover: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          centerMode: false,
        }
      }
    ]
  });
});