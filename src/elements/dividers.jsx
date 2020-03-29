import styled from "styled-components";
import tw from "tailwind.macro";
import { ParallaxLayer } from "react-spring/renderprops-addons.cjs";

export const Divider = styled(ParallaxLayer)`
  ${tw`absolute w-full h-full`};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

export const DividerMiddle = styled(Divider)`
  clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
`;

export const DividerContact = styled(Divider)`
  clip-path: polygon(0 10%, 100% 10%, 100% 90%, 0 90%);
`;
