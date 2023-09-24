// Get the quote element.
const quoteElement = document.querySelector('.quote');

// Get the input element.
const inputElement = document.querySelector('.input');

// Get the timer element.
const timerElement = document.querySelector('.timer');

// Get the results element.
const resultsElement = document.querySelector('.results');

// Get the start button element.
const startButtonElement = document.querySelector('.start');

// Start the timer.
let timer = 60;
const timerInterval = setInterval(() => {
  timer--;
  timerElement.textContent = `Time remaining: ${timer} seconds`;

  if (timer === 0) {
    clearInterval(timerInterval);
    calculateResults();
  }
}, 1000);

// Start the test when the start button is clicked.
startButtonElement.addEventListener('click', () => {
  inputElement.focus();
});

// Calculate the results when the user finishes typing.
inputElement.addEventListener('keyup', () => {
  if (inputElement.value === quoteElement.textContent) {
    calculateResults();
  }
});

// Calculate the results of the test.
function calculateResults() {
  // Calculate the words per minute.
  const wordsPerMinute = inputElement.value.split(' ').length / timer * 60;

  // Calculate the accuracy.
  const accuracy = 100 - (inputElement.value.length - quoteElement.textContent.length) / quoteElement.textContent.length * 100;

  // Display the results.
  resultsElement.textContent = `Words per minute: ${wordsPerMinute.toFixed(2)}\nAccuracy: ${accuracy.toFixed(2)}%`;
}
