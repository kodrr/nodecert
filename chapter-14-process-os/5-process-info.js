"use strict";
console.log("Current Directory", process.cwd());
console.log("Process Platform", process.platform);
console.log("Process ID", process.pid);

console.log("Process Uptime", process.uptime());
setTimeout(() => {
  console.log("Process Uptime", process.uptime());
}, 1000);

//process.cwd() -- will return the cwd of the current process like child process
//process.env.PWD -- it will juts return the process where it started
