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