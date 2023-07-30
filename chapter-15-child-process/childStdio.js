"use strict";
const { spawn } = require("child_process");
const sp = spawn(
  process.execPath,
  ["-e", `console.error('err output'); process.stdin.pipe(process.stdout)`],
  //{ stdio: ["pipe", "pipe", "pipe"] }
  //{ stdio: ["pipe", "inherit", "pipe"] }
  //[0]-stdin, [1]-stdout, [2]stderr
  { stdio: ["pipe", "inherit", process.stdout] }
);
//sp.stdout.pipe(process.stdout);
//sp.stderr.pipe(process.stdout);
sp.stdin.write("this input will become output\n");
sp.stdin.end();
