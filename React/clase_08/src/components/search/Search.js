import React, { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { SearchFormStyled, InputStyled, ButtonStyled } from './SearchStyles';

import { useDispatch } from 'react-redux';
import { fetchPokemon } from '../../actions/pokemonActions';

const Search = ({ handleSubmit }) => {
  const [pokemon, setPokemon] = useState('');
  const dispatch = useDispatch();

  return (
    <SearchFormStyled
      onSubmit={e => {
        // handleSubmit(e, pokemon);
        dispatch(fetchPokemon(e, pokemon));
        setPokemon('');
      }}
    >
      <InputStyled
        placeholder='Search'
        value={pokemon}
        onChange={e => setPokemon(e.target.value)}
      />

      <ButtonStyled type='submit'>
        <ImSearch size='20' color='#c1c0c9' />
      </ButtonStyled>
    </SearchFormStyled>
  );
};

export default Search;
