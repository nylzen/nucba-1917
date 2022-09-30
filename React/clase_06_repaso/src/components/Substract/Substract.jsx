import React from 'react';
import { useCountContext } from '../../context/CountContex';
import { TYPES } from '../../actionTypes/countActions';

import { FiDivideCircle } from 'react-icons/fi';
import { RiNumber5 } from 'react-icons/ri';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { CounterButtonStyled } from './SubstractStyles';

const Substract = () => {
  const { dispatch } = useCountContext();

  const handleDecrement = () => dispatch({ type: TYPES.DECREMENT });

  const handleDivide = () => dispatch({ type: TYPES.DIVIDE });

  const handleDecrement_5 = () => dispatch({ type: TYPES.DECREMENT_5 });

  return (
    <>
      <CounterButtonStyled last onClick={handleDivide}>
        <FiDivideCircle size='32px' color='white' />
      </CounterButtonStyled>
      <CounterButtonStyled onClick={handleDecrement_5}>
        <p>
          -<RiNumber5 size='32px' color='white' />
        </p>
      </CounterButtonStyled>
      <CounterButtonStyled onClick={handleDecrement}>
        <AiOutlineMinusCircle size='32px' color='white' />
      </CounterButtonStyled>
    </>
  );
};

export default Substract;
