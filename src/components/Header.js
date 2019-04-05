import React, { Component } from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  font-family: "Helvetica";
  button {
    font-size: 1rem;
    color: #444;
    border: 1px solid #444;
    border-radius: 25px;
  }
  h1 {
    font-size: 1.5rem;
    font-weight: 500;
    padding: 10px;
    border: 1px solid #444;
    border-radius: 25px;
  }
`;

class Header extends Component {
  render() {
    return (
      <Div>
        <h2>
          <button>Home</button>
        </h2>
        <h1>Musical Chairs</h1>
        <h2>
          <button>Log In</button>
        </h2>
      </Div>
    );
  }
}

export default Header;
