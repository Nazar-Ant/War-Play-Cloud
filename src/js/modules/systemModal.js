function systemModal() {
  const modal = document.getElementById("system");
  const buttons = modal.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      modal.classList.remove("open");
      document.body.removeAttribute("style");
    });
  });
}

export default systemModal;
