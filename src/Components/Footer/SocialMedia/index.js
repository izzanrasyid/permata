import React from "react";
import styled from "styled-components";
import {
  IconLinkedin,
  IconFacebook,
  IconTwitter,
  IconGPlus,
  IconYoutube,
  IconPinterest
} from "../../Icons";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 5% 30%;
`;

const Link = styled.div`
  cursor: pointer;
  background: #FFFFFF;
  mix-blend-mode: normal;
  opacity: 0.08;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 24px;
    width: 24px;
  }
`;

const SocialMedia = () => {
  return (
    <Container>
      <Link>
        <IconLinkedin color={'#42495B'}/>
      </Link>
      <Link>
        <IconFacebook color={'#42495B'}/>
      </Link>
      <Link>
        <IconTwitter color={'#42495B'}/>
      </Link>
      <Link>
        <IconGPlus color={'#42495B'}/>
      </Link>
      <Link>
        <IconYoutube color={'#42495B'}/>
      </Link>
      <Link>
        <IconPinterest color={'#42495B'}/>
      </Link>
    </Container>
  );
};

export default SocialMedia;