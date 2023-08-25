const { EventEmitter } = require('events')
const ee = new EventEmitter()

ee.on('my-event', ()=>{console.log('2nd event')})
ee.prependListener('my-event', ()=>{console.log('1st event')})
ee.emit('my-event')