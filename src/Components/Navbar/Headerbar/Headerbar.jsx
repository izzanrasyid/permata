import React from 'react';
import { TanLogo } from '../../Icons';
import Searchbar from '../../Searchbar';
import { Text, Span } from '../../Text';
import {
  HeaderbarWrapper,
  LogoWrapper,
  SearchWrapper,
  LoginWrapper
} from './styles';

const Headerbar = () => {
  return (
    <HeaderbarWrapper>
      <LogoWrapper>
        <TanLogo />
      </LogoWrapper>
      <SearchWrapper>
        <Searchbar />
      </SearchWrapper>
      <LoginWrapper>
        <Text size={'14px'} weight={'400'} color={'green'}>
          SIGN IN
          &nbsp;
          <Span color={'grey'} size={'14px'} weight={'400'}>| </Span>
          &nbsp;
          <Span color={'black'} size={'14px'} weight={'400'}>SIGN UP</Span>
        </Text>
      </LoginWrapper>
    </HeaderbarWrapper>
  );
};

export default Headerbar;