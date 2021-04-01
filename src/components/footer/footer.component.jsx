import React from "react";
import "./footer.styles.css";

function Footer() {

  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <span>&copy; Copyright {year} Digital Library </span>
    </div>
  );
}

export default Footer;