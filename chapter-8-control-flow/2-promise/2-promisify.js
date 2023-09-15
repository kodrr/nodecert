//no need to convert to promise, just use directcly tha promise api
const { promisify } = require("util");
const { readFile } = require("fs/promises"); //node v18
//const { readFile } = require ('fs').promises

function myAsyncOps() {
  return readFile(__filename);
}

myAsyncOps()
  .then((data) => {
    return data.toString();
  })
  .then((stringData) => {
    console.log(stringData);
  });

myAsyncOps().catch((err) => {
  console.log("this is error", err);
});
