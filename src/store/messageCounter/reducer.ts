import { RESET_COUNTER, INCREASE_COUNTER } from './actions';
import { ActionType } from './types';

const reducer = (state: number = 0, action: ActionType) => {
  switch (action.type) {
    case RESET_COUNTER:
      return 0;
    case INCREASE_COUNTER:
      return state + 1;
    default:
      return state;
  }
};

export default reducer;
