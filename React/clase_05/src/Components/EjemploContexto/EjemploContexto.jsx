import React, { useContext } from 'react';
import { Contexto } from '../MiContexto/MiContexto';

const EjemploContexto = () => {
  const { colorcito, tituloContexto } = useContext(Contexto);

  return <h2 style={{ color: colorcito }}>Holis ({tituloContexto})</h2>;
};

export default EjemploContexto;
