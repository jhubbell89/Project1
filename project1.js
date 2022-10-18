//variables needed to run game before it starts
const cell1 = document.querySelector ("#cell1")
const cell2 = document.querySelector ("#cell2")
const cell3 = document.querySelector ("#cell3")
const cell4 = document.querySelector ("#cell4")
const cell5 = document.querySelector ("#cell5")
const cell6 = document.querySelector ("#cell6")
const cell7 = document.querySelector ("#cell7")
const cell8 = document.querySelector ("#cell8")
const cell9 = document.querySelector ("#cell9")
const cell10 = document.querySelector ("#cell10")
const cell11 = document.querySelector ("#cell11")
const cell12 = document.querySelector ("#cell12")
const cell13 = document.querySelector ("#cell13")
const cell14 = document.querySelector ("#cell14")
const cell15 = document.querySelector ("#cell15")
const cell16 = document.querySelector ("#cell16")
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
let currentPlayer = ''

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

//start listiner to for grid and return which space player selected
//function to set up cursor on mouse click change cell color

cell1.addEventListener('click', a)
function a() {
    if (currentPlayer == 'red') {
        document.getElementById('cell1').style.backgroundColor = "red"
    } else { currentPlayer == "blue"
        document.getElementById('cell1').style.backgroundColor = "blue"
    }
        
    console.log('cell1');
    console.log(currentPlayer)
    
}

cell2.addEventListener('click', b)
function b(event) {
    console.log('cell2')
}
cell3.addEventListener('click', c)
function c(event) {
    console.log('cell3')
}
cell4.addEventListener('click', d)
function d(event) {
    console.log('cell4')
}
cell5.addEventListener('click', e)
function e(event) {
    console.log('cell5')
}
cell6.addEventListener('click', f)
function f(event) {
}
cell7.addEventListener('click', g)
function g(event) {
}
cell8.addEventListener('click', h)
function h(event) {
}
cell9.addEventListener('click', i)
function i(event) {
}
cell10.addEventListener('click', j)
function j(event) {
}
cell11.addEventListener('click', k)
function k(event) {
}
cell12.addEventListener('click', l)
function l(event) {
}
cell13.addEventListener('click', m)
function m(event) {
}
cell14.addEventListener('click', n)
function n(event) {
}
cell15.addEventListener('click', o)
function o(event) {
}
cell16.addEventListener('click', p)
function p(event) {
}

//function for setting backgorund fill

//use current player to chenge space to current players color
//rule for clicking on filled squares
//program needs to loop checking for win, tie conditions untill one is met
//display message when win / tie condition met
//reset button 