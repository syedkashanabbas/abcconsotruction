const slider = document.getElementById("story-slider");
const cards = slider.querySelectorAll(".story-card");
let index = 2; // start at center

function updateCards() {
  cards.forEach((card, i) => {
    card.classList.remove("scale-100", "opacity-100", "z-20", "scale-90", "opacity-50", "z-10");

    if (i === index) {
      card.classList.add("scale-125", "opacity-100", "z-20"); // center big
    } else {
      card.classList.add("scale-90", "opacity-50", "z-10"); // sides small
    }
  });

  slider.style.transform = `translateX(calc(50% - ${index * 22}rem))`;
}

document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % cards.length;
  updateCards();
});

document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + cards.length) % cards.length;
  updateCards();
});

updateCards();
