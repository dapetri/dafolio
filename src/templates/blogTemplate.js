import React from "react";
import { Link, graphql } from "gatsby";
import {
  Background,
  SnippetBackground,
  BlogTitle,
  BlogSection,
  ContentContainer,
  Columns,
  BlogColumn,
  Paragraph,
  StyledLink
} from "../styles/blog";

// data prop will be injected by the GraphQL query below.
export default function Template({ data }) {
  const { markdownRemark } = data; // data.markdownRemark is property of data that holds all of post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Background>
      <SnippetBackground>
        <BlogSection>
          <ContentContainer>
            <Columns>
              <BlogColumn>
                <BlogTitle>{frontmatter.title}</BlogTitle>
                <h2>{frontmatter.date}</h2>
                <Paragraph>{frontmatter.description}</Paragraph>
                <div style={{ marginBottom: `1rem` }}>
                  <StyledLink to="/blog">{`< Back to list`}</StyledLink>
                </div>
                <div
                  className="blog-post-content"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </BlogColumn>
            </Columns>
          </ContentContainer>
        </BlogSection>
      </SnippetBackground>
    </Background>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
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
`;
