// "use strict";
// const { createGzip } = require("zlib");
// const transform = createGzip();

// transform.on("data", (datacj) => {
//   console.log("got gzip", data.toString("base64"));
// });

// transform.write("first");
// setTimeout(() => {
//   transform.end("second");
// }, 500);

"use strict";
const { Transform } = require("stream");
const { scrypt } = require("crypto");
const createTransformStream = () => {
  return new Transform({
    decodeStrings: false,
    encoding: "hex",
    transform(chunk, enc, next) {
      scrypt(chunk, "a-salt", 32, (err, key) => {
        if (err) {
          next(err);
          return;
        }
        next(null, key);
      });
    },
  });
};

const transform = createTransformStream();
transform.on("data", (data) => {
  console.log("got data:", data);
});

transform.write("A\n");
transform.write("B\n");
transform.write("C\n");
transform.end("nothing more to write");
