// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    var form = document.querySelector("form");
  
    // Add event listener for form submission
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Validate the form inputs
      var nameInput = document.querySelector("input[name='Name']");
      var addressInput = document.querySelector("input[name='Address']");
      var mobileInput = document.querySelector("input[name='Mobile No.']");
      var emailInput = document.querySelector("input[name='email']");
      var usernameInput = document.querySelector("input[name='username']");
      var passwordInput = document.querySelector("input[name='password']");
  
      // Regular expressions for validation
      var nameRegex = /^[a-zA-Z\s]+$/; // Only allows alphabets and spaces
      var mobileRegex = /^\d{10}$/; // Only allows 10-digit numbers
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Validates email format
  
      // Check if inputs are empty or invalid
      if (!nameInput.value.match(nameRegex)) {
        alert("Please enter a valid name.");
        nameInput.focus();
        return;
      }
  
      if (addressInput.value.trim() === "") {
        alert("Please enter your address.");
        addressInput.focus();
        return;
      }
  
      if (!mobileInput.value.match(mobileRegex)) {
        alert("Please enter a valid 10-digit mobile number.");
        mobileInput.focus();
        return;
      }
  
      if (!emailInput.value.match(emailRegex)) {
        alert("Please enter a valid email address.");
        emailInput.focus();
        return;
      }
  
      if (usernameInput.value.trim() === "") {
        alert("Please enter a username.");
        usernameInput.focus();
        return;
      }
  
      if (passwordInput.value.trim() === "") {
        alert("Please enter a password.");
        passwordInput.focus();
        return;
      }
  
      // If all inputs are valid, submit the form
      alert("Form submitted successfully!");
      form.reset(); // Reset the form
    });
  });
  