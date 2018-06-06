import React, { Component } from "react";
import { Marker } from "react-google-maps";
import spotIcon from "../../img/room.png";

class MarkerContainer extends Component {
  state = {
    label: ""
  };

  handleLabel = label => {
    this.setState({
      label
    });
  };
  render() {
    const { label } = this.state;
    const { name, position } = this.props;
    return (
      <Marker
        icon={spotIcon}
        label={`${label}`}
        onMouseDown={() => this.handleLabel(name)}
        onMouseUp={() => this.handleLabel("")}
        position={{ ...position }}
      />
    );
  }
}
export default MarkerContainer;
