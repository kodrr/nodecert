const { EventEmitter } = require('events')

const ee = new EventEmitter()

const listener1 = ()=>{console.log('1st listener')}
const listener2 = ()=>{console.log('2nd listener')}

ee.on('my-event', listener1)
ee.on('my-event', listener2)
ee.on('other-event', ()=>{console.log('another event')})

setInterval(()=>{
    ee.emit('my-event')
    ee.emit('other-event')
}, 200)

setTimeout(()=>{
    ee.removeAllListeners('my-event')
}, 500)

setTimeout(()=>{
    //will remove remaining listeners
    ee.removeAllListeners()
}, 1110)