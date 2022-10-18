//variables needed to run game before it starts
const board = document.querySelectorAll ('.board div')
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

cell1.addEventListener('click', a)
function a() {
    if (currentPlayer == '') {
        document.getElementById('cell1').style.backgroundColor = 'yellow';
       
    } else if  (currentPlayer == 'red') {
        document.getElementById('cell1').style.backgroundColor = 'red'

        cell1.classList.add('red')
        currentPlayer = 'blue'
        statusText.textContent = `${currentPlayer}'s turn`
    } else { currentPlayer == 'blue'
        document.getElementById('cell1').style.backgroundColor = 'blue'

        cell1.classList.add('blue')
        currentPlayer = 'red'
        statusText.textContent = `${currentPlayer}'s turn`
    }
    checkWin()
}
cell2.addEventListener('click', b)
function b(event) {
    if (currentPlayer == '') {
        document.getElementById('cell2').style.backgroundColor = 'yellow'
    } else if  (currentPlayer == 'red') {
        document.getElementById('cell2').style.backgroundColor = 'red'

        cell2.classList.add('red')
        currentPlayer = 'blue'
        statusText.textContent = `${currentPlayer}'s turn`
    } else { currentPlayer == 'blue'
        document.getElementById('cell2').style.backgroundColor = 'blue'

        cell2.classList.add('blue')
        currentPlayer = 'red'
        statusText.textContent = `${currentPlayer}'s turn`
    }
    checkWin()
}
cell3.addEventListener('click', c)
function c(event) {
    if (currentPlayer == '') {
        document.getElementById('cell3').style.backgroundColor = 'yellow'
    } else if  (currentPlayer == 'red') {
        document.getElementById('cell3').style.backgroundColor = 'red'

        cell3.classList.add('red')
        currentPlayer = 'blue'
        statusText.textContent = `${currentPlayer}'s turn`
    } else { currentPlayer == 'blue'
        document.getElementById('cell3').style.backgroundColor = 'blue'

        cell3.classList.add('blue')
        currentPlayer = 'red'
        statusText.textContent = `${currentPlayer}'s turn`
    }
    checkWin()
}
cell4.addEventListener('click', d)
function d(event) {
    if (currentPlayer == '') {
        document.getElementById('cell4').style.backgroundColor = 'yellow'
    } else if  (currentPlayer == 'red') {
        document.getElementById('cell4').style.backgroundColor = 'red'

        cell4.classList.add('red')
        currentPlayer = 'blue'
        statusText.textContent = `${currentPlayer}'s turn`
    } else { currentPlayer == 'blue'
        document.getElementById('cell4').style.backgroundColor = 'blue'

        cell4.classList.add('blue')
        currentPlayer = 'red'
        statusText.textContent = `${currentPlayer}'s turn`
    }
    checkWin()
}
cell5.addEventListener('click', e)
function e(event) {
    if (currentPlayer == '') {
        document.getElementById('cell5').style.backgroundColor = 'yellow'
    } else if  (currentPlayer == 'red') {
        document.getElementById('cell5').style.backgroundColor = 'red'

        cell5.classList.add('red')
        currentPlayer = 'blue'
        statusText.textContent = `${currentPlayer}'s turn`
    } else { currentPlayer == 'blue'
        document.getElementById('cell5').style.backgroundColor = 'blue'

        cell5.classList.add('blue')
        currentPlayer = 'red'
        statusText.textContent = `${currentPlayer}'s turn`
    }
    checkWin()
}
cell6.addEventListener('click', f)
function f(event) {
    if (currentPlayer == '') {
        document.getElementById('cell6').style.backgroundColor = 'yellow'
    } else if  (currentPlayer == 'red') {
        document.getElementById('cell6').style.backgroundColor = 'red'

        cell6.classList.add('red')
        currentPlayer = 'blue'
        statusText.textContent = `${currentPlayer}'s turn`
    } else { currentPlayer == 'blue'
        document.getElementById('cell6').style.backgroundColor = 'blue'

        cell6.classList.add('blue')
        currentPlayer = 'red'
        statusText.textContent = `${currentPlayer}'s turn`
    }
    checkWin()
}
cell7.addEventListener('click', g)
function g(event) {
    if (currentPlayer == '') {
        document.getElementById('cell7').style.backgroundColor = 'yellow'
    } else if  (currentPlayer == 'red') {
        document.getElementById('cell7').style.backgroundColor = 'red'

        cell7.classList.add('red')
        currentPlayer = 'blue'
        statusText.textContent = `${currentPlayer}'s turn`
    } else { currentPlayer == 'blue'
        document.getElementById('cell7').style.backgroundColor = 'blue'

        cell7.classList.add('blue')
        currentPlayer = 'red'
        statusText.textContent = `${currentPlayer}'s turn`
    }
    checkWin()
}
cell8.addEventListener('click', h)
function h(event) {
    if (currentPlayer == '') {
        document.getElementById('cell8').style.backgroundColor = 'yellow'
    } else if  (currentPlayer == 'red') {
        document.getElementById('cell8').style.backgroundColor = 'red'

        cell8.classList.add('red')
        currentPlayer = 'blue'
        statusText.textContent = `${currentPlayer}'s turn`
    } else { currentPlayer == 'blue'
        document.getElementById('cell8').style.backgroundColor = 'blue'

        cell8.classList.add('blue')
        currentPlayer = 'red'
        statusText.textContent = `${currentPlayer}'s turn`
    }
    checkWin()
}
cell9.addEventListener('click', i)
function i(event) {
    if (currentPlayer == '') {
        document.getElementById('cell9').style.backgroundColor = 'yellow'
    } else if  (currentPlayer == 'red') {
        document.getElementById('cell9').style.backgroundColor = 'red'

        cell9.classList.add('red')
        currentPlayer = 'blue'
        statusText.textContent = `${currentPlayer}'s turn`
    } else { currentPlayer == 'blue'
        document.getElementById('cell9').style.backgroundColor = 'blue'

        cell9.classList.add('blue')
        currentPlayer = 'red'
        statusText.textContent = `${currentPlayer}'s turn`
    }
    checkWin()
}
cell10.addEventListener('click', j)
function j(event) {
    if (currentPlayer == '') {
        document.getElementById('cell10').style.backgroundColor = 'yellow'
    } else if  (currentPlayer == 'red') {
        document.getElementById('cell10').style.backgroundColor = 'red'

        cell10.classList.add('red')
        currentPlayer = 'blue'
        statusText.textContent = `${currentPlayer}'s turn`
    } else { currentPlayer == 'blue'
        document.getElementById('cell10').style.backgroundColor = 'blue'

        cell10.classList.add('blue')
        currentPlayer = 'red'
        statusText.textContent = `${currentPlayer}'s turn`
    }
    checkWin()
}
cell11.addEventListener('click', k)
function k(event) {
    if (currentPlayer == '') {
        document.getElementById('cell11').style.backgroundColor = 'yellow'
    } else if  (currentPlayer == 'red') {
        document.getElementById('cell11').style.backgroundColor = 'red'

        cell11.classList.add('red')
        currentPlayer = 'blue'
        statusText.textContent = `${currentPlayer}'s turn`
    } else { currentPlayer == 'blue'
        document.getElementById('cell11').style.backgroundColor = 'blue'

        cell11.classList.add('blue')
        currentPlayer = 'red'
        statusText.textContent = `${currentPlayer}'s turn`
    }
    checkWin()
}
cell12.addEventListener('click', l)
function l(event) {
    if (currentPlayer == '') {
        document.getElementById('cell12').style.backgroundColor = 'yellow'
    } else if  (currentPlayer == 'red') {
        document.getElementById('cell12').style.backgroundColor = 'red'

        cell12.classList.add('red')
        currentPlayer = 'blue'
        statusText.textContent = `${currentPlayer}'s turn`
    } else { currentPlayer == 'blue'
        document.getElementById('cell12').style.backgroundColor = 'blue'

        cell12.classList.add('blue')
        currentPlayer = 'red'
        statusText.textContent = `${currentPlayer}'s turn`
    }
    checkWin()
}
cell13.addEventListener('click', m)
function m(event) {
    if (currentPlayer == '') {
        document.getElementById('cell13').style.backgroundColor = 'yellow'
    } else if  (currentPlayer == 'red') {
        document.getElementById('cell13').style.backgroundColor = 'red'

        cell13.classList.add('red')
        currentPlayer = 'blue'
        statusText.textContent = `${currentPlayer}'s turn`
    } else { currentPlayer == 'blue'
        document.getElementById('cell13').style.backgroundColor = 'blue'

        cell13.classList.add('blue')
        currentPlayer = 'red'
        statusText.textContent = `${currentPlayer}'s turn`
    }
    checkWin()
}
cell14.addEventListener('click', n)
function n(event) {
    if (currentPlayer == '') {
        document.getElementById('cell14').style.backgroundColor = 'yellow'
    } else if  (currentPlayer == 'red') {
        document.getElementById('cell14').style.backgroundColor = 'red'

        cell14.classList.add('red')
        currentPlayer = 'blue'
        statusText.textContent = `${currentPlayer}'s turn`
    } else { currentPlayer == 'blue'
        document.getElementById('cell14').style.backgroundColor = 'blue'

        cell14.classList.add('blue')
        currentPlayer = 'red'
        statusText.textContent = `${currentPlayer}'s turn`
    }
}
cell15.addEventListener('click', o)
function o(event) {
    if (currentPlayer == '') {
        document.getElementById('cell15').style.backgroundColor = 'yellow'
    } else if  (currentPlayer == 'red') {
        document.getElementById('cell15').style.backgroundColor = 'red'

        cell15.classList.add('red')
        currentPlayer = 'blue'
        statusText.textContent = `${currentPlayer}'s turn`
    } else { currentPlayer == 'blue'
        document.getElementById('cell15').style.backgroundColor = 'blue'

        cell15.classList.add('blue')
        currentPlayer = 'red'
        statusText.textContent = `${currentPlayer}'s turn`
    }
    checkWin()
}
cell16.addEventListener('click', p)
function p(event) {
    if (currentPlayer == '') {
        document.getElementById('cell16').style.backgroundColor = 'yellow'
    } else if  (currentPlayer == 'red') {
        document.getElementById('cell16').style.backgroundColor = 'red'

        cell16.classList.add('red')
        currentPlayer = 'blue'
        statusText.textContent = `${currentPlayer}'s turn`
    } else { currentPlayer == 'blue'
        document.getElementById('cell16').style.backgroundColor = 'blue'

        cell16.classList.add('blue')
        currentPlayer = 'red'
        statusText.textContent = `${currentPlayer}'s turn`
    }
    checkWin()
}

//reset button 
restartBtn.addEventListener('click', y)
function y(event) {
    document.getElementsByClassName('red' || 'blue').style.backgroundColor = 'yellow'

    currentPlayer = ''
    statusText.textContent = 'Pick a color'
}
