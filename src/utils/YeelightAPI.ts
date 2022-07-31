export const YeelightAPI = {
  async getAllLights() {
    let raw = await fetch(
      `http://localhost:${process.env.REACT_APP_SERVER_PORT}/getAllLights`
    );
    let parsed = await raw.json();
    return parsed;
  },

  async turnLightOn({
    host,
    port,
    id,
  }: {
    host: string;
    port: string;
    id: string;
  }) {
    let raw = await fetch(
      `http://localhost:${process.env.REACT_APP_SERVER_PORT}/turnLightOn`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ host, port, id }),
      }
    );
    return await raw.json();
  },

  async turnLightOff({
    host,
    port,
    id,
  }: {
    host: string;
    port: string;
    id: string;
  }) {
    let raw = await fetch(
      `http://localhost:${process.env.REACT_APP_SERVER_PORT}/turnLightOff`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ host, port, id }),
      }
    );
    return await raw.json();
  },

  async toggleLight({
    host,
    port,
    id,
  }: {
    host: string;
    port: string;
    id: string;
  }) {
    let raw = await fetch(
      `http://localhost:${process.env.REACT_APP_SERVER_PORT}/toggleLight`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ host, port, id }),
      }
    );
    return await raw.json();
  },

  async setLightColor({
    host,
    port,
    id,
    color,
  }: {
    host: string;
    port: string;
    id: string;
    color: string;
  }) {
    let raw = await fetch(
      `http://localhost:${process.env.REACT_APP_SERVER_PORT}/setLightColor`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ host, port, id, color }),
      }
    );
    return await raw.json();
  },

  async setLightBrightness({
    host,
    port,
    id,
    value,
  }: {
    host: string;
    port: string;
    id: string;
    value: string;
  }) {
    let raw = await fetch(
      `http://localhost:${process.env.REACT_APP_SERVER_PORT}/setLightBrightness`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ host, port, id, value }),
      }
    );
    return await raw.json();
  },
};
