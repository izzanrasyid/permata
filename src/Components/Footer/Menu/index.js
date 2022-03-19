import React from "react";
import styled from "styled-components";
import { Text } from "../../Text";
import { menuList } from '../constant';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Link = styled.div`
  cursor: pointer;
  font-size: 16px;
  color: #818AA4;
  font-weight: 400;
  transition: all 0.3s ease-in;
  padding: 2% 0;

  &:hover {
    color: #4CAF50;
  }
`;

const Title = styled.div`
  padding: 5% 0;
`;

const Menu = () => {
  return (
    <Container>
      <Title>
        <Text size={'22px'} weight={'400'} color={'#FFF'}>Menu</Text>
      </Title>
      { menuList.map((list, id) => (<Link key={id}>{list}</Link>)) }
    </Container>
  );
};

export default Menu;