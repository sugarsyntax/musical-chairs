import React, { Component } from "react";
import Button from "./Button";
import styled from "styled-components";

/*
 on click
 if user selects (city)
 get lat and long of city
 pass lat and long into leaflet coordinates for center of map

*/

class CitySelector extends Component {
  render() {
    return <Button>Select a City</Button>;
  }
}

export default CitySelector;
