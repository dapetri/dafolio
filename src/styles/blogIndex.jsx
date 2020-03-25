import styled from "styled-components";
import tw from "tailwind.macro";

export const Bluesky = styled.div`
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
