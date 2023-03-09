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

  socket.on("submit", (menu) => {
    lunchList.push({
      id: lunchList.length + 1,
      name: menu.name,
      people: 1,
    });

    sockets.forEach((socket) => {
      socket.emit("newMenu", lunchList);
    });
  });

  socket.on("clickMenu", (menu) => {
    for (let i = 0; i < lunchList.length; i++) {
      if (lunchList[i].id === menu.id) {
        lunchList[i].people += 1;
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
