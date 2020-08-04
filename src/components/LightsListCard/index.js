import React from "react";

import "./index.css";
import stipeImg from "../../assets/lightstrip.png";
import bulbImage from "../../assets/white_bulb.png";

const LightsListCard = ({ bulb, toggle }) => {
  return (
    <div className="lightsListCardContainer">
      <div className="lightImage">
        <img
          src={bulb.capabilities.model === "stripe" ? stipeImg : bulbImage}
          alt="Light"
          className={`lightImage ${
            bulb.capabilities.power === "on" ? "on" : "off"
          }`}
        />
      </div>
      <div className="infoDiv">
        <h2> {bulb.capabilities.name} </h2>
      </div>
      <div className="lightSwitcher">
        <button className="lightToggle" onClick={() => toggle(bulb.ip)}>
          {bulb.capabilities.power === "on" ? "ON" : "OFF"}
        </button>
      </div>
    </div>
  );
};

export default LightsListCard;
