import { initialPokemon } from '../data/initialPokemon';
import { ERROR, SUCCESS, IS_FETCHING } from '../types';

// Setear el estado inicial
export const initialState = {
  data: initialPokemon,
  isLoading: false,
  error: false,
};

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_FETCHING:
      return {
        isLoading: true,
        data: null,
        error: false,
      };
    case SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case ERROR:
      return {
        ...state,
        isLoading: false,
        error: 'Pokemon no encontrado, busca bien pa',
      };
    default:
      return state;
  }
};
