import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import MarkerContainer from "../MarkerContainer/MarkerContainer";
import spotIcon from "../../img/room.png";

const DisplayMap = ({ isMarkerShown, center, name, nomsLocations }) => {
  const mappedLocations = nomsLocations.map((marker, i) => (
    <MarkerContainer
      key={i}
      center={center}
      position={marker.position}
      name={marker.name}
    />
  ));
  return (
    <GoogleMap zoom={15} center={{ ...center }}>
      {isMarkerShown &&
        (name === "Current Location" ? (
          <div>
            <Marker
              icon={spotIcon}
              label={`${name}`}
              position={{ ...center }}
            />
            {mappedLocations}
          </div>
        ) : (
          <div>{mappedLocations}</div>
        ))}
    </GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(DisplayMap));
