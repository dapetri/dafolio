import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";

import {
  Bluesky,
  Bluer,
  ContentContainer,
  ProjectsWrapper
} from "../../styles/blogIndex";

//Layout Components
import ProjectCard from "../../components/projectCard";

//Layout Elements
import { RotateTitle } from "../../elements/titles";
import Footer from "../../elements/footer";

import Layout from "../../components/layout";

const FooterStyle = styled.footer`
  color: #fff;
  a {
    color: #fff;
  }
  a:hover {
    color: rgb(206, 118, 146);
  }
  bottom: 0;
`;

const Inner = styled.div`
  ${tw`w-full xxl:w-2/3 text-center lg:text-left`};
  margin-top: 0%;
  margin-bottom: 10%;
`;

const IndexPage = props => {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <>
      <Layout />
      <>
        <title>dafolio - my blog</title>
        <Bluer />
        <Bluesky>
          <Bluer />
          <ContentContainer>
            <Inner>
              <Link to="/">
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
            </Inner>
          </ContentContainer>
        </Bluesky>
        <FooterStyle>
          <Footer />
        </FooterStyle>
      </>
    </>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          timeToRead
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            description
            background
            tags
          }
        }
      }
    }
  }
`;
