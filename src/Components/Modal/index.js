import React from "react";
import styled from "styled-components";
import { Text } from "../Text";
import Button from "../Button";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.77);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.div`
  width: 50%;
  background: #FFF;
  box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.25);
  border-radius: 12px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 50%;
  }
`;

export const TitleWrapper = styled.div`
  padding: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  padding: 0 5% 5% 5%;
`;

export const ButtonWrapper = styled.div`
  flex: 1;
  border-top: 1px solid #FFF;
  margin: 2%;
`;

const Modal = ({ setIsLogout, setIsLoggedIn }) => {

  const logout = () => {
    localStorage.clear();
    setIsLogout(false);
    setIsLoggedIn(false);
  };

  const cancelLogout = () => {
    setIsLogout(false);
  };
  return (
    <Container>
      <CardContainer>
        <TitleWrapper>
          <Text size={'29px'} weight={'400'} color={'#42495B'}>Yakin ingin keluar ?</Text>
        </TitleWrapper>
        <ButtonsWrapper>
          <ButtonWrapper onClick={logout}>
            <Button text={'Ya'} color={'green'} />
          </ButtonWrapper>
          <ButtonWrapper onClick={cancelLogout}>
            <Button text={'Batalkan'} color={'red'} />
          </ButtonWrapper>
        </ButtonsWrapper>
      </CardContainer>
    </Container>
  );
};

export default Modal;