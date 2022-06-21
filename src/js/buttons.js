let mainInfoReadMore = document.querySelector(".mainInfo__readMore");
let brandsSwiperReadMore = document.querySelector(".brands-swiper__readMore");
let acceptProductsSwiperReadMore = document.querySelector(".accept-products-swiper__readMore");
let menuBtns = document.querySelectorAll(".menuBtn");
let images = document.querySelectorAll(".hidden");

mainInfoReadMore.onclick = function () {
  let visibileText = document.getElementById("visibilText");
  mainInfoReadMore.classList.toggle("readMore_rotate");

  if (visibileText.classList.contains("mainInfo__text_hidden")) {
    visibilText.classList.remove("mainInfo__text_hidden");
    mainInfoReadMore.innerHTML = "Скрыть";
  } else {
    visibilText.classList.add("mainInfo__text_hidden");
    mainInfoReadMore.innerHTML = "Читать далее";
  }
}

brandsSwiperReadMore.onclick = function () {
  let brandsContainer = document.querySelector(".brands-wrapper");

  brandsSwiperReadMore.classList.toggle("readMore_rotate");
  brandsContainer.classList.toggle("brands-wrapper_height");

  if (brandsContainer.classList.contains("brands-wrapper_height")) {
    brandsSwiperReadMore.innerHTML = "Скрыть";
  } else {
    brandsSwiperReadMore.innerHTML = "Показать все";
  }
}

acceptProductsSwiperReadMore.onclick = function () {
  let brandsContainer = document.querySelector(".products-wrapper");

  acceptProductsSwiperReadMore.classList.toggle("readMore_rotate");
  brandsContainer.classList.toggle("products-wrapper_height");

  if (brandsContainer.classList.contains("products-wrapper_height")) {
    acceptProductsSwiperReadMore.innerHTML = "Скрыть";
  } else {
    acceptProductsSwiperReadMore.innerHTML = "Показать все";
  }
}

for (let i = 0; i < menuBtns.length; i++) {
  let menuBtn = menuBtns[i];
  let image = images[i];

  menuBtn.addEventListener("focus", () => {
    image.classList.remove("hidden");
  })

  menuBtn.addEventListener("blur", () => {
    image.classList.add("hidden");
  })
}
