/**
 *  Parameters:
 *  @cells {Array} the hint content
 *  @row {Number} row number
 *  @col {Number} column number
 *  @direction {Number} 1: row, 2: col, 3: diagonal \, 4: diagonal /
 */
const checkWinPoints = (cells, direction, row, col) => {
  let sum = 0;
  [0, 1, 2].forEach(i => {
    if (direction === 1) {
      sum += cells[row][i];
    } else if (direction === 2) {
      sum += cells[i][col];
    } else if (direction === 3) {
      sum += cells[i][i];
    } else {
      sum += cells[i][2-i];

    }
  });
  return sum === 3 || sum === -3;
};

// no one wins, check if the result is even
// even not equal to zero means all cells are filled
// so the result is even
const evenPlay = cells => {
  let even = 1;
  cells.forEach(cell => {
    even = cell.reduce((acc, cur) => acc * cur, even);
  });
  return even;
};

export const checkResult = (row, col, cells) => {
  if (
    checkWinPoints(cells, 1, row, col) ||  // check row
    checkWinPoints(cells, 2, row, col) ||  // check column
    checkWinPoints(cells, 3) ||  // check diagonal \
    checkWinPoints(cells, 4)  // check diagonal /
  ) {
    return 'win';
  } else {
    // no one wins, check if the result is even
    if ((evenPlay(cells))) {
      return 'even';
    }
  }
  return false;
};

export const getHintContent = (result, flag) => {
  if (result === 'win') {
    return flag === -1 ? 'CIRCLE WIN!' : 'CROSS WIN!';
  } else {
    return 'BREAK EVEN!';
  }
};