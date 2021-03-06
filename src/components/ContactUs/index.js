//@flow
import React from "react";

import facepaint from "facepaint";
import styled, { css } from "react-emotion";

import { btn, formInput } from "../../styles";
import { convertListToEm } from "../../styles/utils";
import { supportsGrid } from "../../styles/cssFeatures";

export default () => {
  const sendTo = "birky50@damacy.net";

  return (
    <Form action={`https://formspree.io/${sendTo}`} method="POST">
      <Label htmlFor="contact_us_name">Name</Label>
      <Input
        type="text"
        name="name"
        id="contact_us_name"
        placeholder="Your Name"
        required
      />

      <Label htmlFor="contact_us_email">Email</Label>
      <Input
        type="email"
        name="email"
        id="contact_us_email"
        placeholder="Your Email"
        required
      />

      <Label htmlFor="contact_us_message">Message</Label>
      <Textarea
        name="message"
        id="contact_us_message"
        placeholder="Message"
        rows="3"
        required
      />

      <input
        type="hidden"
        name="_subject"
        value="Birky 50th Anniversary Message"
      />
      <input type="hidden" name="_gotcha" />

      <Button type="submit">Send</Button>
    </Form>
  );
};

const breakpoints = convertListToEm([600]);
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}em)`));

const gridRowGap = "1.125rem";
const inputWidth = "30rem";
const labelWidth = "5.25rem";
const IEMarginTop = css(!supportsGrid && mq({ marginTop: [null, gridRowGap] }));

const Form = styled.form(
  mq({
    display: [null, "grid"],
    gridTemplateColumns: [null, `${labelWidth} ${inputWidth}`],
    gridRowGap: [null, gridRowGap],
  }),
  !supportsGrid &&
    mq({
      display: [null, "flex"],
      flexWrap: [null, "wrap"],
      alignItems: [null, "baseline"],
      width: [null, "38rem"],
    })
);

const Label = styled.label(
  mq({ marginTop: [null, "0.375rem"] }),
  !supportsGrid &&
    mq({
      flex: [null, `0 0 ${labelWidth}`],
    })
);

const Input = styled.input(
  formInput,
  { display: "block" },
  mq({
    width: ["100%", "auto"],
    margin: ["0.5rem 0 1.625rem", 0],
  }),
  !supportsGrid &&
    mq({
      flex: [null, `0 0 ${inputWidth}`],
    }),
  IEMarginTop
);

const Textarea = Input.withComponent("textarea");

const Button = styled.button(
  btn,
  css`
    grid-column-start: 2;
    justify-self: start;
    cursor: pointer;
    color: hsl(288, 50%, 48%);
    border: 4px solid hsl(288, 50%, 78%);
    background-color: transparent;
    width: 6em;
  `,
  !supportsGrid && mq({ marginLeft: [null, labelWidth] }),
  IEMarginTop
);
