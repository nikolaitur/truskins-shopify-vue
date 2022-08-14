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
    });
  }
};

export const testimonialSlider = (element) => {
  if (!element.classList.contains("swiper-initialized")) {
    const swiper = new Swiper(element, {
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        768: {},
      },
    });
  }
};

export const tickerSlider = (element) => {
  if (!element.classList.contains("swiper-initialized")) {
    const swiper = new Swiper(element, {
      slidesPerView: 3,
      spaceBetween: 28,
      loop: true,
      breakpoints: {
        768: {
          slidesPerView: 8,
        },
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

export const productGallery = ({ elementThumbs, elementMain }) => {
  if (!elementMain.classList.contains("swiper-initialized")) {
    const swiperThumbs = new Swiper(elementThumbs, {
      slidesPerView: "auto",
      spaceBetween: 20,
      direction: "vertical",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    const swiperMain = new Swiper(elementMain, {
      slidesPerView: "auto",
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
      },

      thumbs: {
        swiper: swiperThumbs,
      },
    });
  }
};
