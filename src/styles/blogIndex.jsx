import styled from "styled-components";
import tw from "tailwind.macro";

export const Bluesky = styled.div`
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

export const ContentContainer = styled.div`
  ${tw`p-6 md:p-12 lg:p-24 justify-center items-center flex z-50`};
`;

export const ProjectsWrapper = styled.div`
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-between;
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
