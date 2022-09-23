import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import { CounterContainer } from '../Contador/ContadorStyles';
import { ButtonPrimary } from '../EjemploUseRef/EjemploUseRef';

const Cronometro = () => {
  const [count, setCount] = useState(0);

  let id = useRef();

  useEffect(() => {
    id.current = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
    console.log(id);
  }, []);

  const stopIncrement = () => {
    return clearInterval(id.current);
  };

  return (
    <>
      <p>Cronometro</p>
      <CounterContainer>
        <span style={{ fontSize: '2rem' }}>{count}</span>
        <ButtonPrimary onClick={stopIncrement}>Stop</ButtonPrimary>
      </CounterContainer>
    </>
  );
};

export default Cronometro;
