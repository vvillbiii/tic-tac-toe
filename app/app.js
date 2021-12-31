const playerX = "X";
const playerO = "O";
let currentPlayer = playerX;

const headingTwo = document.querySelector(".turn");
const gameBoard = document.querySelectorAll(".grid-row");
const gameArray = Array.from(document.querySelectorAll(".grid-row"));

for (let board of gameBoard) {
  board.addEventListener("click", playMove);
}

function playMove() {
  this.innerText = currentPlayer;
  checkWinner();
  this.style.pointerEvents = "none";
  if (currentPlayer === playerO) {
    this.classList.add("playerO");
    currentPlayer = playerX;
    headingTwo.innerText = `Play ${currentPlayer}`;
  } else {
    playerTurn();
    this.classList.add("playerX");
  }
}

// write conditional for currentPlayer turn
const playerTurn = () => {
  if (currentPlayer === playerX) {
    currentPlayer = playerO;
    headingTwo.innerText = `Play ${currentPlayer}`;
  }
};

// reset  game function
const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", resetGame);

function resetGame() {
  currentPlayer = playerX;
  headingTwo.innerText = `Play X`;
  for (let board of gameBoard) {
    board.innerText = "";
    board.classList.remove("playerX");
    board.classList.remove("playerO");
    board.style.pointerEvents = "auto";
  }
}

// currentPlayer win function
function checkWinner() {
  let msg = `${currentPlayer} won! Reset to Play again`;
  headingTwo.innerText = msg;
  if (
    currentPlayer === gameArray[0].innerText &&
    currentPlayer === gameArray[1].innerText &&
    currentPlayer === gameArray[2].innerText
  ) {
    headingTwo.innerText = msg;
    for (let board of gameBoard) {
      board.style.pointerEvents = "none";
    }
    currentPlayer = null;
    return true;
  }
  if (
    currentPlayer === gameArray[3].innerText &&
    currentPlayer === gameArray[4].innerText &&
    currentPlayer === gameArray[5].innerText
  ) {
    headingTwo.innerText = msg;
    for (let board of gameBoard) {
      board.style.pointerEvents = "none";
    }
    currentPlayer = null;
    return true;
  }
  if (
    currentPlayer === gameArray[6].innerText &&
    currentPlayer === gameArray[7].innerText &&
    currentPlayer === gameArray[8].innerText
  ) {
    headingTwo.innerText = msg;
    for (let board of gameBoard) {
      board.style.pointerEvents = "none";
    }
    currentPlayer = null;
    return true;
  }
  if (
    currentPlayer === gameArray[0].innerText &&
    currentPlayer === gameArray[3].innerText &&
    currentPlayer === gameArray[6].innerText
  ) {
    headingTwo.innerText = msg;
    for (let board of gameBoard) {
      board.style.pointerEvents = "none";
    }
    currentPlayer = null;
    return true;
  }
  if (
    currentPlayer === gameArray[1].innerText &&
    currentPlayer === gameArray[4].innerText &&
    currentPlayer === gameArray[7].innerText
  ) {
    headingTwo.innerText = msg;
    for (let board of gameBoard) {
      board.style.pointerEvents = "none";
    }
    currentPlayer = null;
    return true;
  }
  if (
    currentPlayer === gameArray[2].innerText &&
    currentPlayer === gameArray[5].innerText &&
    currentPlayer === gameArray[8].innerText
  ) {
    headingTwo.innerText = msg;
    for (let board of gameBoard) {
      board.style.pointerEvents = "none";
    }
    currentPlayer = null;
    return true;
  }
  if (
    currentPlayer === gameArray[0].innerText &&
    currentPlayer === gameArray[4].innerText &&
    currentPlayer === gameArray[8].innerText
  ) {
    headingTwo.innerText = msg;
    for (let board of gameBoard) {
      board.style.pointerEvents = "none";
    }
    currentPlayer = null;
    return true;
  }
  if (
    currentPlayer === gameArray[6].innerText &&
    currentPlayer === gameArray[4].innerText &&
    currentPlayer === gameArray[2].innerText
  ) {
    headingTwo.innerText = msg;
    for (let board of gameBoard) {
      board.style.pointerEvents = "none";
    }
    currentPlayer = null;
    return true;
  }
  if (
    (gameArray[0].innerText === "X" || gameArray[0].innerText === "O") &&
    (gameArray[1].innerText === "X" || gameArray[1].innerText === "O") &&
    (gameArray[2].innerText === "X" || gameArray[2].innerText === "O") &&
    (gameArray[3].innerText === "X" || gameArray[3].innerText === "O") &&
    (gameArray[4].innerText === "X" || gameArray[4].innerText === "O") &&
    (gameArray[5].innerText === "X" || gameArray[5].innerText === "O") &&
    (gameArray[6].innerText === "X" || gameArray[6].innerText === "O") &&
    (gameArray[7].innerText === "X" || gameArray[7].innerText === "O") &&
    (gameArray[8].innerText === "X" || gameArray[8].innerText === "O")
  ) {
    headingTwo.innerText = `No Winner. Play again.`;
    for (let board of gameBoard) {
      board.style.pointerEvents = "none";
    }
    currentPlayer = null;
    return true;
  }
}
