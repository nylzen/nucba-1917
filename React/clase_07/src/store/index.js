import { createStore } from 'redux';
import reducer from '../reducers';

// Le decimos que nuestro store va a ser
const store = createStore(reducer);

store.subscribe(() => console.log('Cambio el estado'));

export default store;
