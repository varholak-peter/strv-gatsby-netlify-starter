import { graphql } from 'gatsby'

import { IndexPage } from '~/views/index/index'

export default IndexPage

export const pageQuery = graphql`
  query IndexPageData {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        description
      }
    }
  }
`
