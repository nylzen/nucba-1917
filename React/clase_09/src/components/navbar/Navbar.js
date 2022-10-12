import {
  LogoStyled,
  NavbarContainerStyled,
  NavbarStyled,
} from './NavbarStyles';
import Separador from '../separador/Separador';
import { LinkItem } from '../linkItem/LinkItem';

import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  return (
    <NavbarContainerStyled>
      <LogoStyled onClick={() => navigate('/')}>
        <img
          alt='Logo de helado'
          src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1653953150/coding/logoPixel_qihcme.png'
        />
      </LogoStyled>
      <NavbarStyled>
        <Separador />

        {/* <h3>Holis, Aca van los link a las rutas</h3> */}
        <LinkItem to='product'>Productos</LinkItem>
        <LinkItem to='contacto'>Contacto</LinkItem>

        <Separador />
      </NavbarStyled>
    </NavbarContainerStyled>
  );
}

export default Navbar;
