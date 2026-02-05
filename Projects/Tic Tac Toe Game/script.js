let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector(".reset-button");
let newGameButton = document.querySelector(".new-game");
let winnerMsg = document.querySelector(".msg");
let msgContainer = document.querySelector(".msg-container");
let turnO = false;
let moveCount = 0;

const disableButton = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableButton = () => {
  for (let box of boxes) {
    box.disabled = false;
  }
};
const showWinner = (winner) => {
  msgContainer.classList.remove("hide");
  winnerMsg.innerText = `Congratulations, Winner is ${winner}`;
  disableButton();
};
let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val && pos1Val === pos2Val && pos2Val === pos3Val) {
      showWinner(pos1Val);
      return;
    }
  }
  if (moveCount === 9) {
    msgContainer.classList.remove("hide");
    winnerMsg.innerText = `It's a Draw`;
  }
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    moveCount++;
    if (turnO) {
      box.innerText = "O";
      box.classList.add("O");
      box.classList.remove("X");
      turnO = false;
    } else {
      box.innerText = "X";
      box.classList.add("X");
      box.classList.remove("O");
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
const resetGame = () => {
  moveCount = 0;
  turnO = false;
  enableButton();
  msgContainer.classList.add("hide");
  for (let box of boxes) {
    box.innerText = "";
    box.classList.remove("X", "O");
  }
};
newGameButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);
