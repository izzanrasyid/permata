import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #E8E8E8;
  width: 100%;
  height: 50px;
  border-radius: 3px;
`;

const InputField = styled.input`
  border: none;
  width: 100%;
  padding: 1%;

  &:focus {
    outline: none;
  }
  ::placeholder {
    color: grey;
  }
`;

const Input = ({ type, placeholder, name }) => {
  return (
    <Container>
      <InputField type={type} placeholder={placeholder} name={name}></InputField>
    </Container>
  );
};

export default Input;