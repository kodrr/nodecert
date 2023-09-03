"use strict";
// const fs = require('fs')
// const readable = fs.createReadStream(__filename)

// readable.on('data', (data)=>{
//     console.log('got the data', data.toJSON())
// })
// readable.on('end', ()=>{console.log('finish reading')})

const { Readable } = require("stream");
const createReadStream = () => {
  const data = ["some", "data", "to", "read"];
  return new Readable({
    //objectMode: true, if not indicated it will default to false which is buffer data
    //encoding here will turn string to buffer to string
    encoding: "utf-8",
    read() {
      if (data.length === 0) this.push(null);
      else this.push(data.shift());
    },
  });
};

const readable = createReadStream();
readable.on("data", (data) => {
  console.log("got data", data);
});
readable.on("end", () => {
  console.log("finished reading");
});

//iterable structure
//Readable.from utility function sets objectMode to true by default
// const { Readable } = require("stream");
// const readable = Readable.from(["some", "data", "to", "read"]);
// readable.on("data", (data) => {
//   console.log("got data", data);
// });
// readable.on("end", () => {
//   console.log("finished reading");
// });
