import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.77);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  width: 60%;
  background: #FFF;
  box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.25);
  border-radius: 12px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const TabContainer = styled.div`
  display: flex;
`;

export const TabButtonLeft = styled.div`
  border-right: 0.2px solid #868686;
  border-bottom: ${({ active }) => active ? 'none;' : '0.2px solid #868686;'}
  flex: 1;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5% 2%;
  flexing-wrap: wrap;
`;

export const TabButtonRight = styled.div`
  text-align: center;
  border-bottom: ${({ active }) => active ? 'none;' : '0.2px solid #868686;'}
  flex: 1;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5% 2%;
  flexing-wrap: wrap;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  Padding: 5%;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5% 2.5% 5%;
`;

export const CheckboxWrapper = styled.div`
  padding: 0 5%;
`;

export const ButtonWrapper = styled.div`
  margin: 2% 5%;

  @media (max-width: 768px) {
    margin: 5%;
  }
`;

export const ForgetPasswordWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  Padding: 2% 0 4% 0;
  margin: 0 5%;
  border-bottom: 1px solid #E8E8E8;
  cursor: pointer;
`;

export const RegisterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  Padding: 4% 0 2% 0;
  margin: 0 5%;
  cursor: pointer;
`;