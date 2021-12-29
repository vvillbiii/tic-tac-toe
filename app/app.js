const playerX = "X";
const playerO = "O";
let currentPlayer = playerX;

const gameBoard = document.querySelectorAll(".grid-row");
const gameContainer = document.querySelector(".game");
for (let board of gameBoard) {
  board.addEventListener("click", function () {
    board.innerText = currentPlayer;
    if (currentPlayer == playerO) {
      board.classList.add("playerO");
      // console.log("switch to X");
      currentPlayer = playerX;
    } else {
      playerTurn();
      board.classList.add("playerX");
    }
  });
}

/// push playerX choice to gameBoard
/// push playerO choice to gameBoard

// write conditional for player turn
const playerTurn = () => {
  if (currentPlayer === playerX) {
    currentPlayer = playerO;
  }
};

// if playerX presses x push x to gameBoard array to fill the spot. Then create a condition that says if gameBoard array indices have a  x, o then they can't be changed.

// Need three functions

// reset  game function
const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", resetGame);

function resetGame() {
  currentPlayer = playerX;
  for (let board of gameBoard) {
    board.innerText = "";
    board.classList.remove("playerX");
    board.classList.remove("playerO");
  }
}

///Select grid function

///player win function
