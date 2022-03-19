import React from "react";
import {
  Container,
  SectionLeft,
  SectionRight,
  PosterWrapper,
  TextWrapper,
  VideoWrapper
} from "./styles";
import { Text } from "../../Components/Text";
import vid from "../../public/Home/video.png";
import playVid from "../../public/Home/playVideo.png";

const Home = () => {
  return (
    <Container>
      <SectionLeft>
        <PosterWrapper img={playVid}/>
        <TextWrapper>
          <Text size={'44px'} weight={'700'}>Video Trial TryOut Online</Text>
        </TextWrapper>
        <TextWrapper>
          <Text size={'16px'} weight={'400'} color={'#333849'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sed facilisis volutpat faucibus. Elit consectetur tempus, nunc sit purus diam. Facilisis platea molestie consectetur mattis molestie amet a volutpat. Et mollis at montes, adipiscing mi integer massa faucibus.
          </Text>
        </TextWrapper>
      </SectionLeft>
      <SectionRight>
        <VideoWrapper img={vid}/>
      </SectionRight>
    </Container>
  );
};

export default Home;