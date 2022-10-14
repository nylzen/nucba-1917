import React, { useContext } from 'react';
import { InputContainerStyled, InputStyled } from './InputStyles';
import AuthContext from '../../context/AuthContext';

function Input(props) {
  const { handleChange } = useContext(AuthContext);

  return (
    <InputContainerStyled>
      <InputStyled {...props} onChange={e => handleChange(e)} />
    </InputContainerStyled>
  );
}

export default Input;
