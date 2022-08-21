//waits for DOM load
document.addEventListener("DOMContentLoaded", () => {
  // accordions
  document.querySelectorAll("[data-accordion-header]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();

      const accordion = el.dataset.accordionHeader;

      const itemsAccordion = document.querySelectorAll(
        `[data-accordion-content]`
      );
      itemsAccordion.forEach((item) => {
        const dataAccordion = item.dataset.accordionContent;
        if (dataAccordion === accordion) {
          if (!item.classList.contains("show-accordion")) {
            item.classList.add("show-accordion");
            return;
          }
        }

        item.classList.remove("show-accordion");
      });
    });
  });
});
