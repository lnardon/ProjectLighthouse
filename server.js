const YeeDiscovery = require("yeelight-platform").Discovery;
const discoveryService = new YeeDiscovery();
const express = require("express");
const app = express();

let list = [];
discoveryService.on("started", () => {
  console.log("Lighthouse Scan Started!");
});
discoveryService.on("didDiscoverDevice", (device) => {
  list.push(device);
});
discoveryService.listen();

// ENDPOINTS
app.get("/getAllLights", (req, res) => {
  res.json(list);
});

app.listen(process.env.port || 3000);
