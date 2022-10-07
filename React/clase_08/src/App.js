import { useState } from 'react';
import GlobalStyles from './Styles/GlobalStyles';
import { MyAppStyled } from './AppStyles';

import Search from './components/search/Search';
import Pokemon from './components/PokemonCard/card/Card';
import Loader from './components/loader/Loader';
import { useSelector } from 'react-redux';

// Importamos axios
// import axios from 'axios';

// Importamos nuestroCustomHook
// import { useAxios } from './hooks/useAxios';

function App() {
  // Esto era del custom hook
  // const { isLoading, data, error, handleSubmit } = useAxios();
  const state = useSelector(state => state.pokemon);

  return (
    <>
      <MyAppStyled>
        <Search />
        {state.isLoading && <Loader />}
        {state.error && <h2 style={{ color: '#f24c4c' }}>{state.error}</h2>}
        {state.data && <Pokemon {...state.data} />}
      </MyAppStyled>
      <GlobalStyles />
    </>
  );
}

export default App;
