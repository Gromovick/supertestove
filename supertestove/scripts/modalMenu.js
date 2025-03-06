burgerButton.addEventListener("click", (e) => {
  modalMenu.classList.toggle("modal__menu-wrapper--active");
  burgerButton.classList.toggle("header__burger--active");
});

closeButton.addEventListener("click", () => {
  modalMenu.classList.remove("modal__menu-wrapper--active");
  burgerButton.classList.toggle("header__burger--active");
});
