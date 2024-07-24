import { requestApi } from "./request.js";
import { validateEmail, validatePassword } from "./validation.js";
import { handleAuthentication, setupEventListeners } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const isloggedIn = handleAuthentication();
  if (isloggedIn) {
    window.location.href = '/app/posts.html'
  }

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
      const data = await requestApi(
        "https://reqres.in/api/login",
        "POST",
        bodyData
      );
      if (data.error) alert(data.error);
      else {
        alert(
          JSON.stringify({ message: "Login successful", token: data.token })
        );
        localStorage.setItem(email.value, data.token);
        window.location.href = "/app/posts.html";
      }
    } else {
      alert("Please solve validation errors first");
    }
  }

  setupEventListeners([
    {
      element: email,
      event: "keyup",
      handler: () => validateEmail(email.value, emailError),
    },
    {
      element: password,
      event: "keyup",
      handler: () => validatePassword(password.value, passwordError),
    },
    { element: form, event: "submit", handler: validateForm },
  ]);
});
