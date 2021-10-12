$(document).ready(function() {
  $(".slider-testimonials").slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    easing: 'linear',
    initialSlide: 1,
    infinite: false,
    draggable: true,
    swipe: true,
    touchThreshold: 10,
    touchMove: true,
    waitForAnimate: true,
    centerMode: false,
    centerPadding: '50px',
    variableWidth: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '0',
          centerMode: true
        }
      }
    ]
  });
});