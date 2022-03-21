import React from "react";
import styled from "styled-components";
import { Text } from "../Text";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.77);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = () => {
  return (
    <Container>
      <Text size={'50px'} weight={'700'} color={'#FFF'}>LOADING ...</Text>
    </Container>
  );
};

export default Loading;