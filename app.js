const boardElement = document.getElementById("board");
const statusElement = document.getElementById("status");
const resetButton = document.getElementById("reset-btn");

const files = ["a", "b", "c", "d", "e", "f", "g", "h"];

const pieceSymbols = {
  white: {
    pawn: "♙",
    rook: "♖",
    knight: "♘",
    bishop: "♗",
    queen: "♕",
    king: "♔",
  },
  black: {
    pawn: "♟",
    rook: "♜",
    knight: "♞",
    bishop: "♝",
    queen: "♛",
    king: "♚",
  },
};

const state = {
  board: [],
  selected: null,
  turn: "white",
  gameOver: false,
};

function createEmptyBoard() {
  return Array.from({ length: 8 }, () => Array(8).fill(null));
}

function createInitialBoard() {
  const board = createEmptyBoard();
  const backRank = ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"];

  for (let col = 0; col < 8; col += 1) {
    board[0][col] = { type: backRank[col], color: "black" };
    board[1][col] = { type: "pawn", color: "black" };
    board[6][col] = { type: "pawn", color: "white" };
    board[7][col] = { type: backRank[col], color: "white" };
  }

  return board;
}

function isInside(row, col) {
  return row >= 0 && row < 8 && col >= 0 && col < 8;
}

function getPieceAt(board, row, col) {
  if (!isInside(row, col)) return null;
  return board[row][col];
}

function getLegalMovesForPiece(board, row, col, piece) {
  if (!piece) return [];

  const legalMoves = [];

  if (piece.type === "pawn") {
    const direction = piece.color === "white" ? -1 : 1;
    const startRow = piece.color === "white" ? 6 : 1;

    const oneStepRow = row + direction;
    if (isInside(oneStepRow, col) && !board[oneStepRow][col]) {
      legalMoves.push([oneStepRow, col]);

      const twoStepRow = row + direction * 2;
      if (row === startRow && !board[twoStepRow][col]) {
        legalMoves.push([twoStepRow, col]);
      }
    }

    for (const deltaCol of [-1, 1]) {
      const nextRow = row + direction;
      const nextCol = col + deltaCol;
      const target = getPieceAt(board, nextRow, nextCol);

      if (target && target.color !== piece.color) {
        legalMoves.push([nextRow, nextCol]);
      }
    }

    return legalMoves;
  }

  if (piece.type === "knight") {
    const offsets = [
      [-2, -1],
      [-2, 1],
      [-1, -2],
      [-1, 2],
      [1, -2],
      [1, 2],
      [2, -1],
      [2, 1],
    ];

    for (const [rowOffset, colOffset] of offsets) {
      const nextRow = row + rowOffset;
      const nextCol = col + colOffset;
      const target = getPieceAt(board, nextRow, nextCol);

      if (!isInside(nextRow, nextCol)) continue;
      if (!target || target.color !== piece.color) {
        legalMoves.push([nextRow, nextCol]);
      }
    }

    return legalMoves;
  }

  if (piece.type === "bishop" || piece.type === "rook" || piece.type === "queen") {
    const directions = [];

    if (piece.type === "bishop" || piece.type === "queen") {
      directions.push([-1, -1], [-1, 1], [1, -1], [1, 1]);
    }

    if (piece.type === "rook" || piece.type === "queen") {
      directions.push([-1, 0], [1, 0], [0, -1], [0, 1]);
    }

    for (const [rowStep, colStep] of directions) {
      let nextRow = row + rowStep;
      let nextCol = col + colStep;

      while (isInside(nextRow, nextCol)) {
        const target = board[nextRow][nextCol];

        if (!target) {
          legalMoves.push([nextRow, nextCol]);
        } else {
          if (target.color !== piece.color) {
            legalMoves.push([nextRow, nextCol]);
          }
          break;
        }

        nextRow += rowStep;
        nextCol += colStep;
      }
    }

    return legalMoves;
  }

  if (piece.type === "king") {
    for (let rowOffset = -1; rowOffset <= 1; rowOffset += 1) {
      for (let colOffset = -1; colOffset <= 1; colOffset += 1) {
        if (rowOffset === 0 && colOffset === 0) continue;

        const nextRow = row + rowOffset;
        const nextCol = col + colOffset;
        const target = getPieceAt(board, nextRow, nextCol);

        if (!isInside(nextRow, nextCol)) continue;
        if (!target || target.color !== piece.color) {
          legalMoves.push([nextRow, nextCol]);
        }
      }
    }
  }

  return legalMoves;
}

