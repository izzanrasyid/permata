import React from "react";
import styled from "styled-components";
import Text from "../../Text/Span";
import Card from "./Card";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Title = styled.div`
  padding: 5% 0;
`;

const Subtitle = styled.div`
  padding-bottom: 5%; 
`;

const Contacts = () => {
  return (
    <Container>
      <Title>
        <Text size={'22px'} weight={'400'} color={'#FFF'}>
          Get in touch
        </Text>
      </Title>
      <Subtitle>
        <Text size={'16px'} weight={'400'} color={'#818AA4'}>
          Contact us if you need help with anything
        </Text>
      </Subtitle>
      <Card />
      <Card />
    </Container>
  );
};

export default Contacts;