import React, { FC } from "react";
import { graphql } from "gatsby";

import { IndexPageTemplateData } from "@GTypes/IndexPageTemplateData";

type Props = {
  description: string;
  title: string;
};

export const IndexPageTemplate: FC<Props> = ({ description, title }) => (
  <>
    <h1>{title}</h1>
    <p>{description}</p>
  </>
);

type Data = {
  data: IndexPageTemplateData;
};

const IndexPage: FC<Data> = ({ data = {} }) => {
  const { frontmatter } = data.markdownRemark || {};

  return (
    <IndexPageTemplate
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
