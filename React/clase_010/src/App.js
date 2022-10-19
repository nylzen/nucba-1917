import { ReactQueryDevtools } from 'react-query/devtools';
import { GlobalStyles } from './styles/GlobalStyles';
import Routes from './routes/Routes';

function App() {
  return (
    <>
      <Routes />
      <ReactQueryDevtools />
      <GlobalStyles />
    </>
  );
}

export default App;
