import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes as ReactDomRoutes,
} from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Bands from '../pages/bands/Bands';
import Band from '../pages/band/Band';
import Home from '../pages/home/Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ReactDomRoutes>
          <Route path='/' element={<Home />} />
          <Route path='bands' element={<Bands />} />
          {/* Agregamos la ruta nueva dinamica */}
          <Route path='band/:id' element={<Band />} />
        </ReactDomRoutes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
