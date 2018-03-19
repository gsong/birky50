import React from "react";

import { Jumbotron, Container } from "reactstrap";

import { Consumer } from "../providers/WindowSizeProvider";
import { calculateBackgroundOffset } from "./utils";

import "./Header.css";

export default class Header extends React.PureComponent {
  state = {
    backgroundPositionX: "0",
    backgroundPositionY: "0"
  };

  render = () => (
    <React.Fragment>
      <Consumer>{this.handleWindowResize}</Consumer>
      <Jumbotron fluid style={this.state}>
        <Container fluid>
          <h1 className="header-title text-white">
            Sam & Sue’s 50th Anniversary
          </h1>
          <p className="lead text-white">Saturday, June 23, 2018</p>
          <p className="lead text-white">Somers, Montana</p>
        </Container>
      </Jumbotron>
    </React.Fragment>
  );

  handleWindowResize = ({ state }) => {
    const { width } = state;
    const { offsetX, offsetY } = calculateBackgroundOffset(width);
    const backgroundPositionX = `${offsetX}px`;
    const backgroundPositionY = `${offsetY}px`;

    this.setState({ backgroundPositionX, backgroundPositionY });
  };
}
