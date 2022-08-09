document.addEventListener("DOMContentLoaded", () => {
  const html = document.querySelector("html");
  const header = document.getElementById("shopify-section-layout-header");
  const hero = document.querySelector(".section-hero");

  ////// Search Form
  // document
  //   .querySelector("[data-action-search]")
  //   .addEventListener("click", (e) => {
  //     e.preventDefault();
  //     document.querySelector("[data-search-form]").classList.remove("hidden");
  //   });

  // header &&
  //   header.addEventListener("mouseleave", (e) => {
  //     document.querySelector("[data-search-form]").classList.add("hidden");
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

  // document.addEventListener("scroll", (e) => {
  //   let scrollPosition = window.scrollY;
  //   if (hero) {
  //     scrollPosition + 90 > hero.scrollHeight
  //       ? header.classList.add("scrolled")
  //       : header.classList.remove("scrolled");
  //   } else {
  //     console.log("there");
  //     header.classList.remove("scrolled");
  //   }
  // });
});
