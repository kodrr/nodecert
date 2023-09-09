"use strict";
const os = require("os");
setInterval(() => {
  console.log("system uptime", os.uptime()); //secs
  console.log("freemem", os.freemem()); //bytes
  console.log("totalmem", os.totalmem()); //bytes
  console.log();
}, 1000);
