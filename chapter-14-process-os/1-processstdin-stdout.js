"use strict";

const { Transform } = require("stream");

console.log("initialized");

const uppercaseStream = () => {
  return new Transform({
    transform(chunk, enc, next) {
      next(null, chunk.toString().toUpperCase());
    },
  });
};

//node -p "crypto.randomBytes(100).toString('hex')" | node 1-process.js
//process.stdin.pipe(process.stdout);
process.stdin.pipe(uppercaseStream()).pipe(process.stdout);
