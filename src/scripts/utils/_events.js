document.addEventListener("DOMContentLoaded", () => {
  const html = document.querySelector("html");
  const header = document.getElementById("shopify-section-layout-header");
  const mobileNav = document.querySelector(".mobile-nav");
  const megaMenuParent = document.querySelector("[data-megamenu-parent]");
  const mobileBottomNav = document.querySelector(".mobile-bottom-nav");
  const announcementBar = document.getElementById(
    "shopify-section-layout-announcement-bar"
  );
  const announcementBarClose = document.querySelector(".announcement-close");

  megaMenuParent &&
    megaMenuParent.addEventListener("mouseover", (e) => {
      header.classList.add("megamenu-open");
    });

  header &&
    header.addEventListener("mouseleave", (e) => {
      header.classList.remove("megamenu-open");
    });

  /// Mobile Navigation

  const navExpand = [].slice.call(document.querySelectorAll(".nav-expand"));

  navExpand.forEach((item) => {
    if (item.querySelector(".nav-link")) {
      item.querySelector(".nav-link").addEventListener("click", (e) => {
        e.preventDefault();
        item.classList.add("active");

        mobileNav.classList.remove("bg-mobile-bottom-nav");
        mobileNav.classList.add("bg-white");

        mobileBottomNav.classList.add("hidden");
      });
    }
    if (item.querySelector(".nav-back-link")) {
      item.querySelector(".nav-back-link").addEventListener("click", () => {
        item.classList.remove("active");
        if (!document.querySelector(".nav-expand.active")) {
          mobileBottomNav.classList.remove("hidden");
          mobileNav.classList.add("bg-mobile-bottom-nav");
          mobileNav.classList.remove("bg-white");
        }
      });
    }
  });

  /// Mobile Nav Menu
  const navIcon = document.getElementById("nav-burger-icon");

  const menuToggle = (icon) => {
    icon.addEventListener("click", function (e) {
      this.classList.toggle("open");
      html.classList.toggle("overflow-y-scroll");
      html.classList.toggle("overflow-hidden");

      let scrollPosition = window.scrollY;

      this.classList.contains("open") || scrollPosition > 44
        ? html.classList.add("sticky")
        : html.classList.remove("sticky");

      this.classList.contains("open") || scrollPosition > 44
        ? header.classList.add("white-header")
        : header.classList.remove("white-header");

      mobileNav.classList.toggle("active");
    });
  };
  menuToggle(navIcon);

  document.addEventListener("scroll", (e) => {
    let scrollPosition = window.scrollY;
    scrollPosition > 44
      ? html.classList.add("sticky")
      : html.classList.remove("sticky");

    if (html.classList.contains("index")) {
      scrollPosition > 44
        ? header.classList.add("white-header")
        : header.classList.remove("white-header");
    }
  });

  announcementBarClose &&
    announcementBarClose.addEventListener("click", (e) => {
      announcementBar.classList.add("hidden");
    });

  document.addEventListener("click", (e) => {
    const selectedBlock = e.target.closest(".rc_block__type");
    if (selectedBlock) {
      if (selectedBlock.classList.contains("rc_block__type__autodeliver")) {
        document.querySelector("[data-atc-price]").innerHTML =
          document.querySelector("#rc_price_autodeliver").innerHTML;
      } else {
        document.querySelector("[data-atc-price]").innerHTML =
          document.querySelector("#rc_price_onetime").innerHTML;
      }
    }
  });
});
