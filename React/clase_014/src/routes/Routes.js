import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes as ReactDomRoutes,
} from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Wrapper from '../components/wrapper/Wrapper';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Fetch from '../pages/Fetch/Fetch';
import Contexto from '../pages/contexto/Contexto';
import Redux from '../pages/redux/Redux';

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Wrapper>
          <ReactDomRoutes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='fetch' element={<Fetch />} />
            <Route path='contexto' element={<Contexto />} />
            <Route path='redux' element={<Redux />} />
          </ReactDomRoutes>
        </Wrapper>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
