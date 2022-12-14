import { useRef } from 'react';
import AboutUs from './components/aboutUs/AboutUs';
import Footer from './components/footer/Footer';
import { Main } from './components/globalComponents/GlobalComponents';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import LineUp from './components/lineUp/LineUp';
import Speakers from './components/Speakers/Speakers';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  const aboutUsRef = useRef();
  const heroRef = useRef();
  const lineupRef = useRef();
  const speakersRef = useRef();

  return (
    <>
      <GlobalStyles />
      <Header refs={{ aboutUsRef, heroRef, lineupRef, speakersRef }} />
      <Main>
        <Hero ref={heroRef} />
        <Speakers ref={speakersRef} />
        <AboutUs ref={aboutUsRef} />
        <LineUp ref={lineupRef} />
      </Main>
      <Footer />
    </>
  );
}

export default App;
