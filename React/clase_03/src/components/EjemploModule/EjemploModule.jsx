import React from 'react';
import estilos from './EjemploModule.module.css';

const EjemploModule = () => {
  return (
    <div className={estilos.contenedorModule}>
      <p className={estilos.parrafoModule}>Ejemplo con module</p>
    </div>
  );
};

export default EjemploModule;
