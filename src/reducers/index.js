import { combineReducers } from 'redux';
import game from './game';
import hint from './hint';

export default combineReducers({
  gameInfo: game,
  hint
});