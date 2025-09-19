document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".testimonial-slide");
  const dots = document.querySelectorAll(".dot");
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.add("hidden", "opacity-0");
      slide.classList.remove("opacity-100");
      dots[i].classList.remove("active-dot");
    });

    slides[index].classList.remove("hidden");
    slides[index].classList.remove("opacity-0");
    slides[index].classList.add("opacity-100");
    dots[index].classList.add("active-dot");
  }

  // Auto slide every 3s
  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 3000);

  // Initial
  showSlide(current);
});
