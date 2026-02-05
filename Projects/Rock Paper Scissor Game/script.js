let userScore = 0;
let botScore = 0;
let userScoreMsg = document.querySelector("#user-score");
let botScoreMsg = document.querySelector("#bot-score");
const choices = document.querySelectorAll(".choice");
let winnerMsg = document.querySelector("#msg");

let generateBotChoice = () => {
  const options = ["rock", "paper", "scissor"];
  let randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};
const showWinner = (userWin, userChoice, botChoice) => {
  if (userWin) {
    userScore++;
    userScoreMsg.innerText = userScore;
    winnerMsg.innerText = `You Won! Your ${userChoice} Beats ${botChoice}`;
    winnerMsg.classList.remove("lose");
    winnerMsg.classList.add("won");
  } else {
    botScore++;
    botScoreMsg.innerText = botScore;
    winnerMsg.innerText = `You lose! ${botChoice} Beats Your ${userChoice}`;
    winnerMsg.classList.remove("won");
    winnerMsg.classList.add("lose");
  }
  console.log(winnerMsg.classList.value);
};
const playGame = (userChoice) => {
  const botChoice = generateBotChoice();
  let userWin;
  if (userChoice == botChoice) {
    winnerMsg.innerText = "Match Tied!";
    winnerMsg.classList.remove("won", "lose");
  } else {
    if (userChoice == "rock") {
      userWin = botChoice == "paper" ? false : true;
    } else if (userChoice == "paper") {
      userWin = botChoice == "scissor" ? false : true;
    } else {
      userWin = botChoice == "rock" ? false : true;
    }
    showWinner(userWin, userChoice, botChoice);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
