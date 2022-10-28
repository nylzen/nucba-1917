import { INCREMENT, DECREMENT, RESET } from '../types';

export const initialState = { count: 0 };

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
