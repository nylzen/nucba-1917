import React, { useReducer, useContext } from 'react';
import styled from 'styled-components';
import { Contexto } from '../MiContexto/MiContexto';

export const ReducerButton = styled.button`
  padding: 1rem 4rem;
  background-color: var(--primary);
  color: white;
  border-radius: 5px;
`;

const EjemploUseReducer = () => {
  const estadoInicial = '#4747ff';

  const reducer = (estado, action) => {
    switch (action.type) {
      case 'rojo':
        return '#e63946';
      case 'verde':
        return '#2a9d8f';
      case 'azul':
        return '#0081a7';
      default:
        return estadoInicial;
    }
  };

  const [estado, dispatch] = useReducer(reducer, estadoInicial);

  const { colorcito } = useContext(Contexto);

  return (
    <div>
      <h2 style={{ color: estado, backgroundColor: colorcito }}>
        Cambia mi color
      </h2>
      <ReducerButton
        onClick={() => dispatch({ type: 'rojo' })}
        style={{ backgroundColor: '#e63946' }}
      >
        Rojo
      </ReducerButton>
      <ReducerButton
        onClick={() => dispatch({ type: 'verde' })}
        style={{ backgroundColor: '#2a9d8f' }}
      >
        Verde
      </ReducerButton>
      <ReducerButton
        onClick={() => dispatch({ type: 'azul' })}
        style={{ backgroundColor: '#0081a7' }}
      >
        Azul
      </ReducerButton>
      <ReducerButton onClick={() => dispatch({ type: 'violeta' })}>
        No existe
      </ReducerButton>
    </div>
  );
};

export default EjemploUseReducer;
