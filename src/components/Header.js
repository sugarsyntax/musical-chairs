import React, { Component } from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  font-family: "Helvetica";
  button {
    color: #444;
    border: 1px solid #444;
    border-radius: 25px;
  }
  h1 {
    padding: 10px;
    border: 1px solid #444;
    border-radius: 25px;
  }
`;

class Header extends Component {
  render() {
    return (
      <Div>
        <button>Home</button>
        <h1>Musical Chairs</h1>
        <button>Log In</button>
      </Div>
    );
  }
}

export default Header;
