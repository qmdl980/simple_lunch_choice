const express = require("express");
const http = require("http");
const app = express();
const io = require("socket.io");

const httpServer = http.createServer(app).listen(8080);

const server = io(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const sockets = [];
let lunchList = [];

server.on("connect", (socket) => {
  console.log("client connected");
  sockets.push(socket);

  socket.emit("newMenu", lunchList);

  socket.on("submit", (data) => {
    lunchList.push({
      id: lunchList.length + 1,
      name: data.name,
      people: [data.user],
    });

    sockets.forEach((socket) => {
      socket.emit("newMenu", lunchList);
    });
  });

  socket.on("clickMenu", (data) => {
    for (let i = 0; i < lunchList.length; i++) {
      if (lunchList[i].id === data.id) {
        lunchList[i].people.push(data.user);
        break;
      }
    }

    sockets.forEach((socket) => {
      socket.emit("newMenu", lunchList);
    });
  });

  socket.on("disconnect", (socket) => {
    console.log("socket disconnect");
  });
});
