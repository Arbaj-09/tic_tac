document.addEventListener("DOMContentLoaded", function() {
    const board = document.getElementById("board");
    const message = document.getElementById("message");
    let currentPlayer = "X";
    let gameOver = false;
    const cells = [];

    // Create the Tic-Tac-Toe board
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = i;
        board.appendChild(cell);
        cells.push(cell);

        cell.addEventListener("click", () => {
            if (!gameOver && !cell.textContent) {
                cell.textContent = currentPlayer;
                checkWin();
                currentPlayer = currentPlayer === "X" ? "O" : "X";
                message.textContent = `Player ${currentPlayer}'s Turn`;
            }
        });
    }

    // Define winning combinations
    const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Check for a win
    function checkWin() {
        for (const combo of winCombos) {
            const [a, b, c] = combo;
            if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
                gameOver = true;
                message.textContent = `Player ${currentPlayer} wins!`;
                cells[a].classList.add("win-cell");
                cells[b].classList.add("win-cell");
                cells[c].classList.add("win-cell");
                break;
            }
        }
        // Check for a draw
        if (!cells.some(cell => !cell.textContent)) {
            gameOver = true;
            message.textContent = "It's a draw!";
        }
    }
});
