import React from "react";
import renderer from "react-test-renderer";

import { IndexPageView } from ".";

it("renders correctly", () => {
  renderer.create(<IndexPageView title="STRV" description="test" />);
});
