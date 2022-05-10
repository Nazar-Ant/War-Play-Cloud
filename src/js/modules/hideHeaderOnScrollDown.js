function hideHeaderOnScrollDown() {
  const header = document.querySelector("header");
  let scrollPrev = 0;

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;

    if (scrolled && scrolled > scrollPrev) {
      header.classList.add("hide");
    } else {
      header.classList.remove("hide");
    }

    scrollPrev = scrolled;
  });
}

export default hideHeaderOnScrollDown;
