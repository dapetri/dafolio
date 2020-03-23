import styled from "styled-components";
import { Link } from "gatsby";

export const Background = styled.div`
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(219, 112, 147);
  overflow-x: hidden;
  overflow-y: scroll;
  -ms-overflow-style: scrollbar;
  html {
    scroll-behavior: smooth;
  }
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
  overflow-x: inherit;
  overflow-y: inherit;
  html {
    scroll-behavior: smooth;
  }
`;

export const BlogSection = styled.section`
  box-sizing: border-box;
  display: block;
  padding-bottom: 48px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 48px;
  line-height: 24px;
`;

export const ContentContainer = styled.div`
  box-sizing: border-box;
  flex-grow: 1;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 24px;
  margin-right: 24px;
  margin-top: 0px;
  max-width: 1344px;
  position: relative;
  width: 1344px;
`;

export const Columns = styled.div`
  box-sizing: border-box;
  display: flex;
  line-height: 24px;
  margin-bottom: -12px;
  margin-left: -12px;
  margin-right: -12px;
  margin-top: -12px;
`;

export const BlogColumn = styled.div`
  box-sizing: border-box;
  display: block;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  line-height: 24px;
  margin-left: 113.983px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
  text-rendering: optimizelegibility;
  width: 1140px;
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
  -webkit-font-smoothing: antialiased;
`;

export const BlogDate = styled.h2`
  box-sizing: border-box;
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
