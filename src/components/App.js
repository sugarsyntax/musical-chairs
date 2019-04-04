import React, { Component } from "react";
import styled from "styled-components";

const H1 = styled.h1`
  color: #27aebd;
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <div>
        <H1>At the station bitches</H1>
      </div>
    );
  }
}

export default App;
