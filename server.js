const YeeDiscovery = require("yeelight-platform").Discovery;
const express = require("express");
const cors = require("cors");
const discoveryService = new YeeDiscovery();
const app = express();
app.use(cors());

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

app.get("/getAllLights", (req, res) => {
  res.json(list);
});

app.listen(process.env.REACT_APP_SERVER_PORT || 4321);
