// "use strict";
// const { execSync } = require("child_process");
//The execSync method returns a buffer containing the output (from STDOUT
// const output = execSync(`node -e "console.log('subprocess stdio output')"`);

// console.log(output.toString());

//In the example code the command being executed happens to be the node binary. However any
//command that is available on the host machine can be executed:
("use strict");
const { execSync } = require("child_process");

const cmd = process.platform === "win32" ? "dir" : "ls";
const output = execSync(cmd);
console.log(output.toString()); //buffer

// function run(cmd) {
//   const output = execSync(cmd);
//   console.log(output.toString());
// }

// run("node ./test");
