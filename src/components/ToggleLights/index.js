import React from "react";

import "./index.css";
import bulbIcon from "../../assets/white_bulb.png";
import stripIcon from "../../assets/lightstrip.png";

function ToggleLights({ toggle, label, type }) {
  return (
    <div className="toggleLightsContainer" onClick={toggle}>
      <img
        src={type === "bulb" ? bulbIcon : stripIcon}
        alt="Light Icon"
        className="cardIcon"
        // style={{
        //   filter:
        //     "invert(99%) sepia(5%) saturate(91%) hue-rotate(189deg) brightness(115%) contrast(89%)",
        // }}
      />
      <h1 className="toggleLightsTitle">{label}</h1>
    </div>
  );
}

export default ToggleLights;
