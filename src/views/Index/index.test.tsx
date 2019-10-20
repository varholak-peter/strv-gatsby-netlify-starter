import React from "react";
import { create } from "react-test-renderer";

import { IndexPageView } from ".";

it("renders correctly", () => {
  create(<IndexPageView title="STRV" description="test" />);
});
