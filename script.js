//your JS code here. If required.
let player1 = "";
let player2 = "";
let currentPlayer = "X";
let gameActive = true;

const winningCombos = [
  ["1","2","3"], ["4","5","6"], ["7","8","9"],
  ["1","4","7"], ["2","5","8"], ["3","6","9"],
  ["1","5","9"], ["3","5","7"]
];

document.getElementById("submit").addEventListener("click", function () {
  player1 = document.getElementById("player-1").value;
  player2 = document.getElementById("player-2").value;

  if (!player1 || !player2) return;

  document.getElementById("player-form").style.display = "none";
  document.getElementById("game").style.display = "block";

  document.querySelector(".message").textContent = `${player1}, you're up`;
});

const cells = document.querySelectorAll(".cell");

cells.forEach(cell => {
  cell.addEventListener("click", function () {
    if (!gameActive || cell.textContent !== "") return;

    cell.textContent = currentPlayer;

    if (checkWinner()) {
      let winner = currentPlayer === "X" ? player1 : player2;
      document.querySelector(".message").textContent = `${winner} congratulations you won!`;
      gameActive = false;
      return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";

    let nextPlayer = currentPlayer === "X" ? player1 : player2;
    document.querySelector(".message").textContent = `${nextPlayer}, you're up`;
  });
});

function checkWinner() {
  for (let combo of winningCombos) {
    let [a, b, c] = combo;

    if (
      document.getElementById(a).textContent &&
      document.getElementById(a).textContent === document.getElementById(b).textContent &&
      document.getElementById(a).textContent === document.getElementById(c).textContent
    ) {
      return true;
    }
  }
  return false;
}