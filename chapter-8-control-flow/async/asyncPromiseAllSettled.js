const { readFile } = require('fs').promises

const files = [__filename, 'foo', __filename]

const print = (data)=>{
    console.log(data.toString())
}

async function readAsyncFile(){
    const reader = files.map((file)=>readFile(file)) // naka array
    const result = await Promise.allSettled(reader)
    
    result
    //status and reason is already the property of the object
    .filter(({status})=>status === 'rejected')
    .forEach(({reason})=>console.log('this is the reason', reason))

    const data = result
    .filter(({status})=>status === 'fulfilled')
    .map(({value})=> value)

    print(Buffer.concat(data))

}

readAsyncFile().catch((err)=>console.error(err))
