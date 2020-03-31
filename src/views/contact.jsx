import React from "react";
import PropTypes from "prop-types";
import tw from "tailwind.macro";
import styled from "styled-components";
import { Divider, DividerContact, DividerFooter } from "../elements/dividers";
import Content from "../elements/content";
import { UpDown, UpDownWide, sinAnimation } from "../styles/animations";
import { colors } from "../../tailwind";
import SVG from "../components/svg";

const WaveWrapperBottom = styled.div`
  ${tw`absolute pin-b w-full`};
  transform: matrix(-1, 0, 0, -1, 0, 0);
`;

const WaveWrapperTop = styled.div`
  ${tw`relative pin-b w-full`};
  transform: matrix(1, 0, 0, 1, 0, 0);
`;

const InnerWave = styled.div`
  ${tw`relative h-full`};
  svg {
    width: 100%;
    height: 40vh;
  }
  path {
    ${sinAnimation("10s")};
  }
`;

const Contact = ({ children }) => (
  <>
    <DividerContact
      bg="linear-gradient(to right, #fc5c7d, #6a82fb)"
      speed={0}
      offset={3}
      factor={1}
    />
    <Divider fill="rgb(22,23,25)" speed={0} offset={3}>
      <WaveWrapperTop>
        <InnerWave>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="1000 -120 2500 600"
            preserveAspectRatio="none"
          >
            <path>
              <animate
                attributeName="d"
                values="M 0 0  q 110 -20 180 90  t 180 0 t 180 0 t 180 0 t 180 0 t 180 0 t 180 0  t 180 0 t 180 0  t 180 0 t 180 0 t 180 0 t 180 0 t 180 0 t 180 0 t 180 0 t 180 0 t  180 0 t 180 0 t 180 0 t 180 0 t 90 -90"
                repeatCount="indefinite"
                dur="1s"
              />
            </path>
          </svg>
        </InnerWave>
      </WaveWrapperTop>
    </Divider>
    <Divider fill="#f4c2c2" speed={0} offset={3}>
      <WaveWrapperBottom>
        <InnerWave>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="1000 -150 2500 600"
            preserveAspectRatio="none"
          >
            <path>
              <animate
                attributeName="d"
                values="M 0 0  q 110 -20 180 90  t 180 0 t 180 0 t 180 0 t 180 0 t 180 0 t 180 0  t 180 0 t 180 0  t 180 0 t 180 0 t 180 0 t 180 0 t 180 0 t 180 0 t 180 0 t 180 0 t  180 0 t 180 0 t 180 0 t 180 0 t 90 -90"
                repeatCount="indefinite"
                dur="1s"
              />
            </path>
          </svg>
        </InnerWave>
      </WaveWrapperBottom>
    </Divider>
    <DividerFooter bg="#f4c2c2" offset={3}></DividerFooter>
    <Content speed={0.4} offset={3}>
      {children}
    </Content>

    <Divider speed={0.1} offset={3}>
      <UpDown>
        <SVG
          icon="upDown"
          hiddenMobile
          width={8}
          fill={colors["grey-darkest"]}
          left="70%"
          top="20%"
        />
        <SVG
          icon="triangle"
          width={8}
          stroke={colors["grey-darkest"]}
          left="25%"
          top="5%"
        />
      </UpDown>
      <UpDownWide>
        <SVG
          icon="triangle"
          width={12}
          stroke={colors.white}
          left="95%"
          top="50%"
        />
        <SVG icon="circle" width={6} fill={colors.white} left="85%" top="15%" />
        <SVG
          icon="upDown"
          hiddenMobile
          width={8}
          fill={colors["grey-darkest"]}
          left="45%"
          top="10%"
        />
      </UpDownWide>
      <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
      <SVG
        icon="circle"
        width={12}
        fill={colors["grey-darkest"]}
        left="70%"
        top="60%"
      />
      <SVG
        icon="box"
        width={12}
        fill={colors["grey-darkest"]}
        left="20%"
        top="30%"
      />
      <SVG
        icon="hexa"
        width={8}
        stroke={colors["grey-darkest"]}
        left="80%"
        top="70%"
      />
    </Divider>
  </>
);

export default Contact;

Contact.propTypes = {
  children: PropTypes.node.isRequired
};
