//Data Streams
import fs from "node:fs";

const writeStream = fs.createWriteStream('data.txt');

// stdin 
// console.log(process.stdin);
// process.stdin.on('data', (chunk) => {
//     console.log("Data Received: ", chunk.toString());
//     writeStream.write(chunk);
// });

// process.stdin.pipe(writeStream);
// process.stdin.write("Hello"); //error


// stdout
// console.log(process.stdout);
// process.stdout.write("Hello\n");
// console.log('Hello'); //console.log() uses stdout.write() behind the scene

// stderr
// console.log(process.stderr);
// process.stderr.write("An error occured!\n");

// File descriptor of data streams
console.log(process.stdin.fd); // fix 0
console.log(process.stdout.fd); // fix 1
console.log(process.stderr.fd); // fix 2