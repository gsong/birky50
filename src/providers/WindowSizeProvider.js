import React from "react";

const WindowSizeContext = React.createContext();
const { Provider, Consumer } = WindowSizeContext;

export default class WindowSizeProvider extends React.Component {
  state = { width: window.innerWidth, height: window.innerHeight };

  componentDidMount = () => {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateWindowDimensions);
  };

  render = () => {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  };

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
}

export { Consumer };
