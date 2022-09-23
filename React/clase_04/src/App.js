import Contador from './Components/Contador/Contador';
import Cronometro from './Components/Cronometro/Cronometro';
import EjemploOnChange from './Components/EjemploOnChange/EjemploOnChange';
import EjemploOnClick from './Components/EjemploOnClick/EjemploOnClick';
import EjemploOnSubmit from './Components/EjemploOnSubmit/EjemploOnSubmit';
import EjemploUseRef from './Components/EjemploUseRef/EjemploUseRef';
import GeneralWrapper from './Components/GeneralWrapper/GeneralWrapper';
import SmallContainer from './Components/SmallContainer/SmallContainer';

function App() {
  return (
    <GeneralWrapper>
      <h1>Ejemplukis: 👇🏻</h1>
      <SmallContainer>
        {/* <Contador /> */}
        {/* <EjemploUseRef /> */}
        {/* <EjemploOnClick /> */}
        {/* <EjemploOnChange /> */}
        {/* <EjemploOnSubmit /> */}
        <Cronometro />
      </SmallContainer>
    </GeneralWrapper>
  );
}

export default App;
