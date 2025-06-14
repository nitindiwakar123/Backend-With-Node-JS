import fs from "node:fs";

// Writing 100000 numbers using appendFileSync
// time 40sec = 40000ms
// console.time();
// for (let i = 1; i <= 100000; i++) {
//     if (i === 1) {
//         fs.writeFileSync('numbers.txt', `${i}, `);
//     } else {
//         fs.appendFileSync('numbers.txt', `${i}, `);
//     }
// }
// console.timeEnd();


// Writing 100000 numbers using writable stream
// time 1sec = 1000ms
console.time();
const writeStream = fs.createWriteStream('streamNumbers.txt');
for (let i = 1; i <= 100000; i++) {
    writeStream.write(`${i}, `);
}

writeStream.end();

writeStream.on('finish', () => console.timeEnd());