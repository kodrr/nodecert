const { readFile } = require('fs').promises

// const files = Array.from(Array(3)).fill(__filename)
const files = [__filename, 'not a file', __filename]

const print = (data)=>{
    console.log('this is the data in print', data)
    // console.log('this is the data', Buffer.concat(data))
}

const printErr = (err)=>{console.error(err)}

// const arrPromise = []

// for(let i =0; i < files.length; i++){
//     arrPromise.push(readFile(files[i]))
// }

//using map 
const readers = files.map((file)=>
    //output of readFile is Buffer type data if walang error sa pag resoleve ng promise all. else pga may error magiging Object type sya
    readFile(file)
)

console.log('this is the array of promise', readers)
Promise.all(readers)
.then((data)=>{
    print(data)
})
.catch((err)=>{printErr(err)})

// Promise.all(arrPromise).then((data)=>{
//     console.log('i expect this to be an array of resolve data', data)
//     print(data)
// })
// .catch(printErr(err))