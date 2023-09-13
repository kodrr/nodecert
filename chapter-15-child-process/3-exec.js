"use strict";

//exec is async

const { exec } = require("child_process");

// exec(
//   `"${process.execPath}" -e "console.log('A'); console.error('B')"`,
//   (err, stdout, stderr) => {
//     console.log("error", err); //null because 0 exit code
//     console.log("subprocess stdout: ", stdout.toString());
//     console.log("subprocess stderr: ", stderr.toString());
//   }
// );

//Even though STDERR was written to, the first argument to the callback, err is null. This is because the
//process ended with zero exit code. Let's try throwing an error without catching it in the subprocess:

// console.error is part of stderr stream but it will not stop the process
//try throw then catch in try catch block

exec(
  `"${process.execPath}" -e "console.log('A'); throw Error('B')"`,
  (err, stdout, stderr) => {
    console.log("err", err); //code: 1 instead of status
    console.log("subprocess stdout: ", stdout.toString());
    console.log("subprocess stderr: ", stderr.toString());
  }
);

// const sp = exec(
//   `"${process.execPath}" -e "console.log('A'); throw Error('B')"` //callback is
// );

// sp.stderr.pipe(process.stderr);
