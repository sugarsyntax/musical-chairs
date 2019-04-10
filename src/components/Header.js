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
    padding: 0.1rem 2rem;
    border: 1px solid #444;
    border-radius: 25px;
  }
`;

class Header extends Component {
  render() {
    return (
      <Div>
        <p>
          <button>Home</button>
        </p>
        <h1>Musical Chairs</h1>
        <p>
          <button>Log In</button>
        </p>
      </Div>
    );
  }
}

export default Header;
