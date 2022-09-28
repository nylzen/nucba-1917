import EjemploContexto from './Components/EjemploContexto/EjemploContexto';
import EjemploUseReducer from './Components/EjemploUseReducer/EjemploUseReducer';
import GeneralWrapper from './Components/GeneralWrapper/GeneralWrapper';
import SmallContainer from './Components/SmallContainer/SmallContainer';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GeneralWrapper>
        <SmallContainer>
          <EjemploUseReducer />
          <EjemploContexto />
        </SmallContainer>
      </GeneralWrapper>
      <GlobalStyles />
    </>
  );
}

export default App;
