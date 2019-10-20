import React, { FC } from "react";
import { IndexPageView } from "~/views/Index";

type Props = {
  entry: any;
};

const IndexPagePreview: FC<Props> = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return <IndexPageView title={data.title} description={data.description} />;
  } else {
    return <div>Loading...</div>;
  }
};

export default IndexPagePreview;
