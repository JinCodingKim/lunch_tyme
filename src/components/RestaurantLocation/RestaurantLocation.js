import React, { Component } from "react";
import DisplayMap from "../DisplayMap/DisplayMap";
import "./RestaurantLocation.css";

class RestaurantLocation extends Component {
  state = {
    lat: 0,
    lng: 0
  };

  componentDidMount() {
    const { nomDetail } = this.props;
    if (nomDetail && nomDetail.location) {
      this.setState({
        lat: nomDetail.location.lat,
        lng: nomDetail.location.lng
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { nomDetail } = this.props;
    if (prevProps.nomDetail !== nomDetail) {
      this.setState({
        lat: nomDetail.location.lat,
        lng: nomDetail.location.lng
      });
    }
  }

  render() {
    const { lat, lng } = this.state;
    const { nomsLocations } = this.props;
    const { name, category, location, contact } = this.props.nomDetail;
    const twitterAvail = contact && contact.twitter;
    return (
      lat !== 0 &&
      lng !== 0 && (
        <div className="location">
          <DisplayMap
            isMarkerShown
            googleMapURL={`https://maps.googleapis.com/maps/api/js?&v=3.exp&libraries=geometry,drawing,places&key=${
              process.env.REACT_APP_GOOGLE_KEY
            }`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div id="map-container" />}
            mapElement={<div id="map" />}
            center={{ lat, lng }}
            markers={nomsLocations}
          />
          <div className="restaurant-header">
            <h2>{name}</h2>
            <h4>{category}</h4>
          </div>
          <div className="restaurant-body">
            <p>
              {location.formattedAddress[0]}
              <br />
              {location.formattedAddress[1]}
            </p>
            {contact && <p>{contact.formattedPhone}</p>}
            {twitterAvail && <p>@{contact.twitter}</p>}
          </div>
        </div>
      )
    );
  }
}
export default RestaurantLocation;
