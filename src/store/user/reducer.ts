import { SET_USER, CLEAR_USER } from './actions';
import { ActionType, IUser } from './types';

const initialState: IUser | null = null;

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case CLEAR_USER:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
