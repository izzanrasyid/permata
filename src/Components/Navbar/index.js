import React from 'react';
import { NavbarContainer } from './styles';
import Headerbar from './Headerbar/Headerbar';

const Navbar = ({ setIsLogin }) => {
  return (
    <NavbarContainer>
      <Headerbar setIsLogin={setIsLogin} />
    </NavbarContainer>
  );
};

export default Navbar;
