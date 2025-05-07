const btnStart = document.querySelector("#startGame");
btnStart.addEventListener('click', () => {
    return startGame();
})

// Game Module using Factory Functions and Module Pattern
const startGame = (function () {
    // Factory function for creating players
    const createPlayer = function (name, symbol, position, wins = 0, losses = 0) {
        return { name, symbol, position, wins, losses };
    };

    // Game board module
    const gameBoard = (function () {
        let board;
        function createBoard() {
            board = Array(9).fill('');
            return board;
        }

        // Public API
        return { createBoard };
    })();

    // Game logic module
    const gameLogic = (function () {
        function currentPlayer() { }
        function takeTurn() { }
        function checkVictory() { }

        // Public API
        return { takeTurn, checkVictory };
    })();
})();

/* 
-------------------------------------------------------------------
"player one" gets five turns while "player two" gets four turns. 
Its possible to have fewer turns if a player wins before turn nine.
-----------------------------------------------------------------------------------------------
Turn five is the earliest that "player one" could win which would be their third piece placed. 
Turn six is the earliest "player 2" could win which would be their third piece that was placed.
-----------------------------------------------------------------------------------------------
Horizontal: (1, 2, 3), (4, 5, 6), (7, 8, 9); | 
Vertical: (1, 4, 7), (2, 5, 8), (3, 6, 9); | 
Diagonal: (1, 5, 9), (3, 5, 7);
-----------------------------------------------
 */

/* at the beginning of each turn, check victory condition against the possible win conditions. */
/*  if there are differing symbols in any row, col, or diag we remove that possible win config.  */