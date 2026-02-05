let scoreStr = localStorage.getItem("score");
let score;
resetScore(scoreStr);
function resetScore(scoreStr) {
  score = scoreStr
    ? JSON.parse(scoreStr)
    : {
        won: 0,
        lost: 0,
        tie: 0,
      };
  score.displayScore = function () {
    return `Won : ${score.won}
  Lost : ${score.lost}
  Tie : ${score.tie}`;
  };
  showResult();
}

function generateComputerChoice() {
  let randomNumber = Math.random() * 3;
  let computerChoice;
  if (randomNumber > 0 && randomNumber <= 1) {
    computerChoice = "Bat";
  } else if (randomNumber > 1 && randomNumber <= 2) {
    computerChoice = "Ball";
  } else {
    computerChoice = "Stump";
  }
  return computerChoice;
}
function matchResult(userMove, computerChoice) {
  if (userMove == "Bat") {
    if (computerChoice == "Bat") {
      score.tie++;
      return "Match Tie";
    } else if (computerChoice == "Ball") {
      score.won++;
      return "You Won!";
    } else {
      score.lost++;
      return "Computer Won!";
    }
  } else if (userMove == "Ball") {
    if (computerChoice == "Bat") {
      score.lost++;
      return "Computer Won!";
    } else if (computerChoice == "Ball") {
      score.tie++;
      return "Match Tie";
    } else {
      score.won++;
      return "You Won!";
    }
  } else {
    if (computerChoice == "Bat") {
      score.won++;
      return "You Won!";
    } else if (computerChoice == "Ball") {
      score.lost++;
      return "Computer Won!";
    } else {
      score.tie++;
      return "Match Tie";
    }
  }
}
function showResult(userMove, computerChoice, result) {

  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector("#user_choice").innerText = userMove ? `Your Choice is ${userMove}` : '';
  document.querySelector("#computer_choice").innerText = computerChoice ? `Computer Choice is ${computerChoice}` : '';
  document.querySelector("#result").innerText = result || '';
  document.querySelector("#score").innerText = score.displayScore();
}
