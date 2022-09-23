import React, { useState } from 'react';
import { CounterContainer, CounterButton } from './ContadorStyles';

const Contador = () => {
  const [count, setCount] = useState(5);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <CounterContainer>
      <CounterButton onClick={handleDecrement}>-</CounterButton>
      {/* <CounterButton onClick={() => setCount(count - 1)}>Holis</CounterButton> */}
      <p>{count}</p>
      <CounterButton onClick={handleIncrement}>+</CounterButton>
    </CounterContainer>
  );
};

export default Contador;
