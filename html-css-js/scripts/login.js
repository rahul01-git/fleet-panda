const isLoggedIn = localStorage.length;
if (isLoggedIn) window.location.href = "/app/posts.html";
else {
  document.getElementById("blog").style.display = "none";
}

import { validateEmail, validatePassword } from "./validation.js";

const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");

const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

async function validateForm(e) {
  e.preventDefault();

  const isEmailValid = validateEmail(email.value, emailError);
  const isPasswordValid = validatePassword(password.value, passwordError);

  if (isEmailValid && isPasswordValid) {
    const bodyData = { email: email.value, password: password.value };
    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    });
    const data = await response.json();
    if (data.error) alert(data.error);
    else {
      alert(JSON.stringify({ message: "Login succesful", token: data.token }));
      localStorage.setItem(email.value, data.token);
      window.location.href = "/app/posts.html";
    }
  } else {
    alert("Please solve validation errors first");
  }
}

email.addEventListener("keyup", () => validateEmail(email.value, emailError));
password.addEventListener("keyup", () =>
  validatePassword(password.value, passwordError)
);
form.addEventListener("submit", (e) => validateForm(e));
