const { EventEmitter } = require("events");
const myEmitter = new EventEmitter();
// myEmitter.on('something', ()=>{console.log('emit something')})
// myEmitter.emit('something')

// myEmitter.once('once', function(){console.log('only emitted once')})
// myEmitter.emit('once')
// myEmitter.emit('once')

function run(ee) {
  ee.once("event", () => {
    console.log("run me only once");
  });
}

run(myEmitter);
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
