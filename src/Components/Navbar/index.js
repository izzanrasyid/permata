import React from 'react';
import {
  NavbarContainer,
  HeaderbarWrapper,
  LogoWrapper,
  SearchWrapper,
  LoginWrapper
} from './styles';
import Searchbar from '../Searchbar';
import { Text, Span } from '../Text';

const Navbar = ({ setIsLogin, toLogout }) => {
  const token = localStorage.getItem('access_token');

  return (
    <NavbarContainer>
      <HeaderbarWrapper>
        <LogoWrapper>
          <Text size={'44px'} weight={'800'}>HDS</Text>
        </LogoWrapper>
        <SearchWrapper>
          <Searchbar />
        </SearchWrapper>
        {
          token && token !== 'undefined' ? 
          <LoginWrapper onClick={toLogout}>
            <Text size={'14px'} weight={'400'} color={'red'} >LOGOUT</Text>
          </LoginWrapper>
          :
          <LoginWrapper onClick={() => setIsLogin(true)}>
            <Text size={'14px'} weight={'400'} color={'green'}>
              SIGN IN
              &nbsp;
              <Span color={'grey'} size={'14px'} weight={'400'}>| </Span>
              &nbsp;
              <Span color={'black'} size={'14px'} weight={'400'}>SIGN UP</Span>
            </Text>
          </LoginWrapper>
        }
      </HeaderbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
