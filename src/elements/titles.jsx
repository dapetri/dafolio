import React from "react";
import styled from "styled-components";
import { Rotate } from "../styles/animations";
import tw from "tailwind.macro";
import triangle from "../images/triangle.svg";

export const RotateTitle = ({ title }) => (
  <div>
    <Title>
      <Rotate>🦠</Rotate> Was
    </Title>
  </div>
);

export const Title = styled.h1`
  ${tw`text-4xl lg:text-4xl text-white mb-8 tracking-wide relative inline-block`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial,
    sans-serif;
`;
