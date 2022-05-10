import "../scss/style.scss";
import promoSlider from "./modules/promoSlider.js";
import titleTemplater from "./modules/titleTemplater.js";

window.addEventListener("DOMContentLoaded", () => {
  titleTemplater();
  promoSlider();
});
