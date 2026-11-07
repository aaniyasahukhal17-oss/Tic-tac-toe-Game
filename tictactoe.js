let playerO = "O" ;
let playerX = "X" ;
let currPlayer = playerO;

//                0    1    2    3    4    5    6    7    8 
let gameboard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
let gamecells;
 
 let winningConditions = [
    [0,1,2], 
    [3,4,5], 
    [6,7,8], 
    [0,3,6], 
    [1,4,7], 
    [2,5,8], 
    [0,4,8], 
    [2,4,6]
];

let gameover = false;
let restartGameButton;

window.onload = function () {
  gamecells = document.getElementsByClassName("game-cell");
      for (let cell of gamecells) {
        cell.addEventListener("click", placeCell);
    }
    restartGameButton = document.getElementById("game-restart-button");
    restartGameButton.addEventListener("click", restartGame);
}

function placeCell() {
     if (gameover){
        return;
     }

    const index = parseInt(this.getAttribute("data-cell-index"));
    if ( gameboard[index] != " ") {
         return ;
    }
    
    this.innerText = currPlayer;
  gameboard[index] = currPlayer;

  //change players
    currPlayer = (currPlayer == playerO) ? playerX : playerO;

   
    //check winner
    checkWinner();
}

function checkWinner() {
   for (let winCondition of winningConditions) {
       let a = gameboard[winCondition[0]];
       let b = gameboard[winCondition[1]];
       let c = gameboard[winCondition[2]];

       if(a == b && b == c && a != " ") {
          for (let i = 0; i < gameboard.length; i++) {
              if (winCondition.includes(i)) {
                  gamecells[i].classList.add("winning-game-cell");
              }
          }
          gameover = true;
          return;
        }
   }
 }

 function restartGame(){
    gameover = false;
    gameboard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    for (let cell of gamecells) {
        cell.innerText = " ";
        cell.classList.remove("winning-game-cell")
    }
 }