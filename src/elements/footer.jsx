import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Link } from "gatsby";

const FooterStyle = styled.footer`
  ${tw`text-center pin-b p-6 font-sans text-md lg:text-lg`};
`;

const Footer = () => (
  <FooterStyle>
    &copy; 2020 by{" "}
    <a href="https://www.lekoarts.de" target="_blank" rel="noopener noreferrer">
      LekoArts
    </a>{" "}
    | extended to <Link to="/">dafolio</Link> by{" "}
    <a href="http://twitter.com/dapetridev">DaPetri</a> with help of{" "}
    <a
      href="https://github.com/thorsten-stripe"
      target="_blank"
      rel="noopener noreferrer"
    >
      Thor (雷神)
    </a>{" "}
    | see ⚗️on{" "}
    <a
      href="https://github.com/dapetri/dafolio"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
    </a>
  </FooterStyle>
);

export default Footer;
