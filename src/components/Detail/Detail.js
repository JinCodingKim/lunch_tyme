import React from "react";
import "./Detail.css";

const Detail = ({ restaurant, selectedName, displayLocation }) => {
  const cardStyle = {
    backgroundImage: `url(${restaurant.backgroundImageURL})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };
  return (
    <div
      className="card"
      style={cardStyle}
      onClick={() => displayLocation(restaurant.name)}
    >
      <div className="card-content">
        <h2
          style={{
            color:
              selectedName === restaurant.name
                ? "rgb(52, 179, 121)"
                : "rgb(255, 255, 255)"
          }}
        >
          {restaurant.name}
        </h2>
        <h4
          style={{
            color:
              selectedName === restaurant.name
                ? "rgb(52, 179, 121)"
                : "rgb(255, 255, 255)"
          }}
        >
          {restaurant.category}
        </h4>
      </div>
    </div>
  );
};
export default Detail;
