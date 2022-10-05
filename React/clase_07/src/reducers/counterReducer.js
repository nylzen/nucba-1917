// Nos importamos todos los tipos
import {
  INCREMENT,
  INCREMENT_5,
  DECREMENT,
  DECREMENT_5,
  MULTIPLY,
  DIVIDE,
  RESET,
} from '../types';

// Establecer el estado inicial de la app
export const initialState = { count: 0 };

// Hacemos la funcion reductora
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case INCREMENT_5:
      return { ...state, count: state.count + 5 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case DECREMENT_5:
      return { ...state, count: state.count - 5 };
    case MULTIPLY:
      return { ...state, count: state.count * 2 };
    case DIVIDE:
      return { ...state, count: state.count / 2 };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
