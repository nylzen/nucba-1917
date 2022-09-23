import React from 'react';
import { useRef } from 'react';
import styled from 'styled-components';

export const ButtonPrimary = styled.button`
  background: #4747ff;
  color: white;
  padding: 1rem 2rem;
  margin-top: 1rem;
  border-radius: 10px;
  cursor: pointer;
`;

const EjemploUseRef = () => {
  const title = useRef(null);

  const handleTitleColor = () => {
    title.current.style.color = 'crimson';
  };

  return (
    <>
      <h2 ref={title}>Ejemplo useRef</h2>
      <ButtonPrimary
        style={{ width: 'auto', height: 'auto', padding: '1rem' }}
        onClick={handleTitleColor}
      >
        Cambiar color
      </ButtonPrimary>
    </>
  );
};

export default EjemploUseRef;
