function entranceTabs() {
  const tabsButton = document.querySelectorAll(".entrance__tab");
  const tabsContent = document.querySelectorAll(".entrance__form");

  tabsButton[0].classList.add("active");
  tabsContent[0].classList.add("active");

  tabsButton.forEach((button, i) => {
    button.addEventListener("click", () => {
      tabsButton[i === 0 ? 1 : 0].classList.remove("active");

      button.classList.add("active");

      tabsContent[i === 0 ? 1 : 0].classList.remove("active");

      tabsContent[i].classList.add("active");
    });
  });
}

export default entranceTabs;
