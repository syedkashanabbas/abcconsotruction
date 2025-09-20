// testimonial.js
(function () {
  function init(containerSel) {
    const root = typeof containerSel === "string" ? document.querySelector(containerSel) : containerSel;
    if (!root) return;

    const slides = Array.from(root.querySelectorAll(".qt-slide"));
    const prev = root.querySelector("[data-qt-prev]");
    const next = root.querySelector("[data-qt-next]");
    let dotsWrap = root.querySelector("[data-qt-dots]");
    if (!slides.length || !prev || !next || !dotsWrap) return;

    // build dots from slide count
    dotsWrap.innerHTML = "";
    slides.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.className = "qtDot w-3 h-3 bg-gray-300 rounded-full inline-block cursor-pointer";
      dot.addEventListener("click", () => { current = i; update(); });
      dotsWrap.appendChild(dot);
    });

    const dots = Array.from(dotsWrap.querySelectorAll(".qtDot"));
    let current = 0;

    function update() {
      slides.forEach((s, i) => s.classList.toggle("hidden", i !== current));
      dots.forEach((d, i) => {
        d.classList.toggle("bg-black", i === current);
        d.classList.toggle("bg-gray-300", i !== current);
      });
    }

    prev.addEventListener("click", () => { current = (current - 1 + slides.length) % slides.length; update(); });
    next.addEventListener("click", () => { current = (current + 1) % slides.length; update(); });

    update();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => init("#qt-testimonials"));
  } else {
    init("#qt-testimonials");
  }
})();
