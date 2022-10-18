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
        document.getElementById('cell1').style.backgroundColor = 'red'
    } else { 
        document.getElementById('cell1').style.backgroundColor = 'blue'
    }      
}

cell2.addEventListener('click', b)
function b(event) {
    if (currentPlayer == 'red') {
        document.getElementById('cell2').style.backgroundColor = "red"
    } else { 
        document.getElementById('cell2').style.backgroundColor = "blue"
    }      
}
cell3.addEventListener('click', c)
function c(event) {
    if (currentPlayer == 'red') {
        document.getElementById('cell3').style.backgroundColor = "red"
    } else { 
        document.getElementById('cell3').style.backgroundColor = "blue"
    }      
}
cell4.addEventListener('click', d)
function d(event) {
    if (currentPlayer == 'red') {
        document.getElementById('cell4').style.backgroundColor = "red"
    } else { 
        document.getElementById('cell4').style.backgroundColor = "blue"
    }      
}
cell5.addEventListener('click', e)
function e(event) {
    if (currentPlayer == 'red') {
        document.getElementById('cell5').style.backgroundColor = "red"
    } else { 
        document.getElementById('cell5').style.backgroundColor = "blue"
    }      
}
cell6.addEventListener('click', f)
function f(event) {
    if (currentPlayer == 'red') {
        document.getElementById('cell6').style.backgroundColor = "red"
    } else { 
        document.getElementById('cell6').style.backgroundColor = "blue"
    }      
}
cell7.addEventListener('click', g)
function g(event) {
    if (currentPlayer == 'red') {
        document.getElementById('cell7').style.backgroundColor = "red"
    } else { 
        document.getElementById('cell7').style.backgroundColor = "blue"
    }      
}
cell8.addEventListener('click', h)
function h(event) {
    if (currentPlayer == 'red') {
        document.getElementById('cell8').style.backgroundColor = "red"
    } else { 
        document.getElementById('cell8').style.backgroundColor = "blue"
    }      
}
cell9.addEventListener('click', i)
function i(event) {
    if (currentPlayer == 'red') {
        document.getElementById('cell9').style.backgroundColor = "red"
    } else { 
        document.getElementById('cell9').style.backgroundColor = "blue"
    }      
}
cell10.addEventListener('click', j)
function j(event) {
    if (currentPlayer == 'red') {
        document.getElementById('cell10').style.backgroundColor = "red"
    } else { 
        document.getElementById('cell10').style.backgroundColor = "blue"
    }      
}
cell11.addEventListener('click', k)
function k(event) {
    if (currentPlayer == 'red') {
        document.getElementById('cell11').style.backgroundColor = "red"
    } else { 
        document.getElementById('cell11').style.backgroundColor = "blue"
    }      
}
cell12.addEventListener('click', l)
function l(event) {
    if (currentPlayer == 'red') {
        document.getElementById('cell12').style.backgroundColor = "red"
    } else { 
        document.getElementById('cell12').style.backgroundColor = "blue"
    }      
}
cell13.addEventListener('click', m)
function m(event) {
    if (currentPlayer == 'red') {
        document.getElementById('cell13').style.backgroundColor = "red"
    } else { 
        document.getElementById('cell13').style.backgroundColor = "blue"
    }      
}
cell14.addEventListener('click', n)
function n(event) {
    if (currentPlayer == 'red') {
        document.getElementById('cell14').style.backgroundColor = "red"
    } else { 
        document.getElementById('cell14').style.backgroundColor = "blue"
    }      
}
cell15.addEventListener('click', o)
function o(event) {
    if (currentPlayer == 'red') {
        document.getElementById('cell15').style.backgroundColor = "red"
    } else { 
        document.getElementById('cell15').style.backgroundColor = "blue"
    }      
}
cell16.addEventListener('click', p)
function p(event) {
    if (currentPlayer == 'red') {
        document.getElementById('cell16').style.backgroundColor = "red"
    } else { 
        document.getElementById('cell16').style.backgroundColor = "blue"
    }      
}

//function for setting backgorund fill

//use current player to chenge space to current players color
//rule for clicking on filled squares
//program needs to loop checking for win, tie conditions untill one is met
//display message when win / tie condition met
//reset button 