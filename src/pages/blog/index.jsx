import React from "react";
import { Link, graphql } from "gatsby";
import {
  Bluesky,
  ContentContainer,
  ProjectsWrapper
} from "../../styles/blogIndex";

//Layout Components
import ProjectCard from "../../components/projectCard";

//Layout Elements
import Inner from "../../elements/inner";
import { RotateTitle } from "../../elements/titles";
import Footer from "../../elements/footer";

import Layout from "../../components/layout";

const IndexPage = props => {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <>
      <Layout />
      <>
        <Bluesky>
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
        <Footer />
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
