// import logo from './logo.svg';
// import './App.css';

import React from 'react';
import AppWrapper from './components/AppWrapper/AppWrapper';
import EjemploEnLinea from './components/EjemploEnLinea/EjemploEnLinea';
import EjemploModule from './components/EjemploModule/EjemploModule';
import EjemploObjeto from './components/EjemploObjeto/EjemploObjeto';
import EjemploStyled from './components/EjemploStyled/EjemploStyled';
import GlobalStyle from './components/GlobalStyle/GlobalStyle';

function App() {
  return (
    <>
      <AppWrapper>
        <EjemploEnLinea></EjemploEnLinea>
        <EjemploObjeto />
        <EjemploModule />
        <EjemploStyled />
      </AppWrapper>
      <GlobalStyle />
    </>
  );
}

export default App;
