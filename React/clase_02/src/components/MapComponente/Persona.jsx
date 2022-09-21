import React from 'react';

const Persona = props => {
  return (
    <div>
      <img src={props.img} alt='' />
      <p>Nombre: {props.name}</p>
      <p>Edad: {props.age}</p>
    </div>
  );
};

export default Persona;
