import React, { Component } from "react";
import { connect } from "react-redux";
import { switcher, currentLocation } from "../../ducks/restaurant";
import { withRouter } from "react-router-dom";
import backIcon from "../../img/ic_webBack@2x.png";
import refreshIcon from "../../img/ic_webRefresh@2x.png";
import forwardIcon from "../../img/ic_webForward@2x.png";
import mapIcon from "../../img/icon_map@2x.png";
import "./Navigation.css";

class Navigation extends Component {
  getUserLocation = () => {
    const { currentLocation, history } = this.props;
    const geo = navigator.geolocation;
    if (geo) {
      geo.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        currentLocation({
          lat: latitude,
          lng: longitude,
          formattedAddress: [`Latitude: ${latitude}`, `Longitude: ${longitude}`]
        });
      });
      history.push("/list");
    } else {
      alert("Sorry your browser does not support this functionality!");
    }
  };

  render() {
    const { show, name, switcher, location } = this.props;
    return (
      <nav className="navi">
        <h1>Lunch Tyme</h1>
        <div>
          {show && location.pathname !== "/" ? (
            <img onClick={switcher} src={backIcon} alt="back" name="back" />
          ) : (
            <div className="img-placeholder" />
          )}
          <img
            id="refresh"
            onClick={() => window.location.reload()}
            src={refreshIcon}
            alt="refresh"
          />
          {name && !show && location.pathname !== "/" ? (
            <img
              onClick={switcher}
              src={forwardIcon}
              alt="forward"
              name="forward"
            />
          ) : (
            <div className="img-placeholder" />
          )}
        </div>
        <img
          id="map-icon"
          onClick={this.getUserLocation}
          src={mapIcon}
          alt="map"
        />
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    show: state.show,
    name: state.nomHolder.name
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { switcher, currentLocation }
  )(Navigation)
);
