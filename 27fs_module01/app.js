// Using the "fs/promises" module for working with the file system using promises
import fs from "node:fs/promises";

// ------------------------------
// Synchronous vs Asynchronous File Reading
// ------------------------------

// ✅ Synchronous method (from "node:fs") — blocking (commented out here)
// const content = fs.readFileSync('./index.html', 'utf-8');
// console.log(content.toString()); // or simply console.log(content);

// ✅ Asynchronous method using callbacks (from "node:fs") — non-blocking (also commented)
// import fs from "node:fs";
// fs.readFile('./index.html', 'utf-8', (error, data) => {
//     if (error) {
//         console.error("Error reading file:", error);
//         return;
//     }
//     console.log(data); // file content
// });
// console.log("End"); // will print before file content due to async behavior

// ------------------------------
// Using setInterval and console.time for timing
// ------------------------------
console.time(); // Starts a timer with a default label

let i = 0;
const interval = setInterval(() => {
    console.log(i++); // Prints increasing number every 5ms

    if (i === 15) {
        clearInterval(interval); // Stops the interval after 15 logs
        console.timeEnd(); // Ends the timer and prints the time taken
    }
}, 5);

// ------------------------------
// Asynchronous file reading using promises (modern and clean)
// ------------------------------
const content = await fs.readFile("./text.txt", "utf-8"); // Reads the file asynchronously
console.log(content); // Prints the content of text.txt
console.log("End!"); // Will be logged after the file content
