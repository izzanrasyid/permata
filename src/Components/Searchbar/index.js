import React from "react";
import { IconSearch } from "../Icons";
import {
  SearchbarContainer,
  InputWrapper,
  IconWrapper,
  Input
} from './Styles';

const Searchbar = () => {
  return (
    <SearchbarContainer>
      <InputWrapper>
        <Input class="input-field" type="text" placeholder="Search .." name="search" ></Input>
      </InputWrapper>
      <IconWrapper>
        <IconSearch />
      </IconWrapper>
    </SearchbarContainer>
  );
};

export default Searchbar;