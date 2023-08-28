"use strict";
const assert = require("assert");
const { join, basename } = require("path");
const fs = require("fs");
const project = join(__dirname, "project");
try {
  fs.rmdirSync(project, { recursive: true });
} catch (err) {}
const files = Array.from(Array(5), () => {
  return join(project, Math.random().toString(36).slice(2));
});
files.sort();
fs.mkdirSync(project);
for (const f of files) fs.closeSync(fs.openSync(f, "w"));

const out = join(__dirname, "out.txt");

function exercise() {
  // Read the files in the project folder
  const fileContents = files.map((file) => {
    try {
      return basename(file); // Get only the base name (file name without the path)
    } catch (err) {
      console.error(`Error reading file: ${file}`);
      return "";
    }
  });

  // Write the base names to the out.txt file
  try {
    fs.writeFileSync(out, fileContents.join(","), "utf8");
    console.log(`Successfully wrote file contents to ${out}`);
  } catch (err) {
    console.error("Error writing to out.txt file:", err);
  }
}

exercise();
assert.deepStrictEqual(
  fs
    .readFileSync(out)
    .toString()
    .split(",")
    .map((s) => s.trim()),
  files.map((f) => basename(f))
);
console.log("passed!");
