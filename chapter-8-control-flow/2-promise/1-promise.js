const { readFile } = require("fs");

// function myAsyncCbFn(){
//     readFile(__filename, (err, data)=>{
//         if(err)return err
//         console.log('this is data', data.toString())
//     })
// }

function myAsyncOps() {
  return new Promise((resolve, reject) => {
    readFile(__filename, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

// myAsyncCbFn()
myAsyncOps()
  .then((data) => {
    console.log("this is data", data); //data is buffer
  })
  .catch((err) => {
    console.log("this is err", err);
  });
