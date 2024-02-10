const cellElements = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const winConditions = [
    [0,1,2]
    [3,4,5]
    [6,7,8]
    [0,4,8]
    [2,4,6]
    [0,3,6]
    [2,5,8]
];
let options = ["","","","","","","","",""];
let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame (){
    cell.forEach(cell => cell.addEventListener("click",cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = "batman";
};

function cellClicked(){}
function updateCell(){}
function restartGame(){}
function changePlayer(){}
function checkWinner(){}
function updateCell(){}
