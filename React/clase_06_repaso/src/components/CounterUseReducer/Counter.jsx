import React, { useReducer } from 'react';
import {
  CounterButtonStyled,
  CounterContainerStyled,
  CounterSpanStyled,
} from '../CounterUseState/CounterStyles';
import { CounterButtonContainerStyled } from './CounterStyles';
import { FiDivideCircle } from 'react-icons/fi';
import { RiNumber5 } from 'react-icons/ri';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { FaRegTimesCircle } from 'react-icons/fa';
import { BiReset } from 'react-icons/bi';
import { counterInitialState, countReducer } from '../../reducers/countReducer';
import { TYPES } from '../../actionTypes/countActions';

const Counter = () => {
  const [state, dispatch] = useReducer(countReducer, counterInitialState);

  const handleIncrement = () => dispatch({ type: TYPES.INCREMENT });

  const handleDecrement = () => dispatch({ type: TYPES.DECREMENT });

  const handleIncrement_5 = () => dispatch({ type: TYPES.INCREMENT_5 });

  const handleDecrement_5 = () => dispatch({ type: TYPES.DECREMENT_5 });

  const handleDivide = () => dispatch({ type: TYPES.DIVIDE });

  const handleMultiply = () => dispatch({ type: TYPES.MULTIPLY });

  const handleReset = () => dispatch({ type: TYPES.RESET });

  return (
    <CounterContainerStyled>
      <CounterButtonContainerStyled>
        <CounterButtonStyled left onClick={handleDivide}>
          <FiDivideCircle size='32px' color='white' />
        </CounterButtonStyled>
        <CounterButtonStyled onClick={handleDecrement_5}>
          <p>
            -
            <RiNumber5 size='32px' color='white' />
          </p>
        </CounterButtonStyled>
        <CounterButtonStyled onClick={handleDecrement}>
          <AiOutlineMinusCircle size='32px' color='white' />
        </CounterButtonStyled>
        {/* Span */}
        <CounterSpanStyled>{state.count}</CounterSpanStyled>
        {/* + */}
        <CounterButtonStyled onClick={handleIncrement}>
          <AiOutlinePlusCircle size='32px' color='white' />
        </CounterButtonStyled>
        <CounterButtonStyled onClick={handleIncrement_5}>
          <p>
            +<RiNumber5 size='32px' color='white' />
          </p>
        </CounterButtonStyled>
        <CounterButtonStyled right onClick={handleMultiply}>
          <FaRegTimesCircle size='32px' color='white' />
        </CounterButtonStyled>
      </CounterButtonContainerStyled>
      <BiReset
        cursor='pointer'
        size='38px'
        color='crimson'
        onClick={handleReset}
      />
    </CounterContainerStyled>
  );
};

export default Counter;
