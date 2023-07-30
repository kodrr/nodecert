"use strict";
// const { spawn } = require("child_process");
// process.env.A_VAR_WE = "JUST SET";
// const sp = spawn(process.execPath, ["-p", "process.env"]);
// sp.stdout.pipe(process.stdout);
//console.log(sp.stdout);

const { spawn } = require("child_process");
process.env.A_VAR_WE = "JUST SET";
const sp = spawn(process.execPath, ["-p", "process.env"], {
  env: { SUBPROCESS_SPECIFIC: "ENV VAR" },
});
sp.stdout.pipe(process.stdout);
