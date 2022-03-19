import React from "react";
import styled from "styled-components";
import { Text } from "../../Text";
import { IconWhatsapp } from "../../Icons";

const CardContainer = styled.div`
  height: 50px;
  width: 190px;
  background-color: #4CAF50;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2% 0;
  border-radius: 3px;
  cursor: pointer;
`;

const TextContainer = styled.div`
  padding: 0 5%;
`;

const Card = () => {
  return (
    <CardContainer>
      <IconWhatsapp />
      <TextContainer>
        <Text size={'14px'} weight={700} color={'white'}>08123456789</Text>
      </TextContainer>
    </CardContainer>
  );
};

export default Card;
