import { INCREASE_COUNTER, RESET_COUNTER } from './actions';

export interface ActionType {
  type: typeof INCREASE_COUNTER | typeof RESET_COUNTER,
}
