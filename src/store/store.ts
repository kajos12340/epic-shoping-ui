import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import user from './user/reducer';
import { IUser } from './user/types';
import messageCounter from './messageCounter/reducer';

const rootReducer = combineReducers({
  user,
  messageCounter,
});
export interface RootReducerState {
  user: IUser,
  messageCounter: number,
}

const middlewares = applyMiddleware(thunkMiddleware);
const enchancers = composeWithDevTools(middlewares);

const store = createStore(rootReducer, enchancers);

export default store;
