const gameBoard = (() => {
    let board = [
        ['X', 'X', 'X'],
        ['X', 'X', 'X'],
        ['X', 'X', 'X']
    ];

    return {board};
})();

const Player = (name, sign) => {
    let onTurn = false;

    return {name, sign, onTurn};
};

const displayController = (() => {
    let player1 = Player("player 1", 'X');
    let player2 = Player("player 2", 'O');
    player1.onTurn = true;

    if(player1.onTurn === true){
        // player1 turn
        // implement the game logic
        player1.onTurn = false
    } else {
        // player2 turn
        // implement the game logic
        player2.onTurn = false;
    }
    
})();