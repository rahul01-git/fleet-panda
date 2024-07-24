export function validateFullName(name, nameError) {
  const regex = /^[a-zA-Z]+ [a-zA-Z]+$/;
  if (!regex.test(name)) {
    nameError.textContent = "Please enter a valid full name";
    return false;
  } else {
    nameError.textContent = "";
    return true;
  }
}

export function validateEmail(email, emailError) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
  if (!regex.test(email)) {
    emailError.textContent = "Please enter a valid email";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

export function validatePhone(phone, phoneError) {
  const regex = /^\+977-98[0-9]{8}$/;
  if (!regex.test(phone)) {
    phoneError.textContent = "Please enter a valid Nepali phone number (format: +977-98XXXXXXXX)";
    return false;
  } else {
    phoneError.textContent = "";
    return true;
  }
}

export function validatePassword(password, passwordError) {
  if (password.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters long";
    return false;
  } else {
    passwordError.textContent = "";
    return true;
  }
}

export function validateConfirmPassword(password, confirmPassword, confirmPasswordError) {
  if (password !== confirmPassword) {
    confirmPasswordError.textContent = "Passwords do not match";
    return false;
  } else {
    confirmPasswordError.textContent = "";
    return true;
  }
}
