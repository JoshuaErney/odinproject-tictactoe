const btnStart = document.querySelector("#startGame");

const gameBoard = {
    // creates a 3 by 3 grid of arrays using columns and rows.
    createGameBoard() { },

    // Use array.length = 0, to reset each array. 
    // I'll need to use forEach to navigate through each array.
    resetGameBoard() { },
}

const Players = {

    createPlayer(name, symbol, turn = false) {
        return { name, symbol, turn };
    },

    takeTurn() { },

    // check to see if the square they click is empty or not, 
    // if empty, it will fill in that square with their "symbol"
    checkVictory() { },
}

let playerOne = gameBoard.createPlayer('playerOne', 'X', true);
let playerTwo = gameBoard.createPlayer('playerTwo', 'O');