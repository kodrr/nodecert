"use strict";

const { spawnSync } = require("child_process");

// const result = spawnSync(process.execPath, [
//   "-e",
//   `console.log('subprocess stdio output')`,
// ]);

// console.log(result.stdout.toString());

const result = spawnSync(process.execPath, [`-e`, `process.exit(1)`]);

console.log(result);
