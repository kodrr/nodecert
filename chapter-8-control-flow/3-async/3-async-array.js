const { readFile } = require("fs/promises");

const files = Array.from(Array(3)).fill(__filename);

const print = (data) => {
  console.log("this is the data", data);
  console.log(data.toString());
};

async function readAsyncFile() {
  const data = [];
  for (const file of files) {
    //await will already settle the promise
    //Promise is either pending or settled, and if it
    //is settled it's either resolved or rejected
    data.push(await readFile(file));
  }
  print(Buffer.concat(data));
}

readAsyncFile().catch(console.error);
