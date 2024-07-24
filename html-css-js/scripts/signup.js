import { requestApi } from "./request.js";
import {
  validateEmail,
  validateFullName,
  validatePassword,
  validateConfirmPassword,
} from "./validation.js";
import { handleAuthentication, setupEventListeners } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const isloggedIn = handleAuthentication();
  if (isloggedIn) {
    window.location.href = '/app/posts.html'
  }

  const form = document.getElementById("signupForm");
  const fullName = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const confirmPasswordError = document.getElementById(
    "confirm-password-error"
  );

  async function validateForm(e) {
    e.preventDefault();

    const isFullNameValid = validateFullName(fullName.value, nameError);
    const isEmailValid = validateEmail(email.value, emailError);
    const isPasswordValid = validatePassword(password.value, passwordError);
    const isConfirmPasswordValid = validateConfirmPassword(
      password.value,
      confirmPassword.value,
      confirmPasswordError
    );

    if (
      isFullNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid
    ) {
      const bodyData = { email: email.value, password: password.value };
      const data = await requestApi(
        "https://reqres.in/api/register",
        "POST",
        bodyData
      );
      if (data.error) alert(data.error);
      else {
        alert(
          JSON.stringify({ message: "Signup successful", token: data.token })
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
      element: password,
      event: "keyup",
      handler: () => validatePassword(password.value, passwordError),
    },
    {
      element: confirmPassword,
      event: "keyup",
      handler: () =>
        validateConfirmPassword(
          password.value,
          confirmPassword.value,
          confirmPasswordError
        ),
    },
    { element: form, event: "submit", handler: validateForm },
  ]);
});
