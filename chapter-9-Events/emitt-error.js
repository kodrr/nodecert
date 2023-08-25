const {EventEmitter} = require('events')

const ee = new EventEmitter()

//keep process alive
process.stdin.resume()

ee.on('error', (err)=>{
    console.log('error', err.message)
})

ee.emit('error', new Error('oh no'))