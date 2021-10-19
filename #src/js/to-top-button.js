window.onload = function() {

  var scrolled;
  var time;

  document.querySelector('#to-top-button').onclick = function() {
    scrolled = window.pageYOffset;
    scrollUp();
}

  function scrollUp() {
    if (scrolled > 0) {
      window.scrollTo(0, scrolled);
      scrolled = scrolled - 150;
      time = setTimeout(scrollUp, 3);
    } else {
      clearTimeout(time);
      window.scrollTo(0, 0);
    }
  }
}