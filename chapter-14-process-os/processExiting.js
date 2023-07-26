"use strict";
setInterval(() => {
  console.log("this interval is keeping the process open");
  process.exitCode = 1;
}, 500);

setTimeout(() => {
  console.log("exit after this");
  //process.exit();
  //1 is general failure
  process.exit();
}, 1750);

//listen to ecxit event
process.on("exit", (code) => {
  console.log("exiting with code", code);
  setTimeout(() => {
    console.log("this will never happen");
  }, 1000);
});
