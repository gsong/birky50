//@flow
import React from "react";

import styled, { css } from "react-emotion";

import Address from "../Address";
import PhoneNumber from "../PhoneNumber";
import { Link } from "../../../styles/components";
import { bold, borderRadius, boxShadow1 } from "../../../styles";
import { calcSpacing } from "../../../styles/utils";
import { supportsObjectFit } from "../../../styles/cssFeatures";
import { textColors } from "../../../styles/variables";

export type Props = {
  name: string,
  url: string,
  price?: string,
  address: string,
  addressUrl: string,
  phone?: string,
  imgUrl: string,
};

export default class Card extends React.Component<Props> {
  render = () => {
    const { name, url, price, address, addressUrl, phone, imgUrl } = this.props;
    const verticalRhythm = `${calcSpacing(2) / 2}rem`;

    return (
      <Container>
        <ImgLink href={url} imgUrl={imgUrl} rel="nofollow">
          {supportsObjectFit && <CardImg src={imgUrl} alt={name} />}
        </ImgLink>
        <div
          className={css`
            margin: ${verticalRhythm};
          `}
        >
          <div className={bold}>
            <Link href={url} rel="nofollow">
              {name}
            </Link>
          </div>
          {/* flowlint-next-line sketchy-null-string:off */}
          {price && (
            <p
              className={css`
                margin: ${verticalRhythm} 0 0;
                color: ${textColors.lightGray};
              `}
            >
              {price}
            </p>
          )}
          <address
            className={css`
              > * {
                margin-top: ${verticalRhythm};
              }
            `}
          >
            <Address address={address} url={addressUrl} />
            {/* flowlint-next-line sketchy-null-string:off */}
            {phone && <PhoneNumber number={phone} />}
          </address>
        </div>
      </Container>
    );
  };
}

const noBottomBorderRadius = css`
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

const Container = styled.div`
  ${borderRadius};
  ${boxShadow1};
`;

const ImgLink = styled.a(props => {
  const style = supportsObjectFit
    ? null
    : css`
        display: block;
        height: 12rem;
        background-image: url(${props.imgUrl});
        background-size: cover;
        background-position: center center;
      `;
  return css(borderRadius, noBottomBorderRadius, style);
});

const CardImg = styled.img`
  ${borderRadius};
  ${noBottomBorderRadius};
  width: 100%;
  height: 12rem;
  object-fit: cover;
`;
