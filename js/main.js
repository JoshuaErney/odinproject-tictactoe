
function checkVictory() { }

// check to see if the square they click is empty or not, 
// if empty, it will fill in that square with their "symbol"

function initializeGame() {
    createGameBoard();

}

function createGameBoard() {
    return {
        row1: [[], [], []],
        row2: [[], [], []],
        row3: [[], [], []],
    }
}

function gameReset() {
    const gameBoard = createGameBoard();
    Object.values(gameBoard).forEach(row => {
        row.forEach(cell => cell.length = 0);
    });
    return gameBoard;
};

function createPlayer(name, symbol) {
    return {
        name: name,
        gameWins: 0,
        gameLosses: 0,
        symbol: symbol,
    }
}
