function subscriptionModal() {
  const modal = document.getElementById("subscription");
  const buttons = modal.querySelectorAll(".plan__choose");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      modal.classList.remove("open");

      document.getElementById("system").classList.add("open");
    });
  });
}

export default subscriptionModal;
