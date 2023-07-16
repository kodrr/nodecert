const { readFile } = require('fs').promises
const [bigFile, mediumFile, smallFile] = Array.from(Array(3)).fill(__filename)

const print = (data)=>{
    console.log('this is data', data)
    //magkakaroon lnag ng buffer type pag oks ang pag basa ni readFile da __file
    console.log(data.toString())
}

readFile(bigFile).then(print).catch(console.error) //rekta na sa then and catch yung handler function
readFile(mediumFile).then(print).catch(console.error)
readFile(smallFile).then(print).catch(console.error)

