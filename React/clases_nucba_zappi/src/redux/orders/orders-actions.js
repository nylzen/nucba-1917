import { uuidv4 } from '@firebase/util';
import { onSnapshot } from 'firebase/firestore';
import { createOrderDocument, getOrders } from '../../firebase/firebase-utils';
import { store } from '../store';
import {
  CREATE_ORDER_FAIL,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_START,
  FETCH_ORDERS_FAIL,
  CLEAR_ERROR,
} from './orders-types';

export const createOrderFail = error => ({
  type: CREATE_ORDER_FAIL,
  payload: error,
});

export const createOrder = orderData => async dispatch => {
  const {
    user: { currentUser },
  } = store.getState();

  try {
    const orderRef = await createOrderDocument({
      ...orderData,
      orderId: uuidv4(),
      userId: currentUser.id,
    });

    onSnapshot(orderRef, _snapShot => {
      dispatch(getFullOrders(currentUser.id));
    });
  } catch (error) {
    dispatch(createOrderFail(error));
  }
};

// Para manejar el loading
export const getOrdersStart = () => ({
  type: FETCH_ORDERS_START,
});

// Para recibir las ordenes
export const getOrdersSuccess = orders => ({
  type: FETCH_ORDERS_SUCCESS,
  payload: orders,
});

// SI hay un error
export const getOrdersFail = error => ({
  type: FETCH_ORDERS_FAIL,
  payload:
    error ||
    'Upsss, algo salio mal. No hay ordens sin usuario, es como querer jugar al futbol sin una pelota.',
});

// Para recibir todas las ordenes
export const getFullOrders = userId => async dispatch => {
  const {
    orders: { orders: currentOrdersInRedux },
  } = store.getState();

  dispatch(getOrdersStart());

  try {
    const orders = await getOrders(
      userId,
      currentOrdersInRedux,
      dispatch,
      getFullOrders
    );
    dispatch(getOrdersSuccess(orders));
  } catch (error) {
    dispatch(getOrdersFail(error.message));
  }
};

export const clearError = () => ({
  type: CLEAR_ERROR,
});
