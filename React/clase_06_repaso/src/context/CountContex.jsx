import React, { useReducer, createContext, useContext } from 'react';
import { counterInitialState, countReducer } from '../reducers/countReducer';

const CountContext = createContext();
export const useCountContext = () => useContext(CountContext);

export const CountContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(countReducer, counterInitialState);

  const data = { state, dispatch };

  return <CountContext.Provider value={data}>{children}</CountContext.Provider>;
};
