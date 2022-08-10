document.addEventListener("DOMContentLoaded", () => {
  const html = document.querySelector("html");
  const header = document.getElementById("shopify-section-layout-header");
  const hero = document.querySelector(".section-hero");
  const megaMenuParent = document.querySelector("[data-megamenu-parent]");

  megaMenuParent &&
    megaMenuParent.addEventListener("mouseover", (e) => {
      header.classList.add("megamenu-open");
    });

  header &&
    header.addEventListener("mouseleave", (e) => {
      header.classList.remove("megamenu-open");
    });

  ////// Search Form
  // document
  //   .querySelector("[data-action-search]")
  //   .addEventListener("click", (e) => {
  //     e.preventDefault();
  //     document.querySelector("[data-search-form]").classList.remove("hidden");
  //   });

  ///// Mobile Nav Menu
  // const navIcon = document.getElementById("nav-burger-icon");

  // const menuToggle = (icon) => {
  //   icon.addEventListener("click", function (e) {
  //     this.classList.toggle("open");
  //     html.classList.toggle("overflow-y-scroll");
  //     html.classList.toggle("overflow-hidden");
  //   });
  // };
  // menuToggle(navIcon);

  document.addEventListener("scroll", (e) => {
    let scrollPosition = window.scrollY;
    scrollPosition > 44
      ? html.classList.add("sticky")
      : html.classList.remove("sticky");
  });
});
