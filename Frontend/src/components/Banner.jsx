import React from 'react';
import { Container, Image } from 'semantic-ui-react';
// import bannerPharmacy from "../assets/img/bannerPharmacy.png"

const Banner = ({banner}) => {
  return (
    <Container className="bannerContainer">
      <Image src={banner[0]} fluid  className="bannerImage"/>
    </Container>
  );
};

export default Banner;