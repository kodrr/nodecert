"use strict";
const { join } = require("path");
const { readFileSync, writeFileSync } = require("fs");
const contents = readFileSync(__filename, { encoding: "utf-8" });
writeFileSync(join(__dirname, "write-filesync.txt"), contents.toUpperCase(), {
  flag: "a",
});
