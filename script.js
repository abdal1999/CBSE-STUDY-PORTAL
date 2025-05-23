const carousel = document.querySelector('.testimonial-carousel');
let scrollAmount = 0;
const scrollStep = 280; // width of one testimonial + gap
const delay = 1000; // 1 seconds
let intervalId;

function autoScroll() {
  scrollAmount += scrollStep;
  if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
    scrollAmount = 0; // reset scroll to start
  }
  carousel.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
}

function startAutoScroll() {
  intervalId = setInterval(autoScroll, delay);
}

function stopAutoScroll() {
  clearInterval(intervalId);
}

// Start auto scroll when page loads
startAutoScroll();

// Pause on hover
carousel.addEventListener('mouseenter', stopAutoScroll);
carousel.addEventListener('mouseleave', startAutoScroll);
