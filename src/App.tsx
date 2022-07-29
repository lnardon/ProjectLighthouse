import { useState } from "react";

import BasicLightCard from "./components/BasicLightCard";
import { IBasicLight } from "./interfaces/IBasicLight";
import "./App.css";

function App() {
  const [lights, setLights] = useState([]);

  async function getAllLights() {
    let raw = await fetch(
      `http://localhost:${process.env.REACT_APP_SERVER_PORT}/getAllLights`
    );
    let parsed = await raw.json();
    setLights(parsed);
  }

  return (
    <div className="App">
      <h1>Project Lighthouse</h1>
      {lights.map((light: IBasicLight) => {
        return (
          <BasicLightCard
            power={light.power}
            model={light.model}
            id={light.id}
          />
        );
      })}
      <button onClick={getAllLights}>Get Lights</button>
    </div>
  );
}

export default App;
