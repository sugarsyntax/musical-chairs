import React, { Component } from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const Button = styled.a`
  color: #444;
  border: 1px solid #444;
  border-radius: 25px;
`;

class Header extends Component {
  render() {
    return (
      <Div>
        <Button>Home</Button>
        <h1>Musical Chairs</h1>
        <Button>Log In</Button>
      </Div>
    );
  }
}

export default Header;
