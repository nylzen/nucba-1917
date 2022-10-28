import Routes from './routes/Routes';
import { GlobalStyles } from './styles/GlobalStyles';
// Contexto APIContext
// import { ContextoProvider } from './context/index';

// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <>
      <Provider store={store}>
        {/* <ContextoProvider> */}
        <Routes />
        {/* </ContextoProvider> */}
      </Provider>
      <GlobalStyles />
    </>
  );
}

export default App;
