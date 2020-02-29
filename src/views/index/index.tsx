import React, { FC } from 'react'
import { IndexPageData } from '@GTypes/IndexPageData'

import { Layout } from '~/components/Layout'

import { presentData } from './presenter'
import * as S from './styled'

type Data = {
  data: IndexPageData
}

export const IndexPage: FC<Data> = data => {
  const { description, title } = presentData(data)

  return (
    <Layout title={title}>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </Layout>
  )
}
