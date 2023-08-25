const { EventEmitter } = require('events')
const myEmitter = new EventEmitter()
myEmitter.on('something', ()=>{console.log('emit something')})
myEmitter.emit('something')

myEmitter.once('once', function(){console.log('only emitted once')})
myEmitter.emit('once')
myEmitter.emit('once')


