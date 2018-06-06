import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import MarkerContainer from "../MarkerContainer/MarkerContainer";

const DisplayMap = ({ isMarkerShown, center, markers, nomsLocations }) => (
  <GoogleMap zoom={15} center={{ ...center }}>
    {isMarkerShown &&
      markers.map((marker, i) => {
        return (
          <MarkerContainer
            key={i}
            center={center}
            position={marker.position}
            name={marker.name}
          />
        );
      })}
  </GoogleMap>
);

export default withScriptjs(withGoogleMap(DisplayMap));
