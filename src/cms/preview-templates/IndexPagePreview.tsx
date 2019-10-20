import React, { FC } from "react";
import { IndexPageTemplate } from "~/templates/index";

type Props = {
  entry: any;
};

const IndexPagePreview: FC<Props> = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <IndexPageTemplate title={data.title} description={data.description} />
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default IndexPagePreview;
