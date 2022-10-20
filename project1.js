//variables needed to run game before it starts
const board = document.querySelectorAll ('.board div')
const statusText = document.querySelector ("#messagedisplay")
const restartBtn = document.querySelector ("#resetbtn")
const redBtn = document.querySelector ("#redplayerbtn")
const blueBtn = document.querySelector ("#blueplayerbtn")
const winConditions = [
    [0, 7, 14, 21],
    [1, 8, 15, 22],
    [2, 9, 16, 23],
    [6, 13, 20, 27],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
    [14, 21, 28, 35],
    [3, 8, 13, 18],
    [4, 9, 14, 19],
    [5, 10, 15, 20],
    [9, 14, 19, 24],
    [10, 15, 20, 25],
    [11, 16, 21, 26],
    [15, 20, 25, 30],
    [16, 21, 26, 31],
    [17, 22, 27, 28],
    [0, 1, 2, 3],
    [6, 7, 8, 9],
    [12, 13, 14, 15],
    [18, 19, 20, 21],
    [24, 25, 26, 27],
    [30, 31, 32, 33],
    [1, 2, 3, 4],
    [7, 8, 9, 10],
    [13, 14, 15, 16],
    [19, 20, 21, 22],
    [25, 26, 27, 28],
    [31, 32, 33, 34],
    [2, 3, 4, 5],
    [8, 9, 10, 11],
    [14, 15, 16, 17],
    [20, 21, 22, 23],
    [26, 27, 28, 29],
    [32, 33, 34, 35],
    [0, 6, 12, 18],
    [1, 7, 13, 19],
    [2, 8, 14, 20],
    [3, 9, 15, 21],
    [4, 10, 16, 22],
    [5, 11, 17, 23],
    [6, 12, 18, 24],
    [7, 13, 19, 25],
    [8, 14, 20, 26],
    [9, 15, 21, 27],
    [10, 16, 22, 28],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    [13, 19, 25, 31],
    [14, 20, 26, 32],
    [15, 21, 27, 33],
    [16, 22, 28, 34],
    [17, 23, 29, 35]
]

//program needs to loop checking for win, tie conditions untill one is met and display message
function checkWin() {
    for (let y = 0; y < winConditions.length; y++) {
        const spot1 = board[winConditions[y][0]]
        const spot2 = board[winConditions[y][1]]
        const spot3 = board[winConditions[y][2]]
        const spot4 = board[winConditions[y][3]]
        if (
            spot1.classList.contains('red') &&
            spot2.classList.contains('red') &&
            spot3.classList.contains('red') &&
            spot4.classList.contains('red')
        )
        statusText.textContent = `Red Wins!!!`
        if (
            spot1.classList.contains('blue') &&
            spot2.classList.contains('blue') &&
            spot3.classList.contains('blue') &&
            spot4.classList.contains('blue')
        )
        statusText.textContent = `Blue Wins!!!`
    }
}

//need to wait for player to choose which color they are
let currentPlayer = ''

//event listener waits for player to choose either red or blue
redBtn.addEventListener('click', setRed)
function setRed(event) {
    currentPlayer = 'red';
    statusText.textContent = `${currentPlayer}'s turn`
}
blueBtn.addEventListener('click', setBlue)
function setBlue(event) {
    currentPlayer = "blue";
    statusText.textContent = `${currentPlayer}'s turn`
}

//start listiner to for grid and return which space player selected
//function to set up cursor on mouse click change cell color
for (let z = 0; z < board.length; z++) {
    board[z].onclick = () => {
            if (board[z + 6].classList.contains('full') &&!board[z].classList.contains('full')) {
                if (currentPlayer == 'red') {
                    board[z].classList.add('full')
                    board[z].classList.add('red')
                    currentPlayer = 'blue'
                    statusText.textContent = `${currentPlayer}'s turn`
                } else if (currentPlayer == 'blue') {
                    board[z].classList.add('full')
                    board[z].classList.add('blue')
                    currentPlayer = 'red'
                    statusText.textContent = `${currentPlayer}'s turn`
                }
            } else {statusText.textContent = 'Cant go here!'}
            checkWin()
        }
}

//reset button 
restartBtn.addEventListener('click', x)
function x(event) {
    location.reload();
    return false;
}