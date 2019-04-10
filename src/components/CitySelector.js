import React, { Component } from "react";
import styled from "styled-components";

class CitySelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      isLoaded: false
    };
  }

  componentDidMount() {
      fetch("")
  }

  render() {
    return <div className="CitySelector" />;
  }
}

export default CitySelector;
