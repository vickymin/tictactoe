import {
  INIT_ONE_PLAYER,
  INIT_TWO_PLAYERS,
  ON_CLICK_CELL,
} from '../constants/ActionTypes';

/**
 *  State:
 *  @cells {Array} two dimension array
 *  @flag {Number} -1: circle, 1: cross
 * 
 */
const gameInfo = ( state = {}, action) => {
  const initArr = [0, 1, 2];
  let cells = [];
  initArr.forEach(i => {
    cells[i] = [];
    initArr.forEach(j => {
      cells[i][j] = 0;
    });
  });
  switch (action.type) {
    case INIT_ONE_PLAYER:
      return {
        cells,
        flag: -1, // circle first
        player: 'one',
        computerArr: new Array(9).map((v, i) => i), // track the cell computer could click
      };
    case INIT_TWO_PLAYERS:
      return {
        cells,
        flag: -1, // circle first
        player: 'two',
      };
    case ON_CLICK_CELL:
      const { row, col } = action;
      if (!state.cells[row][col]) {
        state.cells[row][col] = state.flag;
      }
      return {
        ...state,
        flag: state.flag * -1,
      };
    default:
      return state;
  }
};

export default gameInfo;