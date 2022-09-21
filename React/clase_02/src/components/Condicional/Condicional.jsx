import React from 'react';
import {
  EjemploFuncional,
  EjemploFuncional2,
} from '../EjemploFuncional/EjemploFuncional';

const Condicional = () => {
  const mostrar = true;

  //   return (
  //     <div>
  //       {mostrar ? (
  //         <h1>Esto es un condicional y esta en true</h1>
  //       ) : (
  //         <h2>Esto es un condicional y esta en false</h2>
  //       )}
  //     </div>
  //   );
  return <div>{mostrar ? <EjemploFuncional numerito={10} /> : ''}</div>;
};

export default Condicional;
