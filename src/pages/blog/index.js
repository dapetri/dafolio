import React from "react";
import { Link, graphql } from "gatsby";
import PostLink from "../../components/postLink";
import { Bluesky, ContentContainer } from "../../styles/blogIndex";

//Layout Elements
import Inner from "../../elements/inner";

const IndexPage = props => {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <Bluesky>
      <ContentContainer>
        <Inner>
          <Link to="/">
            <p>Blog</p>
          </Link>
          <p>Test</p>
        </Inner>
      </ContentContainer>
    </Bluesky>
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
