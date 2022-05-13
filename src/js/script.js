import "../scss/style.scss";

import promoSlider from "./modules/promoSlider.js";
import titleTemplater from "./modules/titleTemplater.js";
import hideHeaderOnScrollDown from "./modules/hideHeaderOnScrollDown";
import menu from "./modules/menu";
import modals from "./modules/modals";
import entranceTabs from "./modules/entranceTabs";
import entranceModal from "./modules/entranceModal";
import verifyModal from "./modules/verifyModal";
import subscriptionModal from "./modules/subscriptionModal";
import systemModal from "./modules/systemModal";
import scrolling from "./modules/scrolling";

window.addEventListener("DOMContentLoaded", () => {
  hideHeaderOnScrollDown();
  promoSlider();
  titleTemplater();
  menu();
  entranceTabs();
  modals();
  entranceModal();
  verifyModal();
  subscriptionModal();
  systemModal();
  scrolling();
});
