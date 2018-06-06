import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import foodIcon from "../../img/local_pizza.png";
import MarkerContainer from "../MarkerContainer/MarkerContainer";

const DisplayMap = ({ isMarkerShown, center, markers, nomsLocations }) => (
  <GoogleMap zoom={15} center={{ ...center }}>
    {isMarkerShown &&
      markers.map((marker, i) => {
        return marker.position.lat === center.lat &&
          marker.position.lng === center.lng ? (
          <Marker key={i} icon={foodIcon} position={{ ...marker.position }} />
        ) : (
          <MarkerContainer
            key={i}
            position={marker.position}
            name={marker.name}
          />
        );
      })}
  </GoogleMap>
);

export default withScriptjs(withGoogleMap(DisplayMap));
