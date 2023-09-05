"use strict";
// const { join } = require("path");

// console.log("out file:", join(__dirname, "out.txt"));

const { parse, basename, dirname, extname } = require("path");
console.log("filename:", __filename);
console.log("filename parsed:", parse(__filename));
console.log("filename basename:", basename(__filename));
console.log("filename dirname:", dirname(__filename));
console.log("filename extname:", extname(__filename));
