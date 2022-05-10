function titleTemplater() {
  const titles = document.querySelectorAll("div[data-title]");

  titles.forEach((title) => {
    title.classList.add("title");

    title.innerHTML = `<div class="title__header"><div class="title__line"></div><h3 class="title__pretext">${title.dataset.titlePretext}</h3></div><h2 class="title__text">${title.dataset.titleText}</h2>`;

    title.removeAttribute("data-title");
    title.removeAttribute("data-title-pretext");
    title.removeAttribute("data-title-text");
  });
}

export default titleTemplater;
