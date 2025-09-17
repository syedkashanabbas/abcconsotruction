document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // reset all
      tabs.forEach((t) => t.classList.remove("active"));
      contents.forEach((c) => {
        c.classList.remove("active");
        setTimeout(() => c.classList.add("hidden"), 300);
      });

      // activate clicked
      tab.classList.add("active");
      const target = tab.getAttribute("data-tab");
      const activeContent = document.querySelector(
        `.tab-content:nth-of-type(${[...tabs].indexOf(tab) + 1})`
      );

      activeContent.classList.remove("hidden");
      setTimeout(() => activeContent.classList.add("active"), 50);
    });
  });
});
