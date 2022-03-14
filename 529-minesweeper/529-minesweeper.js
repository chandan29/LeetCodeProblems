const isOutOfBounds = (x, y, board) => {
  if (x < 0 || y < 0) return true;
  if (x >= board.length) return true;
  if (y >= board[x].length) return true;
  return false;
}

const findAdjacentMines = (x, y, board) => {
  return directions(x, y).reduce((mines, [x, y]) => {
    if (!isOutOfBounds(x, y, board) && board[x][y] === 'M') mines++;
    return mines;
  }, 0) 
}

const directions = (x, y) => [
  [x - 1, y - 1],
  [x - 1, y],
  [x, y - 1],
  [x + 1, y],
  [x, y + 1],
  [x + 1, y + 1],
  [x - 1, y + 1],
  [x + 1, y - 1],
]


const updateBoard = function(board, click) {
  const seen = [];
  const queue = [click];
  while(queue.length > 0) {
    const [x, y] = queue.shift();
    if (seen.includes([x, y])) continue;
    seen.push([x, y])
    if (isOutOfBounds(x, y, board)) continue;
    const type = board[x][y];
    if (type === 'E') {
      const mines = findAdjacentMines(x, y, board)
      if (mines > 0) {
        board[x][y] = String(mines)
      } else {
        board[x][y] = 'B';
        queue.push(...directions(x, y))
      }
    } else if (type === 'M') {
      board[x][y] = 'X';
      return board;
    }
  }

  return board;
};