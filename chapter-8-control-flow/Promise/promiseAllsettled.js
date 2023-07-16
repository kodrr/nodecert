const { readFile } = require('fs').promises

const files = [__filename, 'this is not a file', __filename]

//series binisa
//parallel inexecute sa promise array

const print = (data)=>{
    console.log('this is the data in print')
    data
    .filter((everyObj)=> everyObj.status === 'rejected')
    //forEach is more of may gagawin/babaguhin ka na data
    .forEach((obj)=>console.log(obj.reason))
    const final = data
    .filter((everyObj)=> everyObj.status === 'fulfilled')
    //map is faster, it will return a new array, kumbaga may gagawin ka pa dito fro further proccesing at trip mong return ay array
    .map((obj)=>obj.value) //automatic return

    console.log(Buffer.concat(final).toLocaleString())
}

const readers = files.map((file)=>readFile(file))

Promise.allSettled(readers)
.then((data)=>print(data))
.catch((err)=>console.error(err))

