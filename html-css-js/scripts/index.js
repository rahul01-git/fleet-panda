const isLoggedIn = localStorage.length;
if (isLoggedIn) document.getElementById("logout").style.display = "block";
else {
  document.getElementById("login").style.display = "block";
  document.getElementById("signup").style.display = "block";
}

import { validateEmail, validateFullName } from "./validation.js";

const form = document.getElementById("myForm");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const phoneError = document.getElementById("phone-error");

function validatePhone() {
  if (!phone.value.match(/^\+?\d{1,3}[- ]?\d{8,10}$/)) {
    phoneError.textContent = "Please enter a valid phone";
    return false;
  } else {
    phoneError.textContent = "";
    return true;
  }
}

function validateForm(event) {
  event.preventDefault();

  const isFullNameValid = validateFullName(fullName.value, nameError);
  const isEmailValid = validateEmail(email.value, emailError);
  const isPhoneValid = validatePhone();

  if (isFullNameValid && isEmailValid && isPhoneValid) {
    form.submit();
    alert("data submitted succesfully !");
    location.reload(true);
  } else {
    alert("Please solve validation errors first");
  }
}

fullName.addEventListener("keyup", () =>
  validateFullName(fullName.value, nameError)
);
email.addEventListener("keyup", () => validateEmail(email.value, emailError));
phone.addEventListener("keyup", validatePhone);
form.addEventListener("submit", (e) => validateForm(e));
