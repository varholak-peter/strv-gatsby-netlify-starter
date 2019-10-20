import React, { FC } from "react";

import { Layout } from "~/components/Layout";

import * as S from "./styled";

type Props = {
  description: string;
  title: string;
};

export const IndexPageView: FC<Props> = ({ description, title }) => (
  <Layout>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </Layout>
);
