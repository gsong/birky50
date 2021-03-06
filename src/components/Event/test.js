//@flow
import React from "react";

import { render } from "react-testing-library";

import { mockSupportsGrid } from "testUtils/mocks";

import { PartyHat } from "../shared/EmojiLabels";

mockSupportsGrid(true);

const Event = require("./index").default;

test("Event renders properly", () => {
  const { container } = render(
    <Event LabelComponent={PartyHat} sectionLabel="Celebration Details" />
  );

  expect(container).toMatchSnapshot();
});
