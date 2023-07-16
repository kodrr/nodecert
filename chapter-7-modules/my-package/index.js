"use strict";
const format = require("./format");
console.log(format.default);

if (require.main === module) {
  console.log("tesss");
  const pino = require("./my-package/node_modules/pino/pino");
  const logger = pino();
  logger.info(format.upper("my-package started"));
  process.stdin.resume();
} else {
  const reverseAndUpper = (str) => {
    return format.upper(str).split("").reverse().join("");
  };
  module.exports = reverseAndUpper;
}
