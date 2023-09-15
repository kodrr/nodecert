const { readFile } = require("fs/promises");

const [bigFile, mediumFile, smallFile] = Array.from(Array(3)).fill(__filename);

const print = (data) => {
  console.log("this is the data", data.toString());
};

async function readAsyncParallel() {
  //no await meaning they are promises no yet settled
  const big = readFile(bigFile);
  const medium = readFile(mediumFile);
  const small = readFile(smallFile);

  big.then(print);
  medium.then(print);
  small.then(print);

  //   await small;
  //   await medium;
  //   await big;
}

readAsyncParallel().catch(console.error);
