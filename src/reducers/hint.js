import {
  SHOW_HINT,
  CLOSE_HINT
} from '../constants/ActionTypes';

/**
 *  State:
 *  @hintContent {String} the text showed in hint container
 *  @isShowingHint {Boolean} if show the hint container
 * 
 */
const hint = (
  state = { 
    hintContent: 'Please Choose Mode',
    isShowingHint: true
  },
  action
) => {
  switch (action.type) {
    case SHOW_HINT:
      return {
        hintContent: action.content,
        isShowingHint: true,
      };
    case CLOSE_HINT:
      return {
        hintContent: '',
        isShowingHint: false,
      };
    default:
      return state;
  }
};

export default hint;