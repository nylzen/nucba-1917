import { combineReducers } from 'redux';
import { counterReducer } from './counterReducer';
// import { cartReducer } from './EJEMPLO/'

const reducer = combineReducers({
  counter: counterReducer,
  // cart: cartReducer,
  //   user: userReducer
});

export default reducer;
