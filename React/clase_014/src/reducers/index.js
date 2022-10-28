import { combineReducers } from 'redux';
import { counterReducer } from './counterReducers';

const reducer = combineReducers({
  counter: counterReducer,
});

export default reducer;
