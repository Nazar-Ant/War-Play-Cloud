function entranceModal() {
  const modal = document.getElementById("entrance");
  const submits = modal.querySelectorAll(".entrance__submit");
  const inputs = modal.querySelectorAll("input");

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      input.classList.remove("error");
    });
  });

  submits.forEach((submit) => {
    submit.addEventListener("click", (e) => {
      const form = modal.querySelector(".entrance__form.active");
      const email = form.querySelector('input[name="email"]');
      const password = form.querySelector('input[name="password"]');

      e.preventDefault();

      if (!/^\w+([\.-]?\w+)*@\w([\.-]?\w+)*(\.\w{2,8})+$/.test(email.value)) {
        email.classList.add("error");
        return;
      }

      if (!password.value.length) {
        password.classList.add("error");
        return;
      }

      modal.classList.remove("open");

      if (form.classList.contains("entrance__sign-up")) {
        document.getElementById("verify").classList.add("open");
        return;
      }

      document.getElementById("subscription").classList.add("open");
    });
  });
}

export default entranceModal;
