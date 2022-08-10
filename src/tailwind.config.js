/**
 * Tailwind CSS configuration file
 *
 * docs: https://tailwindcss.com/docs/configuration
 * default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const path = require("path");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        "abril-display": ['"abril-display"', "serif"],
        "filson-soft": ['"filson-soft"', "sans-serif"],
      },
      colors: {
        "light-black": "#111111",
        orange: "#f97a1c",
        "dark-gray": "#5B5B5B",
        "lighter-gray": "#8f8f8f",
        cart: "#cccc33",
        "badge-bg": "#D4E353",
        "badge-text": "#326730",
      },
      letterSpacing: {
        1: "1px",
        "1/2": "0.5px",
      },
      width: {
        "search-form": "250px",
        btn: "175px",
      },
      height: {
        btn: "45px",
        "header-mob": "60px",
        "blob-image-1": "500px",
        "blob-image-2": "470px",
      },
      spacing: {
        "header-height-md": "128px",
        "header-height-mob": "60px",
        "container-side-match-sm": "calc(50% - 304px)",
        "container-side-match-md": "calc(50% - 368px)",
        "container-side-match-lg": "16px",
        "container-side-match-xl": "calc(50% - 624px)",
        "container-side-match-2xl": "calc(50% - 752px)",
        underline: "6px",
      },
      fontSize: {
        "hero-title-md": "90px",
        "hero-title-mob": "50px",
        "hero-subtitle-md": "22px",
        "section-title-md": "40px",
        "testimonial-title-md": "30px",
      },
      maxWidth: {
        ticker: "140px",
      },
      lineHeight: {
        "section-title": "46px",
        "hero-title": "52px",
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [],
  content: [
    path.resolve(__dirname, "**/*.{js,vue}"),
    path.resolve(__dirname, "../shopify/**/*.liquid"),
  ],
};
