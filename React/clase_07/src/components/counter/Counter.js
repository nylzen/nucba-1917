import {
  CounterContainerStyled,
  CounterSpanStyled,
  CounterButtonContainerStyled,
} from './CounterStyles';
import Reset from '../reset/Reset';

import Substract from '../substract/Substract';
import Add from '../add/Add';

// Aca necesitamos traernos del store el estado actual, para hacer eso usamos useSelector
import { useSelector } from 'react-redux';

const Counter = () => {
  const state = useSelector(state => state.counter);
  // console.log(state);

  return (
    <CounterContainerStyled>
      <CounterButtonContainerStyled>
        <Substract />
        <CounterSpanStyled>{state.count}</CounterSpanStyled>
        <Add />
      </CounterButtonContainerStyled>

      <Reset />
    </CounterContainerStyled>
  );
};

export default Counter;
