//@flow strict
import * as React from "react";

import facepaint from "facepaint";
import styled, { css } from "react-emotion";

import SectionContext from "../../../../contexts/SectionContext";
import { convertListToEm } from "../../../../styles/utils";

import type { LabelComponent } from "../../EmojiLabels";

type Props = { color: string, children: React.Element<LabelComponent> };

const SectionHeader = ({ color, children }: Props) => (
  <SectionContext.Consumer>
    {id => (
      <Container color={color}>
        <H1 id={`${id}-description`}>{children}</H1>
      </Container>
    )}
  </SectionContext.Consumer>
);

const breakpoints = convertListToEm([350]);
const mq = facepaint(breakpoints.map(bp => `@media (max-width: ${bp}em)`));

const Container = styled.div(
  props =>
    css`
      border-top: 8px solid ${props.color};
      padding: 18px 24px 12px;
      position: sticky;
      top: 0;
      background-color: hsla(0, 0%, 100%, 0.8);
    `
);

const H1 = styled.h1(
  css`
    font-weight: normal;
    margin: 0 0;
  `,
  mq({ fontSize: ["1.75rem", "1.5rem"] })
);

export default SectionHeader;
