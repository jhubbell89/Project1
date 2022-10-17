//variables needed to run game before it starts
const cells = document.querySelectorAll ("grid")
const statusText = document.querySelector ("#messagedisplay")
const restartBtn = document.querySelector ("#resetbtn")
const redBtn = document.querySelector ("#redplayerbtn")
const blueBtn = document.querySelector ("#blueplayerbtn")
const winConditions = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [0, 5, 10, 15],
    [3, 6, 9, 12]
]

//need to wait for player to choose which color they are
let currentPlayer = 

//event listener waits for player to choose either red or blue
redBtn.addEventListener('click', setRed)
function setRed(event) {
    console.log('red');
    currentPlayer = 'red';
    console.log(currentPlayer);
    statusText.textContent = `${currentPlayer}'s turn`
}
blueBtn.addEventListener('click', setBlue)
function setBlue(event) {
    console.log('blue');
    currentPlayer = "blue";
    console.log(currentPlayer);
    statusText.textContent = `${currentPlayer}'s turn`
}
console.log(currentPlayer)
//function to determine current player set by event handler
let playerSelector = function() {
    if  currentPlayer = 'red';
        return redFill
    } else  {
        currentPlayer = 'blue';
        return bluefill
    }
}




//start listiner to for grid and return which space player selected


//use current player to chenge space to current players color


//program needs to loop checking for win, tie conditions untill one is met
//display message when win / tie condition met


// reset button 

