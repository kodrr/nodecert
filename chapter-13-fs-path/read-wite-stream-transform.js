"use strict";
const { join } = require("path");
const { createReadStream, createWriteStream } = require("fs");
const { Transform, pipeline } = require("stream");

pipeline(
  createReadStream(__filename),

  createWriteStream(join(__dirname, "out.txt"))
);
