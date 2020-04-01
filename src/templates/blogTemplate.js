import React from "react";
import { graphql } from "gatsby";
import {
  Background,
  SnippetBackground,
  BlogTitle,
  BlogDate,
  BlogSection,
  ContentContainer,
  Columns,
  BlogColumn,
  Paragraph,
  BlogLink,
  TextBody
} from "../styles/blogPost";

// data prop will be injected by the GraphQL query below.
export default function Template({ data }) {
  const { markdownRemark } = data; // data.markdownRemark is property of data that holds all of post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Background>
      <title>{frontmatter.title}</title>
      <SnippetBackground>
        <BlogSection>
          <ContentContainer>
            <Columns>
              <BlogColumn>
                <BlogTitle>{frontmatter.title}</BlogTitle>
                <BlogDate>{frontmatter.date}</BlogDate>
                <Paragraph>{frontmatter.description}</Paragraph>
                <div style={{ marginBottom: `1rem` }}>
                  <BlogLink to="/blog">{`< Back to list`}</BlogLink>
                </div>
                <TextBody dangerouslySetInnerHTML={{ __html: html }} />
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
