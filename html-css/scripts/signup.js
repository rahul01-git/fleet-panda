import {
  validateEmail,
  validateFullName,
  validatePassword,
} from "./validation.js";

const form = document.getElementById("signupForm");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("confirm-password-error");

function validateConfirmPassword() {
  if (password.value !== confirmPassword.value) {
    confirmPasswordError.textContent = "Passwords doesn't match !";
    return false;
  } else {
    confirmPasswordError.textContent = "";
    return true;
  }
}

function validateForm(e) {
  e.preventDefault();

  const isFullNameValid = validateFullName(fullName.value, nameError);
  const isEmailValid = validateEmail(email.value, emailError);
  const isPasswordValid = validatePassword(password.value, passwordError);
  const isConfirmPasswordValid = validateConfirmPassword();

  if (
    isFullNameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid
  ) {
    form.submit();
    alert(
      "data submitted succesfully !" +
        JSON.stringify({
          name: fullName.value,
          email: email.value,
          password: password.value,
        })
    );
    location.reload(true);
  } else {
    alert("Please solve validation errors first");
  }
}

fullName.addEventListener("keyup", () =>
  validateFullName(fullName.value, nameError)
);
email.addEventListener("keyup", () => validateEmail(email.value, emailError));
password.addEventListener("keyup", () =>
  validatePassword(password.value, passwordError)
);
confirmPassword.addEventListener("keyup", validateConfirmPassword);
form.addEventListener("submit", (e) => validateForm(e));
