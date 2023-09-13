"use strict";
const { spawn } = require("child_process");

// const sp = spawn(process.execPath, [
//   `-e`,
//   `console.log('sub process stdio output')`,
// ]);

const sp = spawn(process.execPath, [`-e`, `process.exit(1)')`]); // no callback

console.log("pid", sp.pid); //sp is like process itself

sp.stdout.pipe(process.stdout);

sp.on("close", (status) => {
  console.log("exit status was", status);
});

// const { exec } = require("child_process");
// const sp = exec(
//   `"${process.execPath}" -e "console.log('subprocess stdio output')"`
// );
// console.log("pid is", sp.pid);
// sp.stdout.pipe(process.stdout);
// sp.on("close", (status) => {
//   console.log("exit status was", status);
// });
