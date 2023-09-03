"use strict";
// const fs = require("fs");
// const writable = fs.createWriteStream("./out");
// writable.on("finish", () => {
//   console.log("finished writing");
// });
// writable.write("A\n");
// writable.write("B\n");
// writable.write("C\n");

// writable.end("nothing more to write");

//Write own
const { Writable } = require("stream");
const createWriteStream = (data) => {
  return new Writable({
    //naka default to ObjectMode false meaning string to buffer to string, pag nilagyan mo ng decodeString hindi nya iconvert sa binary
    decodeStrings: false,
    // If we want to support strings and any other JavaScript value, we can instead set objectMode to true to
    // create an object-mode writable stream:
    //objectMode: true,
    write(chunk, enc, next) {
      data.push(chunk);
      next();
    },
  });
};

const data = [];
const writable = createWriteStream(data);
writable.on("finish", () => {
  console.log("finished writing", data);
});
writable.write("A\n");
writable.write("B\n");
writable.write("C\n");
writable.end("nothing more to write");
