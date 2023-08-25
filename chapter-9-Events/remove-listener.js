const {EventEmitter} = require('events')
const ee = new EventEmitter()

const listener1 = ()=>{console.log('1st listener')}
const listener2 = ()=>{console.log('2nd listener')}

ee.on('my-event', listener1)
ee.on('my-event', listener2)

setInterval(()=>{
    ee.emit('my-event')
}, 200)

setTimeout(()=>{
    //will only remove listener1
    ee.removeListener('my-event', listener1)
}, 500)

setTimeout(()=>{
    ee.removeListener('my-event', listener2)
}, 1110)



