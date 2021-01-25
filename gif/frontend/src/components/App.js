import React, { Component } from "react";
import { render } from "react-dom";
import Study from "./Study";
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Study />;
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);
