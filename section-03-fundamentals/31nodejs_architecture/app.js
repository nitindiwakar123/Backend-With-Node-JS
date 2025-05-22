//Code of understanding node js architecture and event loop
const fs = require('fs');

setTimeout(() => {
    console.log("Hello from setTimeout 1");
}, 0);

fs.readFile("text.txt", "utf-8", () => {
    console.log("Hello from read file");

    setTimeout(() => console.log("Hello from setTimeout 2"), 0);
    setTimeout(() => console.log("Hello from setTimeout 3"), 5000);
    setImmediate(() => console.log("Hello from set Immediate 2"));
});

setImmediate(() => console.log("Hello from set Immediate"));



console.log("Hello from top level code");

// The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that a single JavaScript thread is used by default — by offloading operations to the system kernel whenever possible. 

// Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background. When one of these operations completes, the kernel tells Node.js so that the appropriate callback may be added to the poll queue to eventually be executed. 
