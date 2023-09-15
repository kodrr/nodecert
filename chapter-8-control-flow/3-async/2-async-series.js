const { readFile } = require("fs/promises");
const [bigfile, mediumFile, smallFile] = Array.from(Array(3)).fill(__filename);

const print = (data) => {
  console.log("data", data);
  console.log(data.toString());
};

// async function readAsync(){
//     print(await readFile(bigfile))
//     print(await readFile(mediumFile))
//     print(await readFile(smallFile))
// }

//concat all data
async function readAsync() {
  const data = [
    await readFile(bigfile),
    await readFile(mediumFile),
    await readFile(smallFile),
  ];
  //data is array of data from readfile. either resolve or rejected
  print(Buffer.concat(data));
}

readAsync().catch(console.error);
