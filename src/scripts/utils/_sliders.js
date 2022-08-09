import Swiper, {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  Thumbs,
  EffectFade,
} from "swiper";
import "swiper/css/bundle";

Swiper.use([Navigation, Pagination, Scrollbar, Autoplay, Thumbs, EffectFade]);

export const heroSlider = (element) => {
  if (!element.classList.contains("swiper-initialized")) {
    const swiper = new Swiper(element, {
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {},
      },
    });
  }
};

export const productsSlider = (element) => {
  if (!element.classList.contains("swiper-initialized")) {
    const swiper = new Swiper(element, {
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {},
      },
    });
  }
};

export const announcementSlider = (element) => {
  if (!element.classList.contains("swiper-initialized")) {
    const swiper = new Swiper(element, {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 3000,
      },
    });
  }
};

export const iconSlider = (element) => {
  if (!element.classList.contains("swiper-initialized")) {
    const swiper = new Swiper(element, {
      slidesPerView: "auto",
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
      },
      breakpoints: {
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
          grabCursor: false,
          allowTouchMove: false,
        },
      },
    });
  }
};

export const testimonialSlider = (element) => {
  if (!element.classList.contains("swiper-initialized")) {
    const swiper = new Swiper(element, {
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
      breakpoints: {
        768: {},
      },
    });
  }
};
