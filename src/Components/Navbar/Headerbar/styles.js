import styled from 'styled-components';

export const HeaderbarWrapper = styled.div`
  display: flex;
  padding: 2% 0;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid rgba(134, 134, 134, 0.1);
`;

export const LogoWrapper = styled.div`
  flex: 3.5;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    visibility: hidden;
  }
`;

export const SearchWrapper = styled.div`
  flex: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LoginWrapper = styled.div`
  flex: 3.5;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;