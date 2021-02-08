import { RootReducerState } from './store';

export const getMessageCounter = (state: RootReducerState) => state.messageCounter;

export const getUserId = (state: RootReducerState) => state.user?.id;

export const getUser = (state: RootReducerState) => state.user;
