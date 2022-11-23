import { SET_CURRENT_USER, TOGGLE_MENU_HIDDEN } from './user-actions';

const INITIAL_STATE = {
  hiddenMenu: true,
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_MENU_HIDDEN:
      return {
        ...state,
        hiddenMenu: !state.hiddenMenu,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
