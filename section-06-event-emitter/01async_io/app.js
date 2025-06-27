import fs from "node:fs";
import fsPromises from "node:fs/promises";

console.log("start");

setTimeout(() => {
    console.log('Hello from setTimeout1!');
}, 0);

//Sync I/O
// const content2 = fs.readFileSync('text.txt', "utf-8");
// console.log("sync io Done!");

//Async I/O
const content = await fsPromises.readFile('text.txt', "utf-8");
console.log("async io Done!");

// const content3 = fs.readFile('text.txt', "utf-8", (err, data) => {
// console.log("async io2 Done!");
// })

// setTimeout(() => {
//     console.log('Hello from setTimeout2!');
// }, 0);

console.log("end!");