import React, { FC } from "react";

import { GlobalStyle } from "~/styles/global";

export const Layout: FC = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);
