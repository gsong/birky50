//@flow strict
import React from "react";
import styled, { css } from "react-emotion";

import { Link } from "../../styles/components";
import { calcSpacing } from "../../styles/utils";

import type { SectionData } from "../Section.type";

type Props = {
  sections: SectionData,
  onClick: string => (SyntheticMouseEvent<HTMLLinkElement>) => void,
};

export default ({ sections, onClick }: Props) => {
  const navItems = sections.map(
    ({ id, navLabel, LabelComponent, color }, i) => (
      <li key={id}>
        <NavLink href={`#${id}`} onClick={onClick(id)}>
          <NavLabel
            className={css`
              border-bottom: 4px solid ${color};
            `}
          >
            <LabelComponent label={navLabel} />
          </NavLabel>
        </NavLink>
      </li>
    )
  );

  return (
    <nav>
      <NavContainer>{navItems}</NavContainer>
    </nav>
  );
};

const NavContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style-type: none;
  padding: 0.375rem 0 0.75rem;
  margin: 0;
`;

const NavLink = styled(Link)`
  display: block;
  font-size: 1.25rem;
  padding: ${calcSpacing(1.75, 1.25)}rem 1.125rem;
`;

const NavLabel = styled.span`
  display: inline-block;
  padding: 0 0.25em 0.1875em;
`;
