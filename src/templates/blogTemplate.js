import React from "react";
import { graphql } from "gatsby";
import { Background, SnippetBackground } from "../styles/blog";

// data prop will be injected by the GraphQL query below.
export default function Template({ data }) {
  const { markdownRemark } = data; // data.markdownRemark is property of data that holds all of post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Background>
      <SnippetBackground>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
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
