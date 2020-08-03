import React, { useState, useEffect } from "react";

import "./index.css";
import ToggleLights from "../../components/ToggleLights";
import LightsListCard from "../../components/LightsListCard";

function Home() {
  const [bulbs, setBulbs] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://192.168.15.19:4555/bulbsList");
      const parsedResponse = await response.json();
      setBulbs(parsedResponse.body);
    })();
  }, []);

  const handleTurnOn = () => {
    fetch("http://192.168.15.19:4555/on", { mode: "no-cors" });
  };

  const handleTurnOff = () => {
    fetch("http://192.168.15.19:4555/off", { mode: "no-cors" });
  };

  const handleToggle = () => {
    fetch("http://192.168.15.19:4555/toggle", { mode: "no-cors" });
  };

  const handleSingleToggle = (ip) => {
    fetch("http://192.168.15.19:4555/single", {
      method: "POST",
      headers: {
        contentType: "application/json",
        lampIp: ip,
        mode: "no-cors",
      },
    });
  };

  return (
    <div className="homeContainer">
      <h3 className="sectionTitle">Quick Actions</h3>
      <div className="quickActionsContainer">
        <ToggleLights toggle={handleTurnOn} label="All on" type="bulb" />
        <ToggleLights toggle={handleTurnOff} label="All off" />
        <ToggleLights toggle={handleToggle} label="Toggle All" />
      </div>
      <div className="lightsList">
        {bulbs.map((bulb) => {
          return (
            <LightsListCard
              bulb={bulb}
              key={bulb.ip}
              toggle={handleSingleToggle}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
