import React from "react";
import styled from "styled-components";
import { Rotate } from "../styles/animations";
import tw from "tailwind.macro";
import triangle from "../images/triangle.svg";

export const RotateTitle = ({ title }) => (
  <div>
    <Title>
      <Rotate>🦠</Rotate> {title}
    </Title>
  </div>
);

const Title = styled.h1`
  ${tw`text-4xl lg:text-4xl text-white mb-8 tracking-wide relative font-sans`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;
