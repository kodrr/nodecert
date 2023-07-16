"use strict";
// const fs = require("fs");
// const readable = fs.createReadStream("img .jpg");
// //const readable = fs.createReadStream(__filename)
// readable.on("data", (data) => {
//   console.log("this is data", data);
// });
// readable.on("end", () => {
//   console.log("finished reading");
// });

//create own
// const { Readable } = require('stream')
// const createReadStream = ()=>{
//     const data = ['some', 'data', 'to', 'read']
//     return new Readable({
//         encoding: 'utf8',
//         read(){
//             if(data.length === 0)this.push(null)
//             else this.push(data.shift())
//         }
//     })
// }
// const readable = createReadStream()
// readable.on('data', (data)=>{
//     console.log('we got the data', data)
// })
// readable.on('end', ()=>{console.log('done reading')})

//Readable.from
// const {Readable } = require('stream')
// const readable = Readable.from(['some', 'data', 'to', 'read'])
// readable.on('data', (data)=>{console.log('we got data', data)})
// readable.on('end', ()=>{console.log('finished reading')})
