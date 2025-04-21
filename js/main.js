const btnStart = document.querySelector("#startGame");
btnStart.addEventListener('click', () => {
    return startGame();
})

const startGame = (function () {

    function Players() {
        function createPlayer() { };
        return { createPlayer };
    }

    function Board() {
        function createBoard() { };
        function resetBoard() { };
        return { createBoard, resetBoard };
    }

    function Logic() {
        function createFlow() { };
        function takeTurn() { };
        function checkVictory() { };
        return { takeTurn, checkVictory, createFlow };
    }

    return {};

})();

// "player one" gets five turns while "player two" gets four turns. Its possible to have fewer turns if a player wins before turn nine.

// Turn five is the earliest that "player one" could win which would be their third piece placed. Turn six is the earliest "player 2" could win which would be their third piece that was placed.