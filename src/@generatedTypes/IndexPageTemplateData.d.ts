/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: IndexPageTemplateData
// ====================================================

export interface IndexPageTemplateData_markdownRemark_frontmatter {
  __typename: "MarkdownRemarkFrontmatter";
  title: string | null;
  description: string | null;
}

export interface IndexPageTemplateData_markdownRemark {
  __typename: "MarkdownRemark";
  frontmatter: IndexPageTemplateData_markdownRemark_frontmatter | null;
}

export interface IndexPageTemplateData {
  markdownRemark: IndexPageTemplateData_markdownRemark | null;
}
