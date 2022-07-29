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
    console.log({ host, port, id });
    let raw = await fetch(
      `http://localhost:${process.env.REACT_APP_SERVER_PORT}/turnLightOn`,
      {
        method: "POST",
        headers: {
          ContentType: "application/json",
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
    console.log({ host, port, id });
    let raw = await fetch(
      `http://localhost:${process.env.REACT_APP_SERVER_PORT}/turnLightOff`,
      {
        method: "POST",
        headers: {
          ContentType: "application/json",
        },
        body: JSON.stringify({ host, port, id }),
      }
    );
    return await raw.json();
  },
};
