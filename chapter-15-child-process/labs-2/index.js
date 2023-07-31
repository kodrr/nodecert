"use strict";

const { spawn } = require("child_process");

function exercise(command, args) {
  return spawn(command, args, ["ignore", "inherit", process.stdin]);
}

module.exports = exercise;
