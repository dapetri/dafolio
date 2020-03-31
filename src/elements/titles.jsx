import styled from "styled-components";
import { rotateAnimation } from "../styles/animations";
import tw from "tailwind.macro";
import floppy from "../images/floppy.png";

export const RotateTitle = styled.h1`
  ${tw`text-5xl lg:text-5xl font-serif text-white mb-8 tracking-wide relative inline-block pl-12 font-normal`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  &:after {
    content: "";
    width: 23px;
    height: 23px;
    background: url(${floppy});
    position: absolute;
    background-size: 23px;
    ${rotateAnimation("5s")};
    left: 10px;
    top: 19px;
  }
`;

export const BigTitle = styled.h1`
  ${tw`text-5xl lg:text-6xl font-serif text-white mb-6 tracking-wide font-normal`};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`;

export const Subtitle = styled.p`
  ${tw`text-2xl lg:text-4xl font-sans text-white mt-8 xxl:w-3/4`};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;
