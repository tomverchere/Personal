document.addEventListener("DOMContentLoaded", function() {
  var elements = document.querySelectorAll('.typewriter');

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function startTypewriterAnimation() {
    elements.forEach(function(el) {
      if (isElementInViewport(el)) {
        el.classList.add('typewriter-active');
      }
    });
  }

  startTypewriterAnimation();

  document.addEventListener('scroll', function() {
    startTypewriterAnimation();
  });
});
