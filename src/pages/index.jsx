import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Parallax } from "react-spring/renderprops-addons.cjs";
import { Link, graphql } from "gatsby";

// Components
import Layout from "../components/layout";
import ProjectCard from "../components/projectCard";

// Elements
import Inner from "../elements/inner";
import { RotateTitle, BigTitle, Subtitle } from "../elements/titles";
import Footer from "../elements/footer";

// Views
import Hero from "../views/hero";
import Projects from "../views/projects";
import About from "../views/about";
import Contact from "../views/contact";

import avatar from "../images/me.jpg";

// Styles
import { ProjectsWrapper } from "../styles/blogIndex";
import { KITStyle } from "../styles/canvas";

// Canvas Styles
import {
  KITCanvas,
  JavaCanvas,
  PythonCanvas,
  CCanvas,
  CxxCanvas,
  JGU
} from "../styles/canvas";

// Smooth Scrolling
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]', {
    speed: 900,
    speedAsDuration: true,
    easing: "easeInOutCubic"
  });
}

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
  font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial,
    sans-serif;
  line-height: 1.625;
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
  ${tw`text-white inline font-sans text-xl md:text-2xl lg:text-3xl ml-8`};
  a {
    color: #fddde6;
  }
  a:hover {
    color: #1034a6;
  }
`;

const FooterStyle = styled.footer`
  ${tw`absolute`};
  color: #fff;
  a {
    color: #fff;
  }
  a:hover {
    color: #1034a6;
  }
  bottom: 0;
`;

const Index = props => {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <>
      <Layout />
      <title>dafolio - my news</title>
      <Parallax pages={4}>
        <Hero>
          <BigTitle id="top">
            Hello, <br /> I'm David
          </BigTitle>
          <Subtitle>I'm not your usual computer science student.</Subtitle>
        </Hero>
        <Projects>
          <Link to="/blog">
            <RotateTitle>Blog</RotateTitle>
          </Link>
          <ProjectsWrapper>
            {posts.map(({ node: post }) => (
              <ProjectCard
                key={post.id}
                title={post.frontmatter.title}
                link={post.frontmatter.path}
                date={post.frontmatter.date}
                ttr={post.timeToRead}
                bg={post.frontmatter.background}
              >
                {post.frontmatter.description}
              </ProjectCard>
            ))}
          </ProjectsWrapper>
        </Projects>
        <About>
          <RotateTitle>About</RotateTitle>
          <AboutHero>
            <Avatar src={avatar} alt="David Petri" />
            <AboutSub>
              I'm a computer science student at{" "}
              <KITStyle>Karlsruhe Institute of Technology</KITStyle>
              <KITCanvas />
              .&nbsp; I'm interested in machine learning and algorithm engineering
              and like to work in <PythonCanvas />, <JavaCanvas />
              and <CCanvas />.&nbsp; In addition I hold a Bachelor of Science in Management and
              Economics at the University of Mainz&nbsp;
              <JGU />.
            </AboutSub>
          </AboutHero>
          <AboutDesc>
            I believe that through hard thinking, dedication and coding your
            fingers bloody mountains can be moved and big things accomplished.
            If you're looking for a shrewd problemsolving computer engineer look
            no further and <Link to="/#pingme">get in touch</Link>.
          </AboutDesc>
        </About>
        <Contact>
          <Inner>
            <RotateTitle id="pingme">Ping me on:</RotateTitle>
            <ContactText>
              <a
                href="https://twitter.com/dapetridev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>{" "}
              |{" "}
              <a
                href="https://www.instagram.com/da_petri/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>{" "}
              |{" "}
              <a
                href="https://www.linkedin.com/in/dapetri/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>{" "}
              |{" "}
              <a
                href="https://www.lichess.org/@/DaPetri/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lichess
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/dapetri"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </ContactText>
          </Inner>
          <FooterStyle>
            <Footer />
          </FooterStyle>
        </Contact>
      </Parallax>
    </>
  );
};

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 4
    ) {
      edges {
        node {
          id
          timeToRead
          frontmatter {
            path
            title
            description
            date(formatString: "MMMM DD, YYYY")
            background
          }
        }
      }
    }
  }
`;
