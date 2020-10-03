const EventEmitter = require("events");

const event = new EventEmitter();

event.on("this is a event", () =>{
    console.log("The event is called after use this");
});

event.on("this is a event", (num) =>{
    console.log(`This is a num ${num}`);
})

event.emit("this is a event", 400);

