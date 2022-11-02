import React from 'react';
import { recommended } from '../../data';

import CardRecomendacion from './CardRecomendacion';

import { CardsContainer } from './CardsRecomendacionStyled';

const CardsRecomendacion = () => {
  return (
    <CardsContainer gridLength={4}>
      {recommended.map(recomendado => (
        <CardRecomendacion key={recomendado.id} {...recomendado} />
      ))}
    </CardsContainer>
  );
};

export default CardsRecomendacion;
