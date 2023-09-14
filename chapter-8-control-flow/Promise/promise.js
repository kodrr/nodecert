const { readFile } = require("fs");

//pwede naman kasing callback agad eh kung need mo agad nung result
//or pwede din pala pero mag kaka callback hell ka
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
    console.log("this is data", data);
  })
  .catch((err) => {
    console.log("this is err", err);
  });
