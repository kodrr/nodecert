const { readFile } = require('fs').promises

const files = Array.from(Array(3)).fill(__filename)

const print = (data)=>{
    console.log('this is the data', data)
    console.log(data.toString())
}

//ito yung case na series ng unknown length na need mo mun tapusin basahin isa isa ang array
async function readAsyncFile(){
    const data = []
    for(const file of files){
        data.push(await readFile(file))
    }
    //tinapos nya muna basahin isa isa nag file, unlike promise.all na saka execute yung promise sa promise.all
    //dito may result na yung readFile kasi nga nag await ka
    print(Buffer.concat(data))
}

readAsyncFile().catch(console.error)