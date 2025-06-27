// Import the EventEmitter class from the 'events' module
import EventEmitter from "node:events";

// Create a new instance of EventEmitter
const emitter = new EventEmitter();

// Set maximum number of listeners per event to 2 (default is 10)
emitter.setMaxListeners(2);

// Register first listener for event 'abc'
emitter.on('abc', () => {
    console.log('abc event 2 fired!');
});

// Register second listener for event 'abc'
emitter.on('abc', () => {
    console.log('abc event 1 fired!');
});

// Register one listener for event 'x'
emitter.on('x', () => {
    console.log('x event 1 fired!');
});

// Below are two commented-out listeners for event 'y'
// emitter.on('y', () => {
//     console.log('y event 1 fired!');
// });

// emitter.on('y', () => {
//     console.log('y event 2 fired!');
// });

// Register a one-time listener for event 'y'
emitter.once('y', () => {
    console.log('y event 3 fired!');
});

// Define a one-time listener function for event 'y'
const yListener =  () => {
    console.log('y event 4 fired!');
}

// Register the above function as a one-time listener for event 'y'
emitter.once('y', yListener);

// Below lines are various debugging and event emitting examples

// console.log(emitter._events); // Show current event listeners
// emitter.emit("abc"); // Emit 'abc' event
// console.log(emitter.getMaxListeners()); // Get max listeners limit
// console.log("EventsCounts: ", emitter._eventsCount); // Show count of event types
// console.log(emitter._maxListeners); // Show max listeners value

// emitter.emit("abc"); // Emit 'abc' multiple times
// emitter.emit("abc");
// emitter.emit("abc");

// emitter.emit("y"); // Emit 'y' (only fires once for once listeners)
// emitter.emit("y");
// console.log(emitter._events); // Check remaining listeners
// emitter.emit("y");
// emitter.emit("y");
// emitter.emit("y");
// console.log(emitter._events);

// Remove specific listener
// emitter.off("y", yListener);
// emitter.removeListener("y", yListener);
// console.log(emitter._events);

// Remove all listeners for specific events
// emitter.removeAllListeners("abc");
// emitter.removeAllListeners("x");
// emitter.removeAllListeners("y");
// console.log(emitter._events);

// Final log to show script end
console.log("end");

// The EventEmitter class in Node.js is used to handle and emit custom events.
// It allows you to register multiple event listeners for different event types,
// and emit events manually to trigger those listeners.
// This is part of the 'events' core module and is commonly used in async programming,
// like creating your own event-driven systems or working with streams, HTTP servers, etc.
