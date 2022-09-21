import React from 'react';
import Persona from './Persona';

const MapComponente = () => {
  const personas = [
    { id: 1, name: 'Pepe', age: 20, img: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Pepita', age: 24, img: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Messi', age: 35, img: 'https://via.placeholder.com/150' },
  ];
  return (
    <div>
      {personas.map(persona => {
        return (
          <Persona
            img={persona.img}
            name={persona.name}
            age={persona.age}
            key={persona.id}
          />
        );
      })}
    </div>
  );
};

export default MapComponente;
