const YeeDiscovery = require("yeelight-platform").Discovery;
const YeeDevice = require("yeelight-platform").Device;
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const discoveryService = new YeeDiscovery();
const app = express();

const hexToDecimal = (hex) => parseInt(hex, 16);

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
  const device = new YeeDevice({ host: req.body.host, port: req.body.port });
  device.connect();
  device.on("deviceUpdate", (newProps) => {
    device.disconnect();
    console.log(newProps);
    res.json(newProps);
  });
  device.on("connected", () => {
    device.sendCommand({
      id: req.body.id,
      method: "set_power",
      params: ["on", "smooth", 300],
    });
  });
});

app.post("/turnLightOff", (req, res) => {
  const device = new YeeDevice({ host: req.body.host, port: req.body.port });
  device.connect();
  device.on("deviceUpdate", (newProps) => {
    device.disconnect();
    console.log(newProps);
    res.json(newProps);
  });
  device.on("connected", () => {
    device.sendCommand({
      id: req.body.id,
      method: "set_power",
      params: ["off", "smooth", 300],
    });
  });
});

app.post("/toggleLight", (req, res) => {
  const device = new YeeDevice({ host: req.body.host, port: req.body.port });
  device.connect();
  device.on("deviceUpdate", (newProps) => {
    device.disconnect();
    console.log(newProps);
    res.json(newProps);
  });
  device.on("connected", () => {
    device.sendCommand({
      id: req.body.id,
      method: "toggle",
      params: [],
    });
  });
});

app.post("/setLightColor", (req, res) => {
  const device = new YeeDevice({ host: req.body.host, port: req.body.port });
  device.connect();
  device.on("deviceUpdate", (newProps) => {
    device.disconnect();
    console.log(newProps);
    res.json(newProps);
  });
  let color = req.body.color;
  color = color.replace(/[#]/g, "");
  device.on("connected", () => {
    device.sendCommand({
      id: req.body.id,
      method: "set_rgb",
      params: [hexToDecimal(color), "smooth", 700],
    });
  });
});

app.post("/setLightBrightness", (req, res) => {
  const device = new YeeDevice({ host: req.body.host, port: req.body.port });
  device.connect();
  device.on("deviceUpdate", (newProps) => {
    device.disconnect();
    console.log(newProps);
    res.json(newProps);
  });
  device.on("connected", () => {
    device.sendCommand({
      id: req.body.id,
      method: "set_bright",
      params: [parseInt(req.body.value), "smooth", 700],
    });
  });
});

app.listen(process.env.REACT_APP_SERVER_PORT || 4321);
