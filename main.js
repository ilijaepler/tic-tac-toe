// module for game board object
const gameBoard = (() => {
    let board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    return {board};
})();

// factory for player object
const Player = (name, sign, onTurn) => {
    return {name, sign, onTurn};
};

// module for display controller object
const displayController = (() => {
    let player1 = Player("player 1", 'X', true);
    let player2 = Player("player 2", 'O', false);

    // implementing all possible solutions for winning the game
    const gameLogic = (playerSign) => {
        const winner = document.querySelector("#winner");
        if(gameBoard.board[0][0] === playerSign && gameBoard.board[1][1] === playerSign && gameBoard.board[2][2] === playerSign){
            if(player1.sign === playerSign){
                winner.textContent = player1.name + " wins!";
            }else {
                winner.textContent = player2.name + " wins!";
            }
        } else if (gameBoard.board[0][2] === playerSign && gameBoard.board[1][1] === playerSign && gameBoard.board[2][0] === playerSign){
            if(player1.sign === playerSign){
                winner.textContent = player1.name + " wins!";
            }else {
                winner.textContent = player2.name + " wins!";
            }
        } else if (gameBoard.board[0][0] === playerSign && gameBoard.board[1][0] === playerSign && gameBoard.board[2][0] === playerSign){
            if(player1.sign === playerSign){
                winner.textContent = player1.name + " wins!";
            }else {
                winner.textContent = player2.name + " wins!";
            }
        } else if (gameBoard.board[0][1] === playerSign && gameBoard.board[1][1] === playerSign && gameBoard.board[2][1] === playerSign){
            if(player1.sign === playerSign){
                winner.textContent = player1.name + " wins!";
            }else {
                winner.textContent = player2.name + " wins!";
            }
        } else if (gameBoard.board[0][2] === playerSign && gameBoard.board[1][2] === playerSign && gameBoard.board[2][2] === playerSign){
            if(player1.sign === playerSign){
                winner.textContent = player1.name + " wins!";
            }else {
                winner.textContent = player2.name + " wins!";
            }
        } else if (gameBoard.board[0][0] === playerSign && gameBoard.board[0][1] === playerSign && gameBoard.board[0][2] === playerSign){
            if(player1.sign === playerSign){
                winner.textContent = player1.name + " wins!";
            }else {
                winner.textContent = player2.name + " wins!";
            }
        } else if (gameBoard.board[1][0] === playerSign && gameBoard.board[1][1] === playerSign && gameBoard.board[1][2] === playerSign){
            if(player1.sign === playerSign){
                winner.textContent = player1.name + " wins!";
            }else {
                winner.textContent = player2.name + " wins!";
            }
        } else if (gameBoard.board[2][0] === playerSign && gameBoard.board[2][1] === playerSign && gameBoard.board[2][2] === playerSign){
            if(player1.sign === playerSign){
                winner.textContent = player1.name + " wins!";
            }else {
                winner.textContent = player2.name + " wins!";
            }
        } else {
            let counter = 0;
            for(let i = 0; i<3; i++){
                for(let j = 0; j<3; j++){
                    if(gameBoard.board[i][j] !== ''){
                        counter++;
                    }
                }
            }

            if(counter === 9){
                winner.textContent = "It's a tie!";
            }
        }
    };

    // function for displayin the board
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
                column.style.justifyContent = "center"
                column.style.alignItems = "center"

                let signHolder = document.createElement("div");
                signHolder.style.display = "flex";
                signHolder.style.justifyContent = "center";
                signHolder.style.alignItems = "center"
                signHolder.style.width = "50px";
                signHolder.style.height = "50px";
                signHolder.textContent = gameBoard.board[i][j];

                column.appendChild(signHolder);

                column.addEventListener("click", ()=>{
                    if(gameBoard.board[i][j] === ""){
                        if(player1.onTurn === true){
                            signHolder.textContent = player1.sign;
                            gameBoard.board[i][j] = player1.sign;
                            console.log(gameBoard.board);
                            player1.onTurn = false;
                            player2.onTurn = true;
                            gameLogic(player1.sign);
                        }else{
                            signHolder.textContent = player2.sign;
                            gameBoard.board[i][j] = player2.sign;
                            console.log(gameBoard.board);
                            player2.onTurn = false;
                            player1.onTurn = true;
                            gameLogic(player2.sign);
                        }
                    }
                    
                });

                row.appendChild(column);
            }

            container.appendChild(row);
        }
    };

    return {
        displayBoard,
        player1,
        player2
    };
})();

displayController.displayBoard();




