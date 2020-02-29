import React, { FC } from 'react'
import { Helmet } from 'react-helmet'

type Props = {
  title: string
}

export const Layout: FC<Props> = ({ children, title }) => (
  <>
    <Helmet
      defer={false}
      htmlAttributes={{
        lang: 'en',
      }}
      title={title}
    />
    {children}
  </>
)
