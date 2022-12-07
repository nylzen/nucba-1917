import AboutUs from './components/aboutUs/AboutUs';
import { Main } from './components/globalComponents/GlobalComponents';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Speakers from './components/Speakers/Speakers';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>
        <Hero />
        <Speakers />
        <AboutUs />
      </Main>

      {/* Line Up */}
      {/* Main */}
      {/* Footer */}
    </>
  );
}

export default App;
