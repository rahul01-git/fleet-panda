import {
  validateEmail,
  validateFullName,
  validatePhone,
} from "./validation.js";
import { handleAuthentication, setupEventListeners } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const isloggedIn = handleAuthentication();
  if (isloggedIn) {
    document.getElementById("logout").style.display = "block";
    document.getElementById("blog").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "none";
  } else {
    document.getElementById("login").style.display = "block";
    document.getElementById("signup").style.display = "block";
    document.getElementById("blog").style.display = "none";
    document.getElementById("logout").style.display = "none";
  }

  const form = document.getElementById("myForm");
  const fullName = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const phoneError = document.getElementById("phone-error");

  function validateForm(event) {
    event.preventDefault();

    const isFullNameValid = validateFullName(fullName.value, nameError);
    const isEmailValid = validateEmail(email.value, emailError);
    const isPhoneValid = validatePhone(phone.value, phoneError);

    if (isFullNameValid && isEmailValid && isPhoneValid) {
      form.submit();
      alert("Data submitted successfully!");
      location.reload(true);
    } else {
      alert("Please solve validation errors first");
    }
  }

  setupEventListeners([
    {
      element: fullName,
      event: "keyup",
      handler: () => validateFullName(fullName.value, nameError),
    },
    {
      element: email,
      event: "keyup",
      handler: () => validateEmail(email.value, emailError),
    },
    {
      element: phone,
      event: "keyup",
      handler: () => validatePhone(phone.value, phoneError),
    },
    { element: form, event: "submit", handler: validateForm },
  ]);
});

