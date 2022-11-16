import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Importamos los reducers necesarios
import categoriesReducer from './categories/categories-reducer';
import productsReducer from './products/products-reducer';
import recommendedReducer from './recommended/recommended-reducer';
import cartReducer from './cart/cart-reducer';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  // Agregar reducers
  products: productsReducer,
  categories: categoriesReducer,
  recommended: recommendedReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
