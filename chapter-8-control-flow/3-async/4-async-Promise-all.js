const { readFile } = require("fs/promises");
const files = Array.from(Array(3)).fill(__filename);

const print = (data) => {
  console.log("this is the data", data);
};

async function readAsyncFile() {
  //reader is array of promise but not yet executed so its pending try to log
  const reader = files.map((file) => readFile(file));
  const fnData = await Promise.all(reader);
  print(Buffer.concat(fnData));
}

readAsyncFile().catch(console.error);
