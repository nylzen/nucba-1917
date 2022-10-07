import React from 'react';
import { TypeStyled } from './TypeStyles';

// Al componente le llegan props
const Type = ({ typeName }) => {
  return <TypeStyled type={typeName}>{typeName}</TypeStyled>;
};

export default Type;
