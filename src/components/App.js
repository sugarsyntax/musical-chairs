import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import Map from "./Map";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Map />
      </div>
    );
  }
}
export default App;
