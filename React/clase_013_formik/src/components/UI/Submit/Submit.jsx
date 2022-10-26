import React from 'react';
import { ButtonSubmitStyled } from './SubmitStyles';

const Submit = ({ onSubmit }) => {
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   onSubmit();
  // };

  return <ButtonSubmitStyled type='submit'>Enviar</ButtonSubmitStyled>;
};

export default Submit;
