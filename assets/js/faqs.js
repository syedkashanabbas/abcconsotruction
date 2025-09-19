document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");

    question.addEventListener("click", () => {
      const isOpen = !answer.classList.contains("hidden");

      // Close all answers first
      faqItems.forEach((i) => {
        i.querySelector(".faq-answer").classList.add("hidden");
        i.querySelector(".faq-icon").textContent = "+";
      });

      // Toggle current
      if (!isOpen) {
        answer.classList.remove("hidden");
        icon.textContent = "-";
      }
    });
  });
});
