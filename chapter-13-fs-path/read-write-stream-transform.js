"use strict";
const { join } = require("path");
const { createReadStream, createWriteStream } = require("fs");
const { Transform, pipeline } = require("stream");

const createUppercaseStream = () => {
  return new Transform({
    transform(chunk, enc, next) {
      const uppercased = chunk.toString().toUpperCase();
      next(null, uppercased);
    },
  });
};

pipeline(
  createReadStream(__filename),
  createUppercaseStream(),
  createWriteStream(join(__dirname, "pipeline-transform.txt")),
  (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("finish writing");
  }
);
