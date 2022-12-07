import styled from 'styled-components';

export const StyledHeader = styled.header`
  margin: 0 auto;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px 0 50px;
  position: fixed;
  width: 100%;
  z-index: 2;
  background-color: var(--black);
  background-image: var(--bg-img);
`;

export const Logo = styled.img`
  height: 70%;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavbarList = styled.ul`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const NavbarItem = styled.li`
  position: relative;
  color: white;
  font-size: 22px;
  cursor: pointer;

  &::after {
    content: '';
    height: 2px;
    width: 100%;
    background: var(--blue);
    position: absolute;
    bottom: -4px;
    left: 0;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.15s ease;
  }

  &:hover::after {
    transform-origin: bottom left;
    transform: scaleX(1);
  }
`;

export const LastNavbarItem = styled.li`
  color: white;
  font-size: 22px;
  border: 1px solid var(--blue);
  padding: 8px 40px;
  border-radius: 3px;
  transition: all 0.2s linear;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: var(--blue);
  }
`;
