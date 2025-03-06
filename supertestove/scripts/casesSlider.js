
document.addEventListener("DOMContentLoaded", () => {
    var swiper = new Swiper(".cases .mySwiper", {
        navigation: {
            nextEl: ".cases .slider-navigation-next",
            prevEl: ".cases .slider-navigation-prev",
        },
        slidesPerView: 1,
        spaceBetween: 20,
    });
})