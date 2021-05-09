import React from "react";

//styled components
import { FooterContainer } from "./footer.styles";

function Footer() {

  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <span>&copy; Copyright {year} Digital Library </span>
    </FooterContainer>
  );
}

export default Footer;