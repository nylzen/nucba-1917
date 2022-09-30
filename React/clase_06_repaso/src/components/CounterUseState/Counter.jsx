import React, { useState } from 'react';
import {
  CounterButtonStyled,
  CounterContainerStyled,
  CounterSpanStyled,
} from './CounterStyles';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <CounterContainerStyled>
      {/* Boton -  */}
      <CounterButtonStyled left onClick={handleDecrement}>
        <AiOutlineMinusCircle size='32px' color='white' />
      </CounterButtonStyled>
      {/* Aca va el span */}
      <CounterSpanStyled>{count}</CounterSpanStyled>
      {/* Boton + */}
      <CounterButtonStyled onClick={handleIncrement}>
        <AiOutlinePlusCircle size='32px' color='white' />
      </CounterButtonStyled>
    </CounterContainerStyled>
  );
};

export default Counter;
