import React from "react";
import styled from "styled-components";
import { Text } from "../../Text";
import Card from "../Card";
import mapImg from "../../../public/Footer/Rectangle.png";

const AddressContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CardWrapper = styled.div`
  max-width: 70%;
  margin: 5% 0;
`;

const Maps = styled.div`
  background-image: url(${mapImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 5% 0;
  width: 90%;
  height: 200px;
`;

const Address = () => {
  return (
    <AddressContainer>
      <CardWrapper>
        <Card>Company</Card>
      </CardWrapper>
      <Text size={'16px'} weight={'400'} color={'#818AA4'}>
        Jl. H. Yahya Nuih No. 20A RT 01 RW 05, Margonda Raya, Kemiri Muka, Kecamatan Beji, Kota Depok, Jawa Barat 16423
      </Text>
      <Maps />
    </AddressContainer>
  );
};

export default Address;