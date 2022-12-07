import React from 'react';
import {
  LastNavbarItem,
  Logo,
  Navbar,
  NavbarItem,
  NavbarList,
  StyledHeader,
} from './HeaderStyles';

const Header = () => {
  return (
    <>
      <StyledHeader>
        <Logo src='images/logo.png' alt='Logo de Nucba' />
        <Navbar>
          <NavbarList>
            <NavbarItem>Inicio</NavbarItem>
            <NavbarItem>Nosotros</NavbarItem>
            <NavbarItem>Line-up</NavbarItem>
            <LastNavbarItem>Speakers</LastNavbarItem>
          </NavbarList>
        </Navbar>
      </StyledHeader>
    </>
  );
};

export default Header;
