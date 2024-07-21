const form = document.getElementById("myForm");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
  
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const phoneError = document.getElementById("phone-error");

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

  const isFullNameValid = validateFullName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();

  if (isFullNameValid && isEmailValid && isPhoneValid) {
    form.submit();
    alert("data submitted succesfully !");
    location.reload(true)
  } else {
    alert("Please solve validation errors first");
  }
}

fullName.addEventListener("keyup", validateFullName);
email.addEventListener("keyup", validateEmail);
phone.addEventListener("keyup", validatePhone);
