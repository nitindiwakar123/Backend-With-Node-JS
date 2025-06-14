import fs from "node:fs";
import createCustomWriteStream from "./createCustomWriteStream.js";


const customWriteStream = createCustomWriteStream('numbers.txt');
// const writeStream = fs.createWriteStream('streamNumbers.txt');

// 30 ms
console.time();
for (let i = 1; i <= 100000; i++) {
    customWriteStream.write(`${i}, `);
}
customWriteStream.end();
console.timeEnd();

// 80ms
// console.time();
// for (let i = 1; i <= 100000; i++) {
//     writeStream.write(`${i}, `);
// }
// console.timeEnd();
// writeStream.end();


// const buff = Buffer.allocUnsafe(4);
// let total = 0;
//  const bytesWrite = buff.write(`${1}, `, total);
//  total = total+bytesWrite;
// console.log(buff);
// console.log("Total: ", total);
//  console.log(buff.write(`${2}, `, total));
//  total = total+bytesWrite;
// console.log(buff.toString());
// console.log("Total: ", total);
// console.log(writeStream.writableHighWaterMark);