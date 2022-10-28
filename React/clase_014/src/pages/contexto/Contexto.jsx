import React from 'react';
import { useContext } from 'react';
import { Contexto } from '../../context';

const ContextoComp = () => {
  const { color, texto } = useContext(Contexto);
  return <h2 style={{ color: color }}>{texto}</h2>;
};

export default ContextoComp;
