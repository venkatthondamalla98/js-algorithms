const EventEmitter = require("events");
const emitter = new EventEmitter()

emitter.on("order-pizza", () => {
    console.log("Order was successfully placed")
})

emitter.emit("order-pizza")