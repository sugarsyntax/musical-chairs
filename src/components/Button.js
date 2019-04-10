import React, { Component } from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  padding: 2px auto;
  border: 1px solid #fff;
  border-radius: 50px;
`;

class Button extends Component {
  render() {
    return (
      <div>
        <ButtonStyle>{this.props.children}</ButtonStyle>
      </div>
    );
  }
}

export default Button;
