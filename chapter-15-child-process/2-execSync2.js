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
  console.error("CAUGHT ERROR:", err); //error object of subprocess consist of stderr
}

//The output array indices
//correspond to the standard I/O file descriptors. Recall from the previous chapter that the file descriptor
//of STDERR is 2. Ergo the err.stderr property will contain the same buffer as err.output[2], so
//err.stderr or err.output[2] can be used to discover any error messages written to STDERR by the
//subprocess. In our case, the STDERR buffer is empty.

//lets modify

// "use strict";
// const { execSync } = require("child_process");
// try {
//   execSync(`"${process.execPath}" -e "throw Error('kaboom')"`);
// } catch (err) {
//   console.error("CAUGHT ERROR:", err); //status:1
// }
