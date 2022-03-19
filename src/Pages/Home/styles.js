import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 5%;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const SectionLeft = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 900px) {
    justify-content: center;
    align-items: center;
  }
`;

export const SectionRight = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const PosterWrapper = styled.div`
  background-image: ${({ img }) => `url(${img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 340px;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 5% 0;
`;

export const VideoWrapper = styled.div`
  background-image: ${({ img }) => `url(${img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 400px;
`;