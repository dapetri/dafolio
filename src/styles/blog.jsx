import styled from "styled-components";
import tw from "tailwind.macro";
import "typeface-open-sans";

export const Background = styled.div`
  ${tw`fixed w-full h-full`};
  background: rgb(219, 112, 147);
`;

export const SnippetBackground = styled.div`
  ${tw`fixed w-full h-full`};
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

export const BlogTitle = styled.h1`
  box-sizing: border-box;
  color: rgb(54, 54, 54);
  font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial,
    sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 45px;
  margin-bottom: 24px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-rendering: optimizelegibility;
  word-break: break-word;
  -moz-osx-font-smoothing: grayscale;
`;

export const SubTitle = styled.p`
  ${tw`text-2xl lg:text-4xl font-sans text-white mt-8 xxl:w-3/4`};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;
