import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import user from './user/reducer';

const rootReducer = combineReducers({
  user,
});
export type RootReducerState = ReturnType<typeof rootReducer>;

const middlewares = applyMiddleware(thunkMiddleware);
const enchancers = composeWithDevTools(middlewares);

const store = createStore(rootReducer, enchancers);

export default store;
