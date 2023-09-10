const { EventEmitter } = require("events");
const ee = new EventEmitter();

ee.on("my-event", () => {
  console.log("2nd event");
});

ee.prependListener("my-event", () => {
  console.log("1st event");
}); //prepend in every emit of 'my-event'
//prependOnceListener prepend just once in many emit of 'my-event'

ee.emit("my-event");
ee.emit("my-event");
ee.emit("my-event");
