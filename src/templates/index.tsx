import { graphql } from "gatsby";

import React, { FC } from "react";
import { IndexPageTemplateData } from "@GTypes/IndexPageTemplateData";
import { IndexPageView } from "~/views/Index";

type Data = {
  data: IndexPageTemplateData;
};

const IndexPage: FC<Data> = ({ data = {} }) => {
  const { frontmatter } = data.markdownRemark || {};

  return (
    <IndexPageView
      description={(frontmatter && frontmatter.description) || "Description"}
      title={(frontmatter && frontmatter.title) || "Title"}
    />
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplateData {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        description
      }
    }
  }
`;
