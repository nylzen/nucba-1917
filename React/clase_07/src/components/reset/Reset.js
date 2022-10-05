import { BiReset } from 'react-icons/bi';

// importar useDispatch
import { useDispatch } from 'react-redux';
// importar el action
import { reset } from '../../actions/counterActions';

const Reset = () => {
  // Le decimos quien va a ser dispatch
  const dispatch = useDispatch();

  return (
    <BiReset
      cursor='pointer'
      size='38px'
      color='#F24C4C'
      onClick={() => dispatch(reset())}
    />
  );
};

export default Reset;
