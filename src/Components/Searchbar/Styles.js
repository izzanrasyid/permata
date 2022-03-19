import styled from 'styled-components';

export const SearchbarContainer = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid rgba(134, 134, 134, 0.1);
  border-radius: 3px;
`;

export const InputWrapper = styled.div`
  padding: 9px;
  flex: 95%;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex: 5%;
  justify-content: flex-end;
  align-items: center;
  padding: 9px;
  cursor: pointer;
`;

export const Input = styled.input`
  border: none;
  width: 100%;

  &:focus {
    outline: none;
  }
  ::placeholder {
    color: grey;
  }
`;