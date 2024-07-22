const form = document.getElementById("signupForm");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("confirm-password-error");

function validateFullName() {
  if (!fullName.value.match(/^[a-zA-Z\s]+$/)) {
    nameError.textContent = "Please enter a valid name (Alphabets only)";
    return false;
  } else {
    nameError.textContent = "";
    return true;
  }
}

function validateEmail() {
  if (!email.value.match(/^[a-zA-Z0-9._+]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/)) {
    emailError.textContent = "Please enter a valid email format";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

function validatePassword() {
  if (!password.value.match(/^\w{4,12}$/)) {
    passwordError.textContent = "Invalid password length (min 4, max 12)";
    return false;
  } else {
    passwordError.textContent = "";
    return true;
  }
}

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

  const isFullNameValid = validateFullName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
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

fullName.addEventListener("keyup", validateFullName);
email.addEventListener("keyup", validateEmail);
password.addEventListener("keyup", validatePassword);
confirmPassword.addEventListener("keyup", validateConfirmPassword);
form.addEventListener("submit", (e) => validateForm(e));
