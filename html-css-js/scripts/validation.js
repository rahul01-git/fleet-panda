export function validateFullName(inputValue, errorElement) {
  return validateField(
    inputValue,
    errorElement,
    /^[a-zA-Z\s]+$/,
    "Please enter a valid name (Alphabets only)"
  );
}

export function validateEmail(inputValue, errorElement) {
  return validateField(
    inputValue,
    errorElement,
    /^[a-zA-Z0-9._+]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/,
    "Please enter a valid email format"
  );
}

export function validatePassword(inputValue, errorElement) {
  return validateField(
    inputValue,
    errorElement,
    /^\w{4,12}$/,
    "Invalid password length (min 4, max 12)"
  );
}

function validateField(inputValue, errorElement, regex, errorMessage) {
  if (inputValue.trim() === "") {
    errorElement.textContent = "";
    return true;
  }

  if (!inputValue.match(regex)) {
    errorElement.textContent = errorMessage;
    return false;
  } else {
    errorElement.textContent = "";
    return true;
  }
}
