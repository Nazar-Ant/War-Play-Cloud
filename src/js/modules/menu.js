function menu() {
  const menu = document.querySelector(".header__content");
  const btnOpenMenu = document.querySelector(".header__collapse");
  const btnCloseMenu = document.querySelector(".header__close");
  const overlay = document.querySelector(".overlay");

  btnOpenMenu.addEventListener("click", () => {
    menu.classList.add("open");
    overlay.classList.add("visible");
  });

  btnCloseMenu.addEventListener("click", () => {
    menu.classList.remove("open");
    overlay.classList.remove("visible");
  });

  overlay.addEventListener("click", () => {
    menu.classList.remove("open");
    overlay.classList.remove("visible");
  });
}

export default menu;
