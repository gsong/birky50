//@flow
import React from "react";

import { render } from "react-testing-library";
import snapshotDiff from "snapshot-diff";

import { generate } from "testUtils";
import { mockSupportsObjectFit } from "testUtils/mocks";

mockSupportsObjectFit(true);

const Card = require("./index").default;

describe("User sees a card", () => {
  const props = generate.card();
  const { container } = render(<Card {...props} />);
  const imgNode = container.querySelector("img");

  test("text elements are present", () => {
    ["name", "price", "address", "phone"].forEach(prop =>
      expect(container).toHaveTextContent(props[prop])
    );
  });

  test("image is present", () => {
    expect(imgNode.src).toBe(props.imgUrl);
    expect(imgNode.parentNode.href).toMatch(props.url);
  });
});

test("Card is rendered", () => {
  const { container } = render(<Card {...snapshotProps} />);

  expect(container.firstChild).toMatchSnapshot();
});

test("Card w/o price is rendered", () => {
  const props = { ...snapshotProps };
  delete props.price;
  const { container: complete } = render(<Card {...snapshotProps} />);
  const { container: partial } = render(<Card {...props} />);
  const diff = snapshotDiff(complete.firstChild, partial.firstChild);

  expect(diff).toMatchSnapshot();
});

test("Card w/o phone is rendered", () => {
  const props = { ...snapshotProps };
  delete props.phone;
  const { container: complete } = render(<Card {...snapshotProps} />);
  const { container: partial } = render(<Card {...props} />);
  const diff = snapshotDiff(complete.firstChild, partial.firstChild);

  expect(diff).toMatchSnapshot();
});

test("Card w/o price and phone is rendered", () => {
  const props = { ...snapshotProps };
  delete props.phone;
  delete props.price;
  const { container: complete } = render(<Card {...snapshotProps} />);
  const { container: partial } = render(<Card {...props} />);
  const diff = snapshotDiff(complete.firstChild, partial.firstChild);

  expect(diff).toMatchSnapshot();
});

const snapshotProps = {
  name: "Little Big Burger",
  url: "https://example.com",
  price: "100.00",
  address: "123 Main Street",
  addressUrl: "https://url_to_map",
  phone: "503-543-2345",
  imgUrl: "https://url_to_img",
};
