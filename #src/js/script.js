  document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function onScroll() {
    let scrollNumbers = document.querySelectorAll(".our-experience-section__item-number");
    scrollNumbers.forEach(function(item) {
      let numberTop = item.getBoundingClientRect().top,
          start = +item.innerHTML,
          end = +item.dataset.max;
      if (window.pageYOffset > numberTop - window.innerHeight / 2) {
        this.removeEventListener("scroll", onScroll);
        var interval = setInterval(function () {
          item.innerHTML = ++start;
          if (start === end) {
            clearInterval(interval);
          }
        }, 30);
      }
    });
  });
});

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
      centerMode: true,
      variableWidth: true,
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