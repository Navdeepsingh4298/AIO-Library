import React from "react";

import { Container, Link } from '@material-ui/core';

//styled components
import { FooterContainer } from "./footer.styles";


function Footer() {
  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container>
        <span>&copy; Copyright {year} Digital Library | Made in India by  </span>
        <Link
          href="https://github.com/Navdeepsingh4298/"
          color="secondary"
          underline="hover"
          target="__blank"
          rel="noreferrer"
        >Navdeep Singh</Link>
      </Container>
    </FooterContainer>
  );
}

export default Footer;