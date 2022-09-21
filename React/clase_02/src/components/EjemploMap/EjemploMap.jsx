import React from 'react';

const EjemploMap = () => {
  const names = ['Juan', 'Pedro', 'Luis', 'Maria', 'Jose'];
  return (
    <ul>
      {names.map(name => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
};

export default EjemploMap;
