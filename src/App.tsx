import { useState } from "react";

import { YeelightAPI } from "./utils/YeelightAPI";
import BasicLightCard from "./components/BasicLightCard";
import { IBasicLight } from "./interfaces/IBasicLight";
import "./App.css";

function App() {
  const [lights, setLights] = useState<IBasicLight[]>([]);

  async function getAllLights() {
    let response = await YeelightAPI.getAllLights();
    setLights(response);
  }

  return (
    <div className="App">
      <h1>Project Lighthouse</h1>
      {lights.map((light: IBasicLight) => {
        return (
          <BasicLightCard
            key={light.id}
            power={light.power}
            model={light.model}
            id={light.id}
          />
        );
      })}
      <button onClick={getAllLights}>Get Lights</button>
      <button
        onClick={async () =>
          await YeelightAPI.turnLightOn({
            host: lights[2].host,
            port: lights[2].port,
            id: lights[2].id,
          })
        }
      >
        TURN ON
      </button>
    </div>
  );
}

export default App;
