document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function onScroll() {
    let scrollNumbers = document.querySelectorAll(".our-experience-section__item-number");
    scrollNumbers.forEach(function(item) {
      let numberTop = item.getBoundingClientRect().top,
          start = +item.innerHTML,
          end = +item.dataset.max;
      if (window.pageYOffset > numberTop - window.innerHeight / 2) {
        this.removeEventListener("scroll", onScroll);
        let interval = setInterval(function () {
          item.innerHTML = ++start;
          if (start === end) {
            clearInterval(interval);
          }
        }, 200);
      }
    });
  });
});