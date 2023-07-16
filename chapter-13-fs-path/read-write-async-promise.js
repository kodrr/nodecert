"use strict";
const { join } = require("path");
const { readFile, writesFile } = require("fs").promises;
async function run() {
  const contents = await readFile(__filename, { encoding: "utf8" });
  console.log("this is contents", contents);
  const out = join(__dirname, "out-async-promise.txt");
  await writeFile(out, contents.toUpperCase());
}
run().catch(console.error);
