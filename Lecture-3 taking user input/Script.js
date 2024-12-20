// Select elements
const inputField = document.getElementById('userInput');
const submitBtn = document.getElementById('submitBtn');
const output = document.getElementById('output');

// Add event listener to the button
submitBtn.addEventListener('click', function () {
  // Get the value from the input field
  const userName = inputField.value.trim();

  // Check if the input is not empty
  if (userName) {
    output.textContent = `Hello, ${userName}! Welcome to our website.`;
    output.style.color = "green";
  } else {
    output.textContent = 'Please enter your name!';
    output.style.color = "red";
  }
});
