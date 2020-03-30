import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Link } from "gatsby";

const FooterStyle = styled.footer`
  ${tw`text-center text-grey pin-b p-6 font-sans text-md lg:text-lg`};
`;

const Footer = () => (
  <FooterStyle>
    &copy; 2020 by Gatsby Starter Portfolio Cara | Made by{" "}
    <a href="https://www.lekoarts.de" target="_blank" rel="noopener noreferrer">
      LekoArts
    </a>
    , extended to <Link to="/blog">blog</Link> by{" "}
    <a href="http://twitter.com/dapetridev">DaPetri</a> | View the sauce on{" "}
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
