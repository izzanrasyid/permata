import React from 'react';
import { NavbarContainer } from './styles';
import Headerbar from './Headerbar/Headerbar';

const Navbar = ({ setIsLogin, toLogout }) => {
  return (
    <NavbarContainer>
      <Headerbar setIsLogin={setIsLogin} toLogout={toLogout} />
    </NavbarContainer>
  );
};

export default Navbar;
