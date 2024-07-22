const isLoggedIn = localStorage.length;
if (isLoggedIn) window.location.href = "/app/posts.html";

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

async function validateForm(e) {
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
    const bodyData = { email: email.value, password: password.value };
    const response = await fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    });
    const data = await response.json();
    if (data.error) alert(data.error);
    else {
      alert(JSON.stringify({ message: "Signup succesful", token: data.token }));
      localStorage.setItem(email.value, data.token);
      window.location.href = "/app/posts.html";
    }
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
