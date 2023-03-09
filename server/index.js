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
let lunchList = [
  { id: 1, name: "국밥", people: 1 },
  { id: 2, name: "국밥", people: 2 },
  { id: 3, name: "국밥", people: 3 },
  { id: 4, name: "국밥", people: 4 },
  { id: 5, name: "국밥", people: 5 },
  { id: 6, name: "국밥", people: 6 },
  { id: 7, name: "국밥", people: 7 },
  { id: 8, name: "국밥", people: 8 },
  { id: 9, name: "국밥", people: 9 },
  { id: 10, name: "국밥", people: 10 },
  { id: 11, name: "국밥", people: 11 },
];

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
