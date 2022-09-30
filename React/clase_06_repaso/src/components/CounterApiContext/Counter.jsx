import { useCountContext } from '../../context/CountContex';
import Add from '../Add/Add';
import {
  CounterContainerStyled,
  CounterSpanStyled,
} from '../CounterUseState/CounterStyles';
import Reset from '../Reset/Reset';
import Substract from '../Substract/Substract';
import { CounterButtonContainerStyled } from './CounterStyles';

const Counter = () => {
  const { state } = useCountContext();

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
