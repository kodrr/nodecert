const { readFile } = require('fs').promises

const [bigFile, mediumFile, smallFile] = Array.from(Array(3)).fill(__filename)

const print = (data)=>{
    console.log('this is the data', data.toString())
}

async function readAsyncParallel() {
    //yung mga const ay babsahin si file at nakapromise na
    const big =  readFile(bigFile)
    const medium = readFile(mediumFile)
    const small = readFile(smallFile)

    //parallel para iprint dito pero sa await sa baba naayos kung pano iprint
    big.then((data)=>{
        console.log('this is the big file1111111111111111111111111111111111111')
        print(data)
    })
    medium.then(print)
    small.then(print)

    //d ko gets bakit ganito
    //pero na series dito
    await big
    await small
    await medium


}

readAsyncParallel().catch(console.error)