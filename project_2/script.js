function validateForm(event) {
  event.preventDefault(); // Prevent the form from submitting
  
  // Fetching form input values
  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  
  // Clearing previous error messages
  document.getElementById("fullNameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("phoneNumberError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("confirmPasswordError").textContent = "";
  
  // Validating Full Name (not empty)
  if (fullName.trim() === "") {
    document.getElementById("fullNameError").textContent = "Full Name is required";
    return;
  }
  
  // Validating Email ID (valid format)
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Invalid Email ID";
    return;
  }
  
  // Validating Phone Number (valid format)
  var phoneNumberRegex = /^\d{10}$/;
  if (!phoneNumberRegex.test(phoneNumber)) {
    document.getElementById("phoneNumberError").textContent = "Invalid Phone Number";
    return;
  }
  
  // Validating Password (at least 8 characters)
  if (password.length < 8) {
    document.getElementById("passwordError").textContent = "Password must be at least 8 characters long";
    return;
  }
  
  // Validating Confirm Password (matches Password)
  if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").textContent = "Passwords do not match";
    return;
  }
  
  // If all validations pass, you can submit the form or perform further actions here
  document.getElementById("registrationForm").submit();
}
