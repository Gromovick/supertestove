document.querySelectorAll(".slider-hash-button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const closestSlide = btn.closest(".slider-item");
    closestSlide
      .querySelectorAll(".slider-hash-button")
      .forEach((btn) => {
        if (btn.classList.contains("slider-hash-button--active")) {
          btn.classList.remove("slider-hash-button--active");
        }
      });
    closestSlide
      .querySelectorAll(".slider-item-card")
      .forEach((card) => {
        if (card.classList.contains("slider-item-card--active")) {
          card.classList.remove("slider-item-card--active");
        }
      });
    btn.classList.add("slider-hash-button--active");
    const hash = btn.getAttribute("data-hash");
    const card = closestSlide.querySelector(`[data-card="${hash}"]`);
    card.classList.add("slider-item-card--active");
  });
});


document.addEventListener("DOMContentLoaded", () => {
  var swiper = new Swiper(".speakers .mySwiper", {
    navigation: {
      nextEl: ".speakers .speakers__slider-navigation-next",
      prevEl: ".speakers .speakers__slider-navigation-prev",
    },
    slidesPerView: 1,
    spaceBetween: 20,
  });
})

