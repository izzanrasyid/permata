import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
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
import { useDispatch } from "react-redux";
import { setLogin } from "../../store/action";

const Login = ({ setIsLogin, isLoading }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [payload, setPayload] = useState({});

  const onChange = (value, key) => {
    setPayload({...payload, [key]: value.target.value});
  };

  const login = () => {
    dispatch(setLogin(payload));
    if (!isLoading) {
      setIsLogin(false);
      navigate('/');
    };
  };

  return (
    <Container>
      <LoginContainer>
        <TitleWrapper>
          <Text size={'29px'} weight={'400'} color={'#42495B'}>Login</Text>
        </TitleWrapper>
        <InputWrapper>
          <Input type={"text"} placeholder={"Username"} name={"username"} onChange={(value) => onChange(value, 'username')} />
        </InputWrapper>
        <InputWrapper>
          <Input type={"password"} placeholder={"Password"} name={"password"} onChange={(value) => onChange(value, 'password')} />
        </InputWrapper>
        <ButtonWrapper onClick={login}>
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