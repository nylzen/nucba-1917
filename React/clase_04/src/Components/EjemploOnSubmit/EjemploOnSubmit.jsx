import React from 'react';
import { ButtonPrimary } from '../EjemploUseRef/EjemploUseRef';

const EjemploOnSubmit = () => {
  const handleSubmit = e => {
    e.preventDefault();
    alert('Form Enviado');
  };
  return (
    <form onSubmit={handleSubmit}>
      <ButtonPrimary>Enviar</ButtonPrimary>
    </form>
  );
};

export default EjemploOnSubmit;
