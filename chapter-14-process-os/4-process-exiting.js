"use strict";
setInterval(() => {
  console.log("this interval is keeping the process open");
  //explicitly assigining exitcode
  //process.exitCode = 1;
}, 500);

setTimeout(() => {
  console.log("exit after this");
  //1 is general failure
  process.exit();
}, 1750);

//listen to "exit" event
process.on("exit", (code) => {
  console.log("exiting with code", code);
  setTimeout(() => {
    console.log("this will never happen");
  }, 1000);
});

//echo $? - determine exit code in terminal
