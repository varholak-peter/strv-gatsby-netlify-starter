import { IndexPageData } from '@GTypes/IndexPageData'

type PresenterInput = {
  data: IndexPageData
}

type PresenterOutput = {
  description: string
  title: string
}

export const presentData = ({ data }: PresenterInput): PresenterOutput => {
  const { frontmatter } = data.markdownRemark || {}

  return {
    description: (frontmatter && frontmatter.description) || 'Description',
    title: (frontmatter && frontmatter.title) || 'Title',
  }
}
