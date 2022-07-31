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
      <h1 className="title">Project Lighthouse</h1>
      {lights.map((light: IBasicLight) => {
        return (
          <ExpandableArea
            key={light.id}
            title={light.id}
            content={
              <BasicLightCard
                power={light.power}
                model={light.model}
                id={light.id}
                rgb={light.rgb}
                bright={light.bright}
                onClick={async () =>
                  await YeelightAPI.toggleLight({
                    host: light.host,
                    port: light.port,
                    id: light.id,
                  })
                }
                changeColor={async (color) =>
                  await YeelightAPI.setLightColor({
                    host: light.host,
                    port: light.port,
                    id: light.id,
                    color: color,
                  })
                }
                changeBrightness={async (value: string) =>
                  await YeelightAPI.setLightBrightness({
                    host: light.host,
                    port: light.port,
                    id: light.id,
                    value: value,
                  })
                }
              />
            }
          />
        );
      })}
      {lights.length <= 0 && (
        <button className="scanBtn" onClick={getAllLights}>
          Scan Lights
        </button>
      )}
    </div>
  );
}

export default App;
