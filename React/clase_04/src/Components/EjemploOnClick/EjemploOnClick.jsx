import React, { useState } from 'react';
import { ButtonPrimary } from '../EjemploUseRef/EjemploUseRef';

const EjemploOnClick = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handlerToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <>
      {isToggle ? <span>Es true</span> : <span>Es False</span>}
      <ButtonPrimary onClick={handlerToggle}>Toggle</ButtonPrimary>
    </>
  );
};

export default EjemploOnClick;
