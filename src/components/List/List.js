import React, { Component } from "react";
import { connect } from "react-redux";
import { getRestaurants, getLocation } from "../../ducks/restaurant";
import Detail from "../Detail/Detail";
import RestaurantLocation from "../RestaurantLocation/RestaurantLocation";
import "./List.css";

class List extends Component {
  componentDidMount() {
    this.props.getRestaurants();
  }

  displayLocation = name => {
    this.props.getLocation(name);
  };

  render() {
    const { show, nomDetail, nomList } = this.props;
    const selectedName = nomDetail && nomDetail.name;
    const detailClass = ["detail-container"];
    const locationClass = ["location-container"];
    if (show) {
      detailClass.push("found");
      locationClass.push("found");
    }
    console.log(nomList);
    let nomsListed = nomList.map((restaurant, i) => {
      return (
        <Detail
          key={i}
          restaurant={restaurant}
          selectedName={selectedName}
          displayLocation={this.displayLocation}
        />
      );
    });
    let nomsLocations = nomList.map(restaurant => {
      return {
        name: restaurant.name,
        position: {
          lat: restaurant.location.lat,
          lng: restaurant.location.lng
        }
      };
    });
    return (
      <div className="list">
        <section className={detailClass.join(" ")}>{nomsListed}</section>
        <section className={locationClass.join(" ")}>
          <RestaurantLocation
            nomsLocations={nomsLocations}
            nomDetail={nomDetail}
          />
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getRestaurants, getLocation }
)(List);
