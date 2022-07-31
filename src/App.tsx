import { useState } from "react";

import { YeelightAPI } from "./utils/YeelightAPI";
import BasicLightCard from "./components/BasicLightCard";
import ExpandableArea from "./components/ExpandableArea";
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
          <ExpandableArea
            title={light.id}
            content={
              <BasicLightCard
                key={light.id}
                power={light.power}
                model={light.model}
                id={light.id}
                onClick={async () =>
                  await YeelightAPI.toggleLight({
                    host: light.host,
                    port: light.port,
                    id: light.id,
                  })
                }
              />
            }
          />
        );
      })}
      <button onClick={getAllLights}>Get Lights</button>
    </div>
  );
}

export default App;
