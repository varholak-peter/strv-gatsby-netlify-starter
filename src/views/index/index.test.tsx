import { presentData } from './presenter'

describe('Index page presenter', () => {
  it('happy path', () => {
    const input = {
      data: {
        markdownRemark: {
          __typename: 'MarkdownRemark',
          frontmatter: {
            __typename: 'MarkdownRemarkFrontmatter',
            description: 'Desc',
            title: 'Title',
          },
        },
      },
    } as const
    const expected = {
      description: 'Desc',
      title: 'Title',
    }

    const actual = presentData(input)

    expect(actual).toStrictEqual(expected)
  })
})
