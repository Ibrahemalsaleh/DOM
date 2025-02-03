
const form = document.getElementById('registrationForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const registerButton = document.getElementById('registerButton');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

function validateForm() {
  let isValid = true;

  if (usernameInput.value.trim() === "") {
    usernameError.textContent = "Username is required.";
    isValid = false;
  } else {
    usernameError.textContent = "";
  }

  if (passwordInput.value.trim() === "") {
    passwordError.textContent = "Password is required.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  if (confirmPasswordInput.value.trim() === "") {
    confirmPasswordError.textContent = "Confirm Password is required.";
    isValid = false;
  } else if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordError.textContent = "Passwords do not match.";
    isValid = false;
  } else {
    confirmPasswordError.textContent = "";
  }

  registerButton.disabled = !isValid;
  return isValid;
}


usernameInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);
confirmPasswordInput.addEventListener('input', validateForm);

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from actually submitting

  if (validateForm()) {
    alert("Registration successful!");
    form.reset(); // Clear the form fields after successful registration
    registerButton.disabled = true; // Disable button after submit
  }
});



