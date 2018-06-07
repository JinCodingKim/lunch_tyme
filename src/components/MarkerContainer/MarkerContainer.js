import React, { Component } from "react";
import { Marker } from "react-google-maps";
import { connect } from "react-redux";
import { getLocation } from "../../ducks/restaurant";
import spotIcon from "../../img/room.png";
import foodIcon from "../../img/local_pizza.png";

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
    const { center, name, position, getLocation } = this.props;
    return (
      <Marker
        icon={
          position.lat === center.lat && position.lng === center.lng
            ? foodIcon
            : spotIcon
        }
        label={`${label}`}
        onDblClick={() => getLocation(name)}
        onMouseDown={() => this.handleLabel(name)}
        onMouseUp={() => this.handleLabel("")}
        position={{ ...position }}
      />
    );
  }
}

export default connect(
  null,
  { getLocation }
)(MarkerContainer);
