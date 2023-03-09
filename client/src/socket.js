import io from "socket.io-client";
import config from "./config.json"

export const socket = io(`${config.Server}:${config.Port}`, {
  cors: {
    origin: "*",
  },
});
