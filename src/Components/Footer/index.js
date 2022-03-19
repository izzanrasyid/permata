import React from "react";
import styled from "styled-components";
import { Text } from "../Text"
import Card from "./Card";
import Address from "./Address";
import Menu from "./Menu";
import SocialMedia from "./SocialMedia";
import Copyright from "./Copyright";
import Contacts from "./Contacts";
import Download from "./Download";
import { sponsors } from "./constant";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, rgba(66, 73, 91, 0.0001) -68.11%, #273341 74.28%);
  width: 100vw;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-text: center;
  padding: 2% 2% 0 2%;
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 5%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CardsMenu = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 5%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Title>
        <Text size={'20px'} weight={"600"} color={"#FFF"}>Supported by</Text>
      </Title>
      <Cards>
        { sponsors.map((sponsor, id) => <Card key={id}>{sponsor}</Card>) }
      </Cards>
      <CardsMenu>
        <Address />
        <Menu />
        <Download />
        <Contacts />
      </CardsMenu>
      <SocialMedia />
      <Copyright />
    </Container>
  );
};

export default Footer;
