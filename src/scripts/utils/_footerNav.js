// footer nav open & close transitions
document.addEventListener("DOMContentLoaded", () => {
  const footMenuItems = document.querySelectorAll(".main-footer__menu > h4");
  const mediaMobile = window.innerWidth < 768 ? true : false;

  if (mediaMobile) {
    const setHeight = (menu) => {
      const subMenu = menu.nextSibling;
      menu?.classList.toggle("open");

      subMenu?.style.maxHeight
        ? (subMenu.style.maxHeight = null)
        : (subMenu.style.maxHeight = subMenu.scrollHeight + "px");
    };

    setHeight(footMenuItems[0]);

    footMenuItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        setHeight(item);
      });
    });
  }
});
