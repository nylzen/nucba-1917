import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  NavbarContainerStyled,
  LogoStyled,
  TitleStyled,
  LinkContainerStyled,
} from './NavbarStyles';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <NavbarContainerStyled>
      <LogoStyled onClick={() => navigate('/')}>
        <img
          src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1655752940/coding/ReactQuery/LogoNucba_rtlry0.png'
          alt='Nucba'
        />
        <TitleStyled>Repasito</TitleStyled>
      </LogoStyled>
      <LinkContainerStyled>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/fetch'>Fetch</NavLink>
        {/* <NavLink to='/contexto'>Contexto</NavLink> */}
        <NavLink to='/redux'>Redux</NavLink>
      </LinkContainerStyled>
    </NavbarContainerStyled>
  );
};

export default Navbar;
