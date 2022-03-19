import React from "react";
import styled from "styled-components";
import { Text } from "../Text";

const Wrapper = styled.div`
  background: ${({ color }) => (color)};
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 2%;
  border-radius: 3px;
  cursor: pointer;
`;

const Button = ({color, text}) => {
  console.log(text, 'text');
  return (
    <Wrapper color={color} >
      <Text size={'16px'} weight={'700'} color={'#FFF'}>{text}</Text>
    </Wrapper>
  );
};

export default Button;