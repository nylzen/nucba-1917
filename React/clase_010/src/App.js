import { AppContainerStyled } from './AppStyles';
import Card from './components/card/Card';
import { GlobalStyles } from './styles/GlobalStyles';
import axios from 'axios';
import { useQuery } from 'react-query';
import Loader from './components/loader/Loader';
import { ReactQueryDevtools } from 'react-query/devtools';
// Hacemos la peticion a la api que levantamos
const fetchBands = () => {
  return axios.get('http://localhost:3006/bandas');
};

function App() {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    'bands',
    fetchBands,
    {
      staleTime: 3000,
    }
  );
  return (
    <>
      {isLoading && <Loader />}
      {isError && (
        <h2 style={{ color: 'red', textAlign: 'center' }}>{error.message}</h2>
      )}
      <AppContainerStyled>
        {data?.data.map(band => (
          <Card key={band.id} {...band} />
        ))}
      </AppContainerStyled>

      {isFetching && (
        <h2 style={{ color: 'white', textAlign: 'center' }}>Validando datos</h2>
      )}
      <ReactQueryDevtools />
      <GlobalStyles />
    </>
  );
}

export default App;
