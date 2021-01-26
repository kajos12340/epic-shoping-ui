import { IUser } from './types';

export const SET_USER = 'SET_USER';
export const CLEAR_USER = 'CLEAR_USER';

export const setUser = (user: IUser) => ({
  type: SET_USER,
  payload: user,
});
