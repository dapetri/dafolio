import styled from "styled-components";
import { Link } from "gatsby";
import tw from "tailwind.macro";
import { trans } from "../styles/animations";

export const Background = styled.div`
  ${tw`fixed`};
  background: linear-gradient(170deg, #fddde6, #f9ccca, #f4c2c2, #f7bfbe, #efbbcc, #f2bdcd, #fddde6, #f9ccca, #f4c2c2, #f7bfbe, #efbbcc, #f2bdcd, #fddde6, #f9ccca, #f4c2c2, #f7bfbe, #efbbcc, #f2bdcd, #fddde6, #f9ccca, #f4c2c2, #f7bfbe, #efbbcc, #f2bdcd);
  animation: ${trans} 5s linear infinite;
  width: 100%;
  height: 200%;
  }
`;

export const SnippetBackground = styled.div`
  ${tw`fixed w-full h-full`};
  background: #fff;

  overflow-x: hidden;
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

export const ContentContainer = styled.div`
  ${tw`relative leading-normal box-border`};
  padding: 5% 10%;
  text-rendering: optimizelegibility;
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

  text-rendering: optimizelegibility;
  word-break: break-word;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
`;

export const BlogDate = styled.h2`
  box-sizing: border-box;
  margin-bottom: 24px;

  font-size: 16px;
  font-weight: 400;
  color: #e07628;
  font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial,
    sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
`;

export const SubTitle = styled.p`
  box-sizing: border-box;
  color: rgb(54, 54, 54);
  font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial,
    sans-serif;
  font-size: 28px;
  font-weight: 600;
  line-height: 31.5px;
  margin-bottom: 16px;
`;

export const Paragraph = styled.p`
  box-sizing: border-box;
  color: rgb(51, 51, 51);
  font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial,
    sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
`;

export const BlogLink = styled(Link)`
  box-sizing: border-box;
  color: rgb(50, 115, 220);
  &:hover {
    color: #e07628;
  }
  cursor: pointer;
  font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial,
    sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-decoration: rgb(50, 115, 220);
  text-decoration-color: rgb(50, 115, 220);
  text-decoration-line: none;
  text-decoration-style: solid;
  text-decoration-thickness: auto;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
`;

export const TextBody = styled.div`
  box-sizing: inherit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  h2,
  h3,
  p {
    color: rgb(51, 51, 51);
    font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial,
      sans-serif;
    text-rendering: optimizelegibility;
  }

  h2,
  h3 {
    font-weight: 600;
    margin-bottom: 16px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 32px;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
  }

  h2 {
    font-size: 28px;
    line-height: 31.5px;
  }

  h3 {
    font-size: 24px;
    line-height: 27px;
  }

  a {
    color: #3273dc;
    text-decoration: none;
  }
  a:hover {
    color: #e07628;
  }
`;
