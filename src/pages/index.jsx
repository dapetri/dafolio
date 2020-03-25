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

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Index = props => {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <>
      <Layout />
      <Parallax pages={5}>
        <Hero>
          <BigTitle>
            Hello, <br /> I'm David
          </BigTitle>
          <Subtitle>I'm not your usual computer science student.</Subtitle>
        </Hero>
        <Projects>
          <Link to="/blog">
            <RotateTitle title="Blog" />
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
          <RotateTitle title="About" />
          <AboutHero>
            <Avatar src={avatar} alt="David Petri" />
            <AboutSub>
              I'm a web dev enthusiast working with entrepreneurial developers
              on the future of online payments. At Stripe we aim to expand
              Internet Commerce by making it easy to process transactions and
              provide the tools to manage an online business, ultimately
              increasing the GDP of the Internet.
            </AboutSub>
          </AboutHero>
          <AboutDesc>
            We believe that enabling more transactions is a problem rooted in
            code and design, not finance. Stripe is built for developers,
            makers, and creators. Interested in building Stripe around the
            globe? Go to{" "}
            <a
              href="https://medium.com/stripe-stories"
              target="_blank"
              rel="noopener noreferrer"
            >
              our Medium page
            </a>{" "}
            to find out more and don't hesitate to reach out if you're
            interested in{" "}
            <a
              href="https://stripe.com/jobs"
              target="_blank"
              rel="noopener noreferrer"
            >
              any open position
            </a>
            .
          </AboutDesc>
        </About>
        <Contact>
          <Inner>
            <RotateTitle title="Ping me @" />
            <ContactText>
              Find me online:{" "}
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
              </a>
            </ContactText>
          </Inner>
          <Footer />
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
