import "../scss/style.scss";
import "remixicon/fonts/remixicon.css";
import promoSlider from "./modules/promoSlider.js";
import titleTemplater from "./modules/titleTemplater.js";
import hideHeaderOnScrollDown from "./modules/hideHeaderOnScrollDown";
import menu from "./modules/menu";

window.addEventListener("DOMContentLoaded", () => {
  hideHeaderOnScrollDown();
  promoSlider();
  titleTemplater();
  menu();
});
