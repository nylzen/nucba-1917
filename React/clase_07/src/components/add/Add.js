import { CounterButtonStyled } from './AddStyles';

import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FaRegTimesCircle } from 'react-icons/fa';
import { RiNumber5 } from 'react-icons/ri';

// Aca adentro no vamos a necesitar, aca queremos manejar el estado, entonces hacemos uso del dispatch
import { useDispatch } from 'react-redux';

import { increment, increment_5, multiply } from '../../actions/counterActions';

const Add = () => {
  // Importantisimo, una vez que importemos el useDispatch, tenemos que decir quien va a ser dispatch
  const dispatch = useDispatch();

  return (
    <>
      <CounterButtonStyled onClick={() => dispatch(increment())}>
        <AiOutlinePlusCircle size='32px' color='white' />
      </CounterButtonStyled>
      <CounterButtonStyled onClick={() => dispatch(increment_5())}>
        <p>
          +<RiNumber5 size='32px' color='white' />
        </p>
      </CounterButtonStyled>
      <CounterButtonStyled onClick={() => dispatch(multiply())}>
        <FaRegTimesCircle size='32px' color='white' />
      </CounterButtonStyled>
    </>
  );
};

export default Add;