function updateStatus() {
  if (!statusElement) return;

  if (state.gameOver) {
    statusElement.textContent = "Partida encerrada";
    return;
  }

  const turnName = state.turn === "white" ? "brancas" : "pretas";
  statusElement.textContent = `Vez das peças ${turnName}`;
}

function renderBoard() {
  if (!boardElement) return;

  const selectedMoves = state.selected
    ? getLegalMovesForPiece(
        state.board,
        state.selected[0],
        state.selected[1],
        state.board[state.selected[0]][state.selected[1]],
      )
    : [];

  const legalSet = new Set(selectedMoves.map(([row, col]) => `${row}-${col}`));

  boardElement.innerHTML = "";

  for (let row = 0; row < 8; row += 1) {
    for (let col = 0; col < 8; col += 1) {
      const square = document.createElement("button");
      const piece = state.board[row][col];
      const isLightSquare = (row + col) % 2 === 0;

      square.type = "button";
      square.className = `square ${isLightSquare ? "light" : "dark"}`;
      square.setAttribute("aria-label", `Casa ${files[col]}${8 - row}`);

      if (state.selected && state.selected[0] === row && state.selected[1] === col) {
        square.classList.add("selected");
      }

      if (legalSet.has(`${row}-${col}`)) {
        square.classList.add("legal");
      }

      if (piece) {
        const pieceElement = document.createElement("span");
        pieceElement.className = `piece ${piece.color}`;
        pieceElement.textContent = pieceSymbols[piece.color][piece.type];
        square.appendChild(pieceElement);
      }

      square.addEventListener("click", () => handleSquareClick(row, col));
      boardElement.appendChild(square);
    }
  }
}

function resetGame() {
  state.board = createInitialBoard();
  state.selected = null;
  state.turn = "white";
  state.gameOver = false;
  updateStatus();
  renderBoard();
}

function handleSquareClick(row, col) {
  if (state.gameOver) return;

  const clickedPiece = state.board[row][col];

  if (state.selected) {
    const [selectedRow, selectedCol] = state.selected;
    const selectedPiece = state.board[selectedRow][selectedCol];
    const legalMoves = getLegalMovesForPiece(
      state.board,
      selectedRow,
      selectedCol,
      selectedPiece,
    );

    const isLegalMove = legalMoves.some(
      ([moveRow, moveCol]) => moveRow === row && moveCol === col,
    );

    if (isLegalMove) {
      state.board[row][col] = selectedPiece;
      state.board[selectedRow][selectedCol] = null;

      if (selectedPiece.type === "pawn" && (row === 0 || row === 7)) {
        state.board[row][col] = { type: "queen", color: selectedPiece.color };
      }

      state.turn = state.turn === "white" ? "black" : "white";
      state.selected = null;
      updateStatus();
      renderBoard();
      return;
    }

    if (clickedPiece && clickedPiece.color === state.turn) {
      state.selected = [row, col];
      renderBoard();
      return;
    }

    state.selected = null;
    renderBoard();
    return;
  }

  if (clickedPiece && clickedPiece.color === state.turn) {
    state.selected = [row, col];
    renderBoard();
  }
}

if (boardElement && statusElement) {
  resetGame();

  if (resetButton) {
    resetButton.addEventListener("click", resetGame);
  }
}