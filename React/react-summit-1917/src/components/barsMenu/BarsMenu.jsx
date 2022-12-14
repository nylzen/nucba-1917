import React, { useContext } from 'react';
import { MenuContext } from '../../context/Context';
import { HamburgerContainer, Icon } from './BarsMenuStyles';

const BarsMenu = () => {
  const ctx = useContext(MenuContext);
  return (
    <HamburgerContainer onClick={ctx.toggleMenu}>
      <Icon clicked={ctx.isMenuOpen}></Icon>
    </HamburgerContainer>
  );
};

export default BarsMenu;
