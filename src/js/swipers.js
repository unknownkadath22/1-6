let mqMin = matchMedia("(min-width: 768px)");
let mqMax = matchMedia("(max-width: 767px)");

let brandsSwiper = new Swiper(".brands-container", {
  slidesPerView: "auto",
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

mqMax.addEventListener("change", (e) => {
  if (e.matches) {
    brandsSwiper = new Swiper(".brands-container", {
      slidesPerView: "auto",
      spaceBetween: 16,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else {
    brandsSwiper.destroy();
  }
});

window.addEventListener("load", () => {
  if (mqMin.matches) {
    brandsSwiper.destroy();
  }
});

let acceptProductsSwiper = new Swiper(".products-container", {
  slidesPerView: "auto",
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

mqMax.addEventListener("change", (e) => {
  if (e.matches) {
    acceptProductsSwiper = new Swiper(".products-container", {
      slidesPerView: "auto",
      spaceBetween: 16,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else {
    acceptProductsSwiper.destroy();
  }
});

window.addEventListener("load", () => {
  if (mqMin.matches) {
    acceptProductsSwiper.destroy();
  }
});

let priceSwiper = new Swiper(".price-container", {
  slidesPerView: "auto",
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

mqMax.addEventListener("change", (e) => {
  if (e.matches) {
    priceSwiper = new Swiper(".price-container", {
      slidesPerView: "auto",
      spaceBetween: 16,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else {
    priceSwiper.destroy();
  }
});

window.addEventListener("load", () => {
  if (mqMin.matches) {
    priceSwiper.destroy();
  }
});
