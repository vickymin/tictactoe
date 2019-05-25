import {
  INIT_ONE_PLAYER,
  INIT_TWO_PLAYERS,
  SHOW_HINT, 
  CLOSE_HINT,
  ON_CLICK_CELL,
} from '../constants/ActionTypes';

export const initOnePlayer = () => ({
  type: INIT_ONE_PLAYER,
});

export const initTwoPlayers = () => ({
  type: INIT_TWO_PLAYERS,
});

export const onClickCell = (row, col) => ({
  row,
  col,
  type: ON_CLICK_CELL,
});

export const showHint = content => ({
  content,
  type: SHOW_HINT,
});

export const closeHint = () => ({
  type: CLOSE_HINT,
});