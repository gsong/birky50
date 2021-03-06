//@flow strict
import * as React from "react";

import { css } from "emotion";

type LabelProps = { emoji: string, ariaLabel: string, label: React.Node };

type EmojiProps = { label: React.Node };

export type LabelComponent = React.ComponentType<EmojiProps>;

export const EmojiLabel = ({ emoji, ariaLabel, label }: LabelProps) => (
  <React.Fragment>
    <span
      className={css`
        display: flex;
        align-items: baseline;
      `}
    >
      <span
        className={css`
          font-family: "Segoe UI Emoji";
          margin-right: 0.25em;
        `}
        role="img"
        aria-label={ariaLabel}
      >
        {emoji}
      </span>
      {label}
    </span>
  </React.Fragment>
);

export const Airplane = ({ label }: EmojiProps) => (
  <EmojiLabel emoji="✈️" ariaLabel="airplane" label={label} />
);

export const Airport = ({ label }: EmojiProps) => (
  <EmojiLabel emoji="🛬" ariaLabel="flight arrival" label={label} />
);

export const Burger = ({ label }: EmojiProps) => (
  <EmojiLabel emoji="🍔" ariaLabel="burger" label={label} />
);

export const Calendar = ({ label }: EmojiProps) => (
  <EmojiLabel emoji="📆" ariaLabel="calendar" label={label} />
);

export const Hotel = ({ label }: EmojiProps) => (
  <EmojiLabel emoji="🏩" ariaLabel="hotel" label={label} />
);

export const Location = ({ label }: EmojiProps) => (
  <EmojiLabel emoji="📍" ariaLabel="round pushpin" label={label} />
);

export const PartyHat = ({ label }: EmojiProps) => (
  <EmojiLabel emoji="🎉" ariaLabel="party hat" label={label} />
);

export const Phone = ({ label }: EmojiProps) => (
  <EmojiLabel emoji="📞" ariaLabel="phone receiver" label={label} />
);

export const WomanBiking = ({ label }: EmojiProps) => (
  <EmojiLabel emoji="🚴🏽‍♀️" ariaLabel="biking woman" label={label} />
);

export const WomanRaisingHand = ({ label }: EmojiProps) => (
  <EmojiLabel emoji="🙋🏻‍♀️" ariaLabel="woman raising hand" label={label} />
);
