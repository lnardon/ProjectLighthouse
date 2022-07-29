const YeeDiscovery = require("yeelight-platform").Discovery;
const YeeDevice = require("yeelight-platform").Device;
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const discoveryService = new YeeDiscovery();
const app = express();

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

let list = [];
discoveryService.on("started", () => {
  console.log("Lighthouse Scan Started!");
});
discoveryService.on("didDiscoverDevice", (device) => {
  if (list.filter((item) => device.id === item.id).length <= 0) {
    list.push(device);
  }
});
discoveryService.listen();

// ENDPOINTS
app.get("/getAllLights", (req, res) => {
  res.json(list);
});

app.post("/turnLightOn", (req, res) => {
  const body = {
    host: "192.168.0.101",
    port: "55443",
    id: "0x000000000456b205",
  };

  const device = new YeeDevice({ host: body.host, port: body.port });
  device.connect();
  device.on("deviceUpdate", (newProps) => {
    device.disconnect();
    console.log(newProps);
  });
  device.on("connected", () => {
    device.sendCommand({
      id: body.id,
      method: "set_power",
      params: ["on", "smooth", 300],
    });
  });
});

app.post("/turnLightOff", (req, res) => {
  const body = {
    host: "192.168.0.101",
    port: "55443",
    id: "0x000000000456b205",
  };

  const device = new YeeDevice({ host: body.host, port: body.port });
  device.connect();
  device.on("deviceUpdate", (newProps) => {
    console.log(newProps);
  });
  device.on("connected", () => {
    device.sendCommand({
      id: body.id,
      method: "set_power",
      params: ["off", "smooth", 300],
    });
  });

  device.disconnect();
});

app.listen(process.env.REACT_APP_SERVER_PORT || 4321);
