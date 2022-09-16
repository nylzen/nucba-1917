// import logo from './logo.svg';
import './App.css';
import Condicional from './components/Condicional/Condicional';
import Ejemplo from './components/Ejemplo/Ejemplo';
import {
  EjemploFuncional,
  EjemploFuncional2,
} from './components/EjemploFuncional/EjemploFuncional';
import EjemploMap from './components/EjemploMap/EjemploMap';
import MapComponente from './components/MapComponente/MapComponente';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>Aguante la 1917</p>
        <Ejemplo />
        {/* Hacemos dinamico el componente pasandole unas props */}

        <EjemploFuncional pepeTexto={'Hola soy otro texto pasado por props'} />
        <EjemploFuncional2 />
        <Condicional />
        <p>Renderizado con map</p>
        <EjemploMap />
        <p>Renderizando con maps componentes</p>
        <MapComponente />
      </header>
    </div>
  );
}

export default App;
