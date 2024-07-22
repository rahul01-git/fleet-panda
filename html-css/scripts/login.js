import { validateEmail, validatePassword } from "./validation.js";

const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");

const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

function validateForm(e) {
  e.preventDefault();

  const isEmailValid = validateEmail(email.value, emailError);
  const isPasswordValid = validatePassword(password.value, passwordError);

  if (isEmailValid && isPasswordValid) {
    form.submit();
    alert(
      "data submitted succesfully !" +
        JSON.stringify({
          email: email.value,
          password: password.value,
        })
    );
    location.reload(true);
  } else {
    alert("Please solve validation errors first");
  }
}

email.addEventListener("keyup", () => validateEmail(email.value, emailError));
password.addEventListener("keyup", () =>
  validatePassword(password.value, passwordError)
);
form.addEventListener("submit", (e) => validateForm(e));
