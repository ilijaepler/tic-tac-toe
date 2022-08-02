const gameBoard = (() => {
    let board = [
        ['X', 'X', 'X'],
        ['X', 'X', 'X'],
        ['X', 'X', 'X']
    ];

    return {board};
})();

const Player = (name, sign, onTurn) => {
    return {name, sign, onTurn};
};

const displayController = (() => {
    let player1 = Player("player 1", 'X', true);
    let player2 = Player("player 2", 'O', false);

    const displayBoard = () => {
        const container = document.querySelector("#container");
        for(let i = 0; i < 3; i++){
            let row = document.createElement("div");
            let rowId = "row" + i;
            row.setAttribute("id", rowId);
            row.style.flexGrow = "1";
            row.style.display = "flex";
            row.style.borderTop = "1px solid black";
            row.style.borderBottom = "1px solid black";
            for (let j = 0; j < 3; j++){
                let column = document.createElement("div");
                let columnId = rowId + "column" + j;
                column.setAttribute("id", columnId);
                column.style.flexGrow = "1";
                column.style.display = "flex";
                column.style.borderLeft = "1px solid black";
                column.style.borderRight = "1px solid black";
                column.textContent = gameBoard.board[i][j];
                column.style.justifyContent = "center"
                column.style.alignItems = "center"

                row.appendChild(column);
            }

            container.appendChild(row);
        }
    };
    /*player1.onTurn = true;

    if(player1.onTurn === true){
        // player1 turn
        // implement the game logic
        player1.onTurn = false
    } else {
        // player2 turn
        // implement the game logic
        player2.onTurn = false;
    }*/
    
    return {
        player1,
        player2,
        displayBoard
    };
})();

displayController.displayBoard();
