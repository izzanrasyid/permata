import React from "react";
import styled from "styled-components";
import Text from "../../Text/Span";
import playStore from "../../../public/Footer/image 2.png";
import appStore from "../../../public/Footer/image 3.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Title = styled.div`
  padding: 5% 0;
`;

const CardPlayStore = styled.div`
  margin-bottom: 2%;
  height: 42px;
  width: 142px;
  background-image: url(${playStore});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const CardAppStore = styled.div`
  margin-bottom: 2%;
  height: 42px;
  width: 142px;
  background-image: url(${appStore});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Download = () => {
  return (
    <Container>
      <Title>
        <Text size={'22px'} weight={'400'} color={'#FFF'}>Download Aplikasi</Text>
      </Title>
      <CardPlayStore />
      <CardAppStore />
    </Container>
  );
};

export default Download;