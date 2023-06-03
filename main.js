document.addEventListener("DOMContentLoaded", function () {
  const firstName = document.querySelector("#first-name");
  const lastName = document.querySelector("#last-name");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const btnSubmit = document.querySelector("input[type=submit]");
  const formulario = document.querySelector("form");
  const alertaFN = document.querySelector(".f-n");
  const alertaLN = document.querySelector(".l-n");
  const alertaEmail = document.querySelector(".e-m");
  const alertaPass = document.querySelector(".pass");

  firstName.addEventListener("blur", (e) => {
    if (e.target.value === "") {
      e.target.classList.add("error");
      alertaFN.classList.add("active");
      alertaFN.classList.remove("inactive");
      e.target.setAttribute("placeholder", "");
    } else {
      e.target.classList.remove("error");
      alertaFN.classList.add("inactive");
      alertaFN.classList.remove("active");
    }
  });

  lastName.addEventListener("blur", (e) => {
    if (e.target.value === "") {
      e.target.classList.add("error");
      alertaLN.classList.add("active");
      alertaLN.classList.remove("inactive");
      e.target.setAttribute("placeholder", "");
    } else {
      e.target.classList.remove("error");
      alertaLN.classList.remove("active");
      alertaLN.classList.add("inactive");
    }
  });

  email.addEventListener("blur", (e) => {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resutado = regex.test(e.target.value);
    if (resutado != true) {
      e.target.classList.add("error-email");
      e.target.setAttribute("placeholder", "email@example/com");
      alertaEmail.classList.add("active");
      alertaEmail.classList.remove("inactive");
    } else {
      e.target.classList.remove("error-email");
      alertaEmail.classList.remove("active");
      alertaEmail.classList.add("inactive");
    }
  });
  password.addEventListener("blur", (e) => {
    if (e.target.value === "") {
      e.target.classList.add("error");
      e.target.setAttribute("placeholder", "");
      alertaPass.classList.add("active");
      alertaPass.classList.remove("inactive");
    } else {
      e.target.classList.remove("error");
      alertaPass.classList.add("inactive");
      alertaPass.classList.remove("active");
    }
  });
  btnSubmit.addEventListener("click", function (e) {
    e.preventDefault();

    console.log(firstName.parentElement);
  });
});
