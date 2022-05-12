function modals() {
  const triggers = document.querySelectorAll("button[data-modal]");

  triggers.forEach((trigger) => {
    const modal = document.getElementById(trigger.dataset.modal);
    const close = modal.querySelector(".modal__close");

    console.log(modal, close);

    trigger.addEventListener("click", () => {
      modal.classList.add("open");
      document.body.style.overflow = "hidden";
    });

    close.addEventListener("click", () => {
      modal.classList.remove("open");
      document.body.removeAttribute("style");
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        modal.classList.remove("open");
        document.body.removeAttribute("style");
      }
    });
  });
}

export default modals;
