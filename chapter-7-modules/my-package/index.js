"use strict";
const format = require("./format");
console.log("this is require:", require);

if (require.main === module) {
  // This code will be executed if the current module is the main module.
  const pino = require("pino");
  const logger = pino();
  logger.info(format.upper("my-package started"));
  process.stdin.resume();
} else {
  //This code will be executed if this is being imported or required in other module as it is being exported
  const reverseAndUpper = (str) => {
    return format.upper(str).split("").reverse().join("");
  };
  module.exports = reverseAndUpper;
}
