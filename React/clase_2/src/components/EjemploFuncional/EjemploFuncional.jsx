import React from 'react';

// export const EjemploFuncional = props => {
//   return (
//     <h3>
//       {props.pepeTexto} {props.numerito}
//     </h3>
//   );
// };

export const EjemploFuncional = ({ pepeTexto, numerito }) => {
  return (
    <h3>
      {pepeTexto} {numerito}
    </h3>
  );
};

export const EjemploFuncional2 = () => {
  return <h3>Este es mi componente funcional, numero 2</h3>;
};
