//variables needed to run game before it starts
const board = document.querySelectorAll ('.board div')
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
    [3, 6, 9, 12],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
    [8, 9, 10, 11],
    [9, 10, 11, 12],
    [14, 15, 16, 17],
    [15, 16, 17, 18],
    [20, 21, 22, 23],
    [21, 22, 23, 24],
    [25, 26, 27, 28],
    
]

//program needs to loop checking for win, tie conditions untill one is met and display message
function checkWin() {
    for (let z = 0; z < winConditions.length; z++) {
        const spot1 = board[winConditions[z][0]]
        const spot2 = board[winConditions[z][1]]
        const spot3 = board[winConditions[z][2]]
        const spot4 = board[winConditions[z][3]]

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
            if (board[z+7].classList.contains('full') &&!board[z].classList.contains('full')) {
                if (currentplayer == 'red') {
                    board[z].classList.add('full')
                    board[z].classslist.add('red')
                    currentplayer = 'blue'
                    statusText.textContent = `${currentPlayer}'s turn`
                } else if (currentPlayer == 'blue') {
                    board[z].classList.add('full')
                    board[z].classList.add('full')
                    currentPlayer = 'red'
                    statusText.textContent = `${currentPlayer}'s turn`
                }
            } else {statusText.textContent = 'Cant go here!'}
            checkWin()
        }
}

//reset button 
restartBtn.addEventListener('click', y)
function y(event) {
    location.reload();
    return false;
}