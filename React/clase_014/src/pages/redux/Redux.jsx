import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CounterStyled,
  CounterSpanStyled,
  CounterButtonContainerStyled,
  CounterButtonStyled,
} from './ReduxStyles';

// Importamos los actionscreator
import { increment, decrement, reset } from '../../actions/counterActions';

const Redux = () => {
  const state = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <CounterStyled>
        <h2>Contador con Redux</h2>
        <CounterButtonContainerStyled>
          <CounterButtonStyled first onClick={() => dispatch(decrement())}>
            -
          </CounterButtonStyled>
          <CounterSpanStyled>{state.count}</CounterSpanStyled>
          <CounterButtonStyled last onClick={() => dispatch(increment())}>
            +
          </CounterButtonStyled>
        </CounterButtonContainerStyled>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </CounterStyled>
    </>
  );
};

export default Redux;
