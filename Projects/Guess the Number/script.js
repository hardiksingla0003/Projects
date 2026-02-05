let randomNumber = parseInt(Math.random() * 100 + 1);
const userInput = document.querySelector("#input-field");
const submit = document.querySelector("#submit-field");
const result = document.querySelector(".result");
const guessSlot = document.querySelector(".guesses");
const lowOrHigh = document.querySelector(".lowOrHigh");
const remainingAttempt = document.querySelector(".remaining-attempts");
const newGameButton = document.querySelector(".new-game");

let numOfGuesses = 0;
let playGame = true;

newGameButton.classList.add("hide");

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
    if (numOfGuesses == 10) {
      playGame = false;
      displayMessage(`All attempts used. Random Number was ${randomNumber}`);
      startOver();
    }
  });
}
function validateGuess(guess) {
  if (isNaN(guess) || guess > 100 || guess < 1) {
    alert("Please Enter a Valid Number");
  } else {
    checkGuess(guess);
    updateNextTurn(guess);
  }
}

function updateNextTurn(guess) {
  userInput.value = "";
  guessSlot.innerHTML += " " + guess;
  numOfGuesses++;
  remainingAttempt.innerHTML = 10 - numOfGuesses;
}

function startOver() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  submit.setAttribute("disabled", "");
  newGame();
}

function checkGuess(guess) {
  if (guess == randomNumber) {
    displayMessage("You Guessed it Right!");
    startOver();
  } else if (guess > randomNumber) {
    displayMessage("Your guess is Toooo High");
  } else {
    displayMessage("Your guess is Toooo Low");
  }
}
function displayMessage(message) {
  lowOrHigh.innerHTML = `<h3>${message}</h3>`;
}

function newGame() {
  newGameButton.classList.remove("hide");
  newGameButton.addEventListener("click", () => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuesses = [];
    guessSlot.innerHTML = "";
    remainingAttempt.innerHTML = 10;
    numOfGuesses = 0;
    userInput.removeAttribute("disabled", "");
    submit.removeAttribute("disabled", "");
    lowOrHigh.innerHTML = "";
    newGameButton.classList.add("hide");
    playGame = true;
  });
}
