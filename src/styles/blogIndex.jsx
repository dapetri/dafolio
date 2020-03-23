import styled from "styled-components";

const Bluesky = styled.div`
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  -ms-overflow-style: scrollbar;
  html {
    scroll-behavior: smooth;
  }
  background: linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%);
  clip-path: polygon(0 5%, 100% 15%, 100% 95%, 0 85%);
`;
