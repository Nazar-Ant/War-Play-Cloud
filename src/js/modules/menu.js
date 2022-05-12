function menu() {
  const menu = document.querySelector(".header__content");
  const btnOpenMenu = document.querySelector(".header__collapse");
  const btnCloseMenu = document.querySelector(".header__close");
  btnOpenMenu.addEventListener("click", () => {
    menu.classList.add("open");
    document.body.style.overflow = "hidden";
  });

  btnCloseMenu.addEventListener("click", () => {
    menu.classList.remove("open");
    document.body.removeAttribute("style");
  });
}

export default menu;
