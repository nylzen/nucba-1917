import React from 'react';
import { useState } from 'react';

const Search = ({ handleSubmit }) => {
  const [character, setCharacter] = useState('');

  return (
    <form
      onSubmit={e => {
        handleSubmit(e, character);
        setCharacter('');
      }}
    >
      <input
        value={character}
        placeholder='Buscar'
        onChange={e => setCharacter(e.target.value)}
      />
      <button>Buscar</button>
    </form>
  );
};

export default Search;
