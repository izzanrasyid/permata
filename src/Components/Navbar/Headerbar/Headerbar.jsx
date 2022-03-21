import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { TanLogo } from '../../Icons';
import Searchbar from '../../Searchbar';
import { Text, Span } from '../../Text';
import {
  HeaderbarWrapper,
  LogoWrapper,
  SearchWrapper,
  LoginWrapper
} from './styles';

const Headerbar = ({ setIsLogin }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('access_token');
  
  const logout = () => {
    navigate('/');
    localStorage.clear();
  };

  return (
    <HeaderbarWrapper>
      <LogoWrapper>
        <TanLogo />
      </LogoWrapper>
      <SearchWrapper>
        <Searchbar />
      </SearchWrapper>
      {
        token ? 
        <LoginWrapper onClick={logout}>
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
  );
};

export default Headerbar;