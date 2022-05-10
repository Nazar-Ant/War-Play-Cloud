function promoSlider() {
  const slider = document.querySelector(".promo");
  let item = 0;

  setInterval(() => {
    item++;

    if (item === 5) {
      item = 1;
    }

    slider.style.backgroundImage = `url("../img/promo/slide_${item}.jpg")`;
  }, 8000);
}

export default promoSlider;
