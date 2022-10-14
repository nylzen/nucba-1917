import Layout from '../components/layout/Layout';
import Home from '../pages/home/Home';

import { Route, Routes as ReactDomRoutes } from 'react-router-dom';

import Error404 from '../pages/error404/Error404';
import Contacto from '../pages/contacto/Contacto';
import Product from '../pages/productos/Product';
import Section from '../pages/section/Section';

// Clase 2 Rutas privadas
import Login from '../pages/login/Login';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import ProtectedRoute from '../components/protectedRoute/ProtectedRoute';
import User from '../pages/user/User';

function Routes() {
  const { isAuth } = useContext(AuthContext);
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

        {/* Seteamos el path de Login */}

        {!isAuth && <Route path='login' element={<Login />} />}

        <Route
          path='usuario/:username'
          element={
            <ProtectedRoute redirecTo={'/login'}>
              <User />
            </ProtectedRoute>
          }
        />

        {/* Seteamos el path del 404 */}
        <Route path='*' element={<Error404 />} />
      </ReactDomRoutes>
    </Layout>
  );
}

export default Routes;
