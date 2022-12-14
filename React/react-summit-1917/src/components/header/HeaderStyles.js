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

  @media (max-width: 992px) {
    padding: 0 50px 0 10px;
  }
`;

export const Logo = styled.img`
  height: 70%;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 992px) {
    position: absolute;
    background-color: var(--black);
    background-image: var(--bg-img);
    flex-direction: column;
    top: 100px;
    right: 0;
    width: 100%;
    height: calc(100vh - 100px);
    display: flex;
    z-index: 5;
    transition: 0.4s all ease-in-out;
    transform: ${props =>
      props.isOpen ? 'translateX(0)' : 'translateX(200%)'};
  }
`;

export const NavbarList = styled.ul`
  display: flex;
  align-items: center;
  gap: 50px;

  @media (max-width: 992px) {
    flex-direction: column;
  }
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
