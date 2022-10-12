import Layout from '../components/layout/Layout';
import Home from '../pages/home/Home';

import { Route, Routes as ReactDomRoutes } from 'react-router-dom';

import Error404 from '../pages/error404/Error404';
import Contacto from '../pages/contacto/Contacto';
import Product from '../pages/productos/Product';
import Section from '../pages/section/Section';

function Routes() {
  return (
    <Layout>
      <ReactDomRoutes>
        {/* Seteamos el path de home */}
        <Route path='/' element={<Home />} />
        {/* Seteamos el path de contacto */}
        <Route path='contacto' element={<Contacto />} />
        {/* Rutas anidadas */}
        <Route path='product'>
          <Route index element={<Product />} />
          <Route path=':product' element={<Section />} />
        </Route>
        {/* Seteamos el path del 404 */}
        <Route path='*' element={<Error404 />} />
      </ReactDomRoutes>
    </Layout>
  );
}

export default Routes;
