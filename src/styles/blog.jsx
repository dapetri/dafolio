import styled from "styled-components";
import "typeface-open-sans";

export const Background = styled.div`
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(21, 24, 32);
`;

export const SnippetBackground = styled.div`
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  clip-path: polygon(
    12% 2%,
    28% 0%,
    37% 2%,
    79% 0%,
    100% 5%,
    100% 95%,
    95% 100%,
    75% 97%,
    29% 100%,
    0% 95%,
    0% 0%
  );
`;

export const TextBody = styled.html`
  text-rendering: optimizeLegibility;
  overflow-x: hidden;
  box-sizing: border-box;
  -ms-overflow-style: scrollbar;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-color: #161719;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

export const BigTitle = styled.h1`
  ${tw`text-5xl lg:text-6xl font-serif text-white mb-6 tracking-wide`};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`;

export const Subtitle = styled.p`
  ${tw`text-2xl lg:text-4xl font-sans text-white mt-8 xxl:w-3/4`};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;
