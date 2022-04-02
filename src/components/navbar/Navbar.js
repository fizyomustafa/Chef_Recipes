import React, { useState } from 'react';
import { Nav, Logo, Hamburger, MenuLink, Menu } from './NavbarStyle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo to="/">
        <i>{'<CHEF MUSTAFA`s>'}</i>
        <span>recipes</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>

      <Menu isOpen={isOpen}>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to="/github">Github</MenuLink>
        <MenuLink to="/login">Login</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
