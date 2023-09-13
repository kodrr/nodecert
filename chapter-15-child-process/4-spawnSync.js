"use strict";

const { spawnSync } = require("child_process");

// const result = spawnSync(process.execPath, [
//   "-e",
//   "console.log('subprocess stdio output')",
// ]);

//process.stdout.write(result.stdout.toString()) - writing to main process since its a writable stream
//console.log(result); //result of the spawned process

const result = spawnSync(process.execPath, [`-e`, `process.exit(1)`]); //it does not throw

console.log(result); //the result object of the sub process including status and stderr
