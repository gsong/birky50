//@flow
import React from "react";

import CardList from "./index";
import { WindowSizeProvider } from "../../../contexts/WindowSizeContext";

import type { Props } from "./index";

export default (props: Props) => (
  <WindowSizeProvider>
    <CardList {...props} />
  </WindowSizeProvider>
);
