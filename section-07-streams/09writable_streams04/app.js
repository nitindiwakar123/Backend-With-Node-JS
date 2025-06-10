import fs from "node:fs";

const writeStream = fs.createWriteStream('text.txt', {highWaterMark: 4});

// Writable(Initial) State
// console.log(writeStream.writable); //true
// writeStream.write("a");
// console.log(writeStream.writable); //true
// writeStream.end();
// console.log(writeStream.writable); //false

// Corked State
// console.log(writeStream.writableCorked);
// writeStream.cork();
// console.log(writeStream.writableCorked);
// writeStream.write("abc");
// writeStream.write("xyz");
// writeStream.write("123");
// console.log(writeStream.writableCorked);
// writeStream.uncork();
// console.log(writeStream.writableCorked);

// Ended State
// console.log(writeStream.writableEnded);
writeStream.end();
// console.log(writeStream.writableEnded);

// Finished State
// console.log(writeStream.writableFinished);
// setTimeout(() => {
// console.log(writeStream.writableFinished);
// }, 10);

console.log(writeStream.writable);
console.log(writeStream.writableCorked);
console.log(writeStream.writableEnded);
console.log(writeStream.writableFinished);
console.log(writeStream.writableAborted);
console.log(writeStream.writableNeedDrain);
console.log(writeStream.destroyed);
console.log(writeStream.closed);
console.log(writeStream.errored);