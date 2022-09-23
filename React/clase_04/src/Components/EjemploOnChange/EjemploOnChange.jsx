import React, { useState } from 'react';
import styled from 'styled-components';

const InputForm = styled.input`
  height: 2rem;
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid #4747ff;
  color: white;
  margin-top: 2rem;
  background-color: transparent;
`;

const EjemploOnChange = () => {
  const [value, setValue] = useState();

  const handleValue = e => {
    setValue(e.target.value);
  };

  return (
    <div>
      <p>{value || 'El input esta vacio'}</p>
      <InputForm placeholder='Escribi algo' onChange={handleValue} />
    </div>
  );
};

export default EjemploOnChange;
