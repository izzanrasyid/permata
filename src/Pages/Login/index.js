import React from "react";
import {
  Container,
  LoginContainer,
  TitleWrapper,
  InputWrapper,
  ForgetPasswordWrapper,
  ButtonWrapper,
  RegisterWrapper
} from "./styles";
import { Text } from "../../Components/Text";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const Login = ({ setIsLogin }) => {

  return (
    <Container>
      <LoginContainer>
        <TitleWrapper>
          <Text size={'29px'} weight={'400'} color={'#42495B'}>Login</Text>
        </TitleWrapper>
        <InputWrapper>
          <Input type={"text"} placeholder={"Username"} name={"username"} />
        </InputWrapper>
        <InputWrapper>
          <Input type={"password"} placeholder={"Password"} name={"password"} />
        </InputWrapper>
        <ButtonWrapper>
          <Button text={'LOGIN'} color={'#4CAF50'}/>
        </ButtonWrapper>
        <ForgetPasswordWrapper>
          <Text size={'16px'} weight={'400'} color={'#737373'}>Forgot your password?</Text>
        </ForgetPasswordWrapper>
        <RegisterWrapper>
          <Text size={'16px'} weight={'400'} color={'#737373'}>Belum punya akun?</Text>
        </RegisterWrapper>
        <ButtonWrapper>
          <Button text={'REGISTER'} color={'#2D9CDB'}/>
        </ButtonWrapper>
        <ButtonWrapper onClick={() => setIsLogin(false)}>
          <Button text={'CANCEL'} color={'red'}/>
        </ButtonWrapper>
      </LoginContainer>
    </Container>
  );
};

export default Login;