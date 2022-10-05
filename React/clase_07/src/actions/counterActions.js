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

export const increment = () => ({ type: INCREMENT });

export const increment_5 = () => ({ type: INCREMENT_5 });

export const decrement = () => ({ type: DECREMENT });

export const decrement_5 = () => ({ type: DECREMENT_5 });

export const multiply = () => ({ type: MULTIPLY });

export const divide = () => ({ type: DIVIDE });

export const reset = () => ({ type: RESET });
