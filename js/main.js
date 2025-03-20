const gameBoard = {

}

function createPlayer(name, symbol, turn = false) {
    return { name, symbol, turn };
}

let playerOne = createPlayer('playerOne', 'X', true);
let playerTwo = createPlayer('playerTwo', 'O');

let columns = 3;
let rows = 3;

function createGameBoard(columns, rows) {

}

// creates a 3 by 3 grid of arrays using columns and rows.

function checkVictory() { };

// check to see if the square they click is empty or not, 
// if empty, it will fill in that square with their "symbol"

function gameReset() { };

// Use array.length = 0, to reset each array. 
// I'll need to use forEach to navigate through each array. 

function takeTurn() { };