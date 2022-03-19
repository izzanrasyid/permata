import React from 'react';
import styled from 'styled-components';
import { Text } from '../../Text';

const CardWrapper = styled.div`
  background: #FFFFFF;
  padding: 2%;
  margin: 2% 0;
  align-text: center;
  display: flex;
  justify-content: center;
`;

const Card = (props) => {
  return (
    <CardWrapper>
      <Text size={'28px'} weight={'700'} color={'#000'}>
        {props.children}
      </Text>
    </CardWrapper>
  );
};

export default Card;
