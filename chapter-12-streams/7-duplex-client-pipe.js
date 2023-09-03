"use strict";
const net = require("net");
const socket = net.connect(3000);

//originally this is socket.on('data', ...)
//which listens to the socket (duplex) but now being pipe to process.stdout
//the pipe method sets up a data listener on the readable stream and
// automatically writes to the writable stream as data becomes available.
//process.stdout - is a writable stream
socket.pipe(process.stdout);
socket.write("hello\n");

setTimeout(() => {
  socket.write("all done\n");
  setTimeout(() => {
    socket.end();
  }, 250);
}, 3250);
