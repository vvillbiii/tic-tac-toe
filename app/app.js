const playerX = "X";
const playerO = "O";

const gameBoard = Array.from(document.querySelectorAll(".grid-row"));
// console.log(gameBoard);

/// push playerX choice to gameBoard

/// push playerO choice to gameBoard

// write conditional for player turn
const playerTurn = () => {
  // if (playerX choose x){
  // playerX go
  // } else {
  //  playerO go
  // }
};

// if playerX presses x push x to gameBoard array to fill the spot. Then create a condition that says if gameBoard array indices have a  x, o then they can't be changed.

function playX() {
  const textX = document.createElement("h2");
  const addMove = document.createTextNode("X");
  textX.appendChild(addMove);
  document.querySelector(".grid-row").appendChild(textX);
}

function playO() {
  const textO = document.createElement("h2");
  const addMove = document.createTextNode("O");
  textO.appendChild(addMove);
  document.querySelector(".grid-row").appendChild(textO);
  //   console.log("O");
}
//rest game event listener
const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", resetGame);

function resetGame() {
  console.log("reset game");
}

//when a player event trigger it should replace the "x" or 'o' string in my forEach loop.
// need to make player choice function that calls the player choice inside the forEach loop.

//forEach loop
gameBoard.forEach((element, index) => {
  if (index === 0) {
    element.addEventListener("click", () => {
      const textX = document.createElement("h2");
      const addMove = document.createTextNode("X");
      textX.appendChild(addMove);
      element.appendChild(textX);
    });
    gameBoard.splice(index, 1, "X");
  } else if (index === 1) {
    // console.log("o");
    element.addEventListener("click", () => {
      const textO = document.createElement("h2");
      const addMove = document.createTextNode("O");
      textO.appendChild(addMove);
      element.appendChild(textO);
    });
    gameBoard.splice(index, 1, "o");
  } else if (index === 2) {
    // console.log("x");
    element.addEventListener("click", () => {
      const textX = document.createElement("h2");
      const addMove = document.createTextNode("X");
      textX.appendChild(addMove);
      element.appendChild(textX);
    });
    gameBoard.splice(index, 1, "x");
  } else if (index === 3) {
    // console.log("o");
    element.addEventListener("click", () => {
      const textO = document.createElement("h2");
      const addMove = document.createTextNode("O");
      textO.appendChild(addMove);
      element.appendChild(textO);
    });
    gameBoard.splice(index, 1, "o");
  } else if (index === 4) {
    // console.log("x");
    element.addEventListener("click", () => {
      const textX = document.createElement("h2");
      const addMove = document.createTextNode("X");
      textX.appendChild(addMove);
      element.appendChild(textX);
    });
    gameBoard.splice(index, 1, "x");
  } else if (index === 5) {
    // console.log("o");
    element.addEventListener("click", () => {
      const textO = document.createElement("h2");
      const addMove = document.createTextNode("O");
      textO.appendChild(addMove);
      element.appendChild(textO);
    });
    gameBoard.splice(index, 1, "o");
  } else if (index === 6) {
    // console.log("x");
    element.addEventListener("click", () => {
      const textX = document.createElement("h2");
      const addMove = document.createTextNode("X");
      textX.appendChild(addMove);
      element.appendChild(textX);
    });
    gameBoard.splice(index, 1, "x");
  } else if (index === 7) {
    // console.log("o");
    element.addEventListener("click", () => {
      const textO = document.createElement("h2");
      const addMove = document.createTextNode("O");
      textO.appendChild(addMove);
      element.appendChild(textO);
    });
    gameBoard.splice(index, 1, "o");
  } else if (index === 8) {
    // console.log("x");
    element.addEventListener("click", () => {
      const textX = document.createElement("h2");
      const addMove = document.createTextNode("X");
      textX.appendChild(addMove);
      element.appendChild(textX);
    });
    gameBoard.splice(index, 1, "x");
  } else {
    // console.log("o");
    element.addEventListener("click", () => {
      const textO = document.createElement("h2");
      const addMove = document.createTextNode("O");
      textO.appendChild(addMove);
      element.appendChild(textO);
    });
    gameBoard.splice(index, 1, "o");
  }
});

// console.log(gameBoard);
