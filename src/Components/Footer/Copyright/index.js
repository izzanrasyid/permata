import React from "react";
import styled from "styled-components";
import Text from "../../Text/Span";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-text: center;
  margin: 0 5%;
  padding: 2% 10%;
  border-top: 1px solid rgba(232, 232, 232, 0.3);
`;

const Copyright = () => {
  return (
    <Container>
      <Text size={'Copyright © PT TENAGA ALAMI NUSANTARA'} color={"#BEBEBE"}>
        Copyright © PT Hadapi Dengan Senyuman
      </Text>
    </Container>
  );
};

export default Copyright;