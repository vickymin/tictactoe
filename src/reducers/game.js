import {
  INIT_ONE_PLAYER,
  INIT_TWO_PLAYERS,
  ON_CLICK_CELL,
} from '../constants/ActionTypes';

/**
 *  State:
 *  @cells {Array} two dimension array
 *  @flag {Number} -1: circle, 1: cross
 *  @playMode {Number}
 */
const gameInfo = ( state = {}, action) => {
  let initCells = [];
  [0, 1, 2].forEach(i => {
    initCells[i] = [];
    [0, 1, 2].forEach(j => {
      initCells[i][j] = 0;
    });
  });
  const initialGameInfo = Object.freeze({
    cells: initCells,
    flag: -1, // circle first
  });
  switch (action.type) {
    case INIT_ONE_PLAYER:
      return {
        ...initialGameInfo,
        computerClickCell: {},
        playMode: 1,
      };
    case INIT_TWO_PLAYERS:
      return {
        ...initialGameInfo,
        playMode: 2,
      };
    case ON_CLICK_CELL:
      const { row, col } = action;
      state.cells[row][col] = state.flag;
      return {
        ...state,
        flag: state.flag * -1,
      };
    default:
      return state;
  }
};

export default gameInfo;