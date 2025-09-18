const slider = document.getElementById("story-slider");
const cards = slider.querySelectorAll(".story-card");
let index = 2; // start at center

function updateCards() {
  cards.forEach((card, i) => {
    card.classList.remove("scale-125", "scale-90", "opacity-100", "opacity-50", "z-20", "z-10");

    if (i === index) {
      card.classList.add("scale-125", "opacity-100", "z-20"); // center big
    } else {
      card.classList.add("scale-90", "opacity-50", "z-10"); // side smaller
    }
  });

  // spacing calc updated for wider cards
  slider.style.transform = `translateX(calc(50% - ${index * 26}rem))`;
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
