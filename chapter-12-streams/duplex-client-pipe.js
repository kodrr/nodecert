"use strict";
const net = require("net");
const socket = net.connect(3000);
socket.pipe(process.stdout);
socket.write("hello\n");
setTimeout(() => {
  socket.write("all done\n");
  setTimeout(() => {
    socket.end();
  }, 250);
}, 3250);
