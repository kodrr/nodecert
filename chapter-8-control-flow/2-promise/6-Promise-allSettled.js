const { readFile } = require("fs/promises");

const files = [__filename, "this is not a file", __filename];
//const files = Array.from(Array(3).fill());

const print = (data) => {
  //data is array of obj, ex. [{status: 'fulfilled', value: ''}, {status: 'rejected', reason: {}}]
  data
    .filter((everyObj) => everyObj.status === "rejected")
    .forEach((obj) => console.log("reason of rejection", obj.reason));

  const final = data
    .filter((everyObj) => everyObj.status === "fulfilled")
    .map((obj) => obj.value);

  console.log(Buffer.concat(final).toString());
};

const readers = files.map((file) => readFile(file));

Promise.allSettled(readers)
  .then((data) => print(data))
  .catch((err) => console.error("eroooooor", err));
