import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";

const H1 = styled.h1`
  color: #27aebd;
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
