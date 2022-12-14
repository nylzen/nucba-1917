import React, { useContext } from 'react';
import { MenuContext } from '../../context/Context';
import BarsMenu from '../barsMenu/BarsMenu';
import {
  LastNavbarItem,
  Logo,
  Navbar,
  NavbarItem,
  NavbarList,
  StyledHeader,
} from './HeaderStyles';

const Header = ({ refs }) => {
  const ctx = useContext(MenuContext);
  const { aboutUsRef, heroRef, lineupRef, speakersRef } = refs;

  const scrollTo = ref => {
    ref.current.scrollIntoView();
    ctx.toggleMenu();
  };

  return (
    <>
      <StyledHeader>
        <Logo src='images/logo.png' alt='Logo de Nucba' />
        <Navbar isOpen={ctx.isMenuOpen}>
          <NavbarList>
            <NavbarItem onClick={() => scrollTo(heroRef)}>Inicio</NavbarItem>
            <NavbarItem onClick={() => scrollTo(aboutUsRef)}>
              Nosotros
            </NavbarItem>
            <NavbarItem onClick={() => scrollTo(lineupRef)}>Line-up</NavbarItem>
            <LastNavbarItem onClick={() => scrollTo(speakersRef)}>
              Speakers
            </LastNavbarItem>
          </NavbarList>
        </Navbar>
        <BarsMenu />
      </StyledHeader>
    </>
  );
};

export default Header;
