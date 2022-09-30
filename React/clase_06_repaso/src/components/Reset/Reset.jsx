import React from 'react';
import { useCountContext } from '../../context/CountContex';
import { TYPES } from '../../actionTypes/countActions';
import { BiReset } from 'react-icons/bi';

const Reset = () => {
  const { dispatch } = useCountContext();

  const handleReset = () => dispatch({ type: TYPES.RESET });

  return (
    <BiReset
      cursor='pointer'
      size='38px'
      color='#F24C4C'
      onClick={handleReset}
    />
  );
};

export default Reset;
