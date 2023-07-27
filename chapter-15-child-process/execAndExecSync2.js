"use strict";
// path of node binary procees.execPath
// const { execSync } = require("child_process");

// const output = execSync(
//   `"${process.execPath}" -e "console.error('subprocess stdio output')"`
// );

// console.log(output.toString());

const { execSync } = require("child_process");
try {
  execSync(`"${process.execPath}" -e "process.exit(1)"`);
} catch (err) {
  console.error("CAUGHT ERROR:", err);
}
