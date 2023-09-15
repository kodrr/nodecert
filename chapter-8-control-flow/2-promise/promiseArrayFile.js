const { readFile } = require("fs/promises").promises;
const file = Array.from(Array(3)).fill(__filename);
const data = [];
const print = (x) => {
  console.log(x.toString());
};
//series kasi isa isa binasa sa array
for (let i = 0; i < file.length; i++) {
  console.log(i);
  readFile(file[i])
    .then((content) => {
      data.push(content);
      print(Buffer.concat(data));
    })
    .catch((err) => {
      console.error("this is something we dont want to have", err);
    });
}
