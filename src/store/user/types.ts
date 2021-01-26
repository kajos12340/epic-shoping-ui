import { CLEAR_USER, SET_USER } from './actions';

export interface IUser {
  id: string,
  login: string,
  email: string,
}

export interface ActionType {
  type: typeof CLEAR_USER | typeof SET_USER,
  payload: IUser | null,
}