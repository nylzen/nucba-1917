import { createContext } from 'react';

export const Contexto = createContext();

export const ContextoProvider = ({ children }) => {
  return (
    <Contexto.Provider
      value={{
        color: '#4747ff',
        texto: 'Soy un texto dentro del contexto',
      }}
    >
      {children}
    </Contexto.Provider>
  );
};
