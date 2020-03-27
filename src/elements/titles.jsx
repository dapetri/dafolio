import React from "react";
import styled from "styled-components";
import { Rotate } from "../styles/animations";
import tw from "tailwind.macro";

export const RotateTitle = ({ title }) => (
  <div>
    <Title>
      <Rotate> 💾</Rotate> {title}
    </Title>
  </div>
);

const Title = styled.h1`
  ${tw`text-5xl lg:text-5xl font-serif text-white mb-8 tracking-wide relative inline-block font-normal`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

export const BigTitle = styled.h1`
  ${tw`text-5xl lg:text-6xl font-serif text-white mb-6 tracking-wide font-normal`};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`;

export const Subtitle = styled.p`
  ${tw`text-2xl lg:text-4xl font-sans text-white mt-8 xxl:w-3/4`};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;
