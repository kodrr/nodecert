const { readFile } = require("fs/promises");

const files = Array.from(Array(3)).fill(__filename);
//const files = [__filename, "not a file for case error", __filename];

const print = (err, data) => {
  if (err) console.error("this is error", err);
  console.log("this is data", Buffer.concat(data).toString());
};

const readers = files.map((file) => readFile(file));

console.log("this is the array of promise", readers);

//Promise.all will settle all the promise in the array and will returns a promise that resolves
//when all promises have been  resolved. That returned promise resolves to an array of the values
// for each of the promises. However if one of the promises was to fail, Promise.all will reject, and any successfully resolved
// promises are ignored.
Promise.all(readers)
  .then((data) => {
    //data is the array of resolves values(data) for each promise
    print(null, data);
  })
  .catch((err) => {
    print(err);
  });
