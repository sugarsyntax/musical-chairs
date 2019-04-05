import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
  border: 1px solid #444;
`;

class Sidebar extends Component {
  render() {
    return (
      <div>
        <Button />
      </div>
    );
  }
}

export default Sidebar;
