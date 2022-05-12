function verifyModal() {
  const modal = document.getElementById("verify");
  const btnContinue = modal.querySelector(".verify__continue");

  btnContinue.addEventListener("click", () => {
    modal.classList.remove("open");

    document.getElementById("subscription").classList.add("open");
  });
}

export default verifyModal;
