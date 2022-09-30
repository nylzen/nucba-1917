import './App.css';
// import Counter from './components/CounterUseReducer/Counter';
// import Counter from './components/CounterUseState/Counter';
import Logo from './components/logo/Logo';
import GlobalStyle from './styles/GlobalStyles';
import { CountContextProvider } from './context/CountContex';
import Counter from './components/CounterApiContext/Counter';

function App() {
  return (
    <>
      <CountContextProvider>
        <Counter />
      </CountContextProvider>
      <Logo />
      <GlobalStyle />
    </>
  );
}

export default App;
