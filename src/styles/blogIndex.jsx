import React from "react";

import styled from "styled-components";
import tw from "tailwind.macro";

import { UpDown, UpDownWide } from "../styles/animations";
import { colors } from "../../tailwind";
import SVG from "../components/svg";

export const Bluesky = styled.div`
  ${tw`min-h-screen`};
  overflow-x: hidden;
  overflow-y: scroll;
  -ms-overflow-style: scrollbar;
  html {
    scroll-behavior: smooth;
  }
  background: linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%);
  clip-path: polygon(0 1%, 100% 11%, 100% 99%, 0 89%);
`;

export const Bluer = () => (
  <div>
    <UpDown>
      <SVG icon="box" width={6} fill={colors.white} left="85%" top="75%" />
      <SVG icon="upDown" width={8} fill={colors.teal} left="70%" top="20%" />
      <SVG
        icon="triangle"
        width={8}
        stroke={colors.orange}
        left="25%"
        top="5%"
      />
      <SVG
        icon="circle"
        hiddenMobile
        width={24}
        fill={colors.white}
        left="17%"
        top="60%"
      />
    </UpDown>
    <UpDownWide>
      <SVG
        icon="arrowUp"
        hiddenMobile
        width={16}
        fill={colors.green}
        left="20%"
        top="90%"
      />
      <SVG
        icon="triangle"
        width={12}
        stroke={colors.white}
        left="90%"
        top="30%"
      />
      <SVG icon="circle" width={16} fill={colors.yellow} left="70%" top="90%" />
      <SVG
        icon="triangle"
        hiddenMobile
        width={16}
        stroke={colors.teal}
        left="18%"
        top="75%"
      />
      <SVG icon="circle" width={6} fill={colors.white} left="75%" top="10%" />
      <SVG
        icon="upDown"
        hiddenMobile
        width={8}
        fill={colors.green}
        left="45%"
        top="10%"
      />
    </UpDownWide>
    <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
    <SVG icon="circle" width={12} fill={colors.pink} left="80%" top="60%" />
    <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
    <SVG icon="box" width={12} fill={colors.yellow} left="29%" top="26%" />
    <SVG icon="hexa" width={16} stroke={colors.red} left="75%" top="30%" />
    <SVG icon="hexa" width={8} stroke={colors.yellow} left="80%" top="70%" />
  </div>
);

export const ContentContainer = styled.div`
  ${tw`p-6 md:p-12 lg:p-24 justify-center items-center flex z-50`};
`;

export const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between`};
  display: grid;
  gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;
