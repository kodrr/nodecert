const { readFile } = require('fs').promises
//Array from - will return an array
//Array 3 - will have 3 elements
//fill - will put __filename as the element
const [ bigFile, mediumFile, smallFile ] = Array.from(Array(3)).fill(__filename)

const print = (data)=>{
    console.log(data)
}

readFile(bigFile)
.then((data)=>{
    print(data)
    return readFile(mediumFile)
})
.then((data)=>{
    print(data)
    return readFile(smallFile)
}).then(print) //assuming wala ka nang gagawin,  .then here is understood that your receiving a resolve promise and youre not returning or do any other ops
.catch((err)=>{
    console.error(err)
})