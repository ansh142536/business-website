// script.js
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
  
    // Login form validation
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();
  
      if (username === '' || password === '') {
        alert('Please enter a username and password.');
      } else {
        // Perform login logic here
        alert('Login successful!');
      }
    });
  
    // Signup form validation
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
  
      if (name === '' || email === '' || password === '') {
        alert('Please fill out all fields.');
      } else {
        // Perform signup logic here
        alert('Sign up successful!');
      }
    });
  });