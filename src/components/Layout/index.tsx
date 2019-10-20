import React, { FC } from "react";
import { Helmet } from "react-helmet";

import { GlobalStyle } from "~/styles/global";

type Props = {
  title: string;
};

export const Layout: FC<Props> = ({ children, title }) => (
  <>
    <Helmet title={title} defer={false} />
    <GlobalStyle />
    {children}
  </>
);
