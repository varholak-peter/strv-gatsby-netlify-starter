import React from 'react'
import { graphql } from 'gatsby'

export const IndexPageTemplate = ({ title, description }) => (
  <>
    <h1>{title}</h1>
    <p>{description}</p>
  </>
)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <IndexPageTemplate
      title={frontmatter.title}
      description={frontmatter.description}
    />
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        description
      }
    }
  }
`
