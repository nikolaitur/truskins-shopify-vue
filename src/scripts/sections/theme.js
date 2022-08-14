import {
  heroSlider,
  announcementSlider,
  productsSlider,
  testimonialSlider,
  tickerSlider,
  productGallery,
} from "../utils";
import lozad from "lozad";

const observer = lozad(".lozad", {
  loaded: (el) => {
    const closestSlider = el.parentNode.closest("[data-slider]");
    if (closestSlider) {
      const sliderType = closestSlider.dataset.slider;
      const allSlides = closestSlider.querySelectorAll(".lozad");
      const hasImages = !![...allSlides].find((node) =>
        node.querySelector("img")
      );

      if (hasImages) {
        console.log("hasImage");
        const allImagesLoaded =
          [...allSlides].filter((node) => node.querySelector("img")).length >=
          allSlides.length;
        allSlides.forEach((el) => {
          observer.triggerLoad(el);
        });
        if (allImagesLoaded) {
          switch (sliderType) {
            case "hero":
              heroSlider(closestSlider);
              break;
            case "announcement":
              announcementSlider(closestSlider);
              break;
            case "products":
              productsSlider(closestSlider);
              break;
            case "ticker":
              tickerSlider(closestSlider);
              break;
            case "thumbs": {
              const dataThumb = closestSlider.dataset.sliderThumbs;
              const slidesThumb = document.querySelectorAll(
                `div[data-slider-thumbs="${dataThumb}"]`
              );
              const elementThumbs = [...slidesThumb].find(
                (el) => el.dataset.thumbs === "thumbs"
              );
              const elementMain = [...slidesThumb].find(
                (el) => el.dataset.thumbs === "main"
              );
              if (dataThumb === "gallery")
                productGallery({ elementThumbs, elementMain });

              break;
            }
            default:
              break;
          }
        }
      } else {
        console.log(sliderType);
        switch (sliderType) {
          case "announcement":
            announcementSlider(closestSlider);
            break;
          case "testimonial":
            testimonialSlider(closestSlider);
            break;
          default:
            break;
        }
      }
    }
  },
});

setTimeout(() => {
  observer.observe();
}, 10);
