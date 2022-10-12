import React from 'react';
import { InputContainerStyled, InputStyled } from './InputStyles';

function Input(props) {
  return (
    <InputContainerStyled>
      <InputStyled {...props} />
    </InputContainerStyled>
  );
}

export default Input;
