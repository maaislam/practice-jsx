import React from "react";
import "./SeasonDisplay.css";
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    iconName: "sun yellow",
  },
  winter: {
    text: "Brr! It's freezing",
    iconName: "snowflake blue",
  },
};

const SeasonDisplay = (props) => {
 
  const season = getSeason(props.lat, new Date().getMonth);

 
  const { text, iconName } = seasonConfig[season];
  return (
    <div className="season-display ">
      <i className={`${iconName} icon huge`}></i>
      <h1 className="center-align-flex-item">{text}</h1>
      <i className={`${iconName} icon huge right-align-flex-item`}></i>
    </div>
  );
};

export default SeasonDisplay;
