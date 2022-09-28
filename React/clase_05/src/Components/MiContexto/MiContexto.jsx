import React, { createContext } from 'react';

export const Contexto = createContext();

export const ContextoProvider = ({ children }) => {
  return (
    <Contexto.Provider
      value={{
        colorcito: 'greenyellow',
        tituloContexto: 'Juega Messi',
      }}
    >
      {children}
    </Contexto.Provider>
  );
};
