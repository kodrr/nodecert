const { readFile, writeFile } = require("fs");
const { join } = require("path");

readFile(__filename, { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  const out = join(__dirname, "read-write-async-callback.txt");

  writeFile(out, data.toUpperCase(), (err) => {
    if (err) {
      console.log("error in write async", err);
    }
  });
});
