import fs from "node:fs";
import { Buffer } from "node:buffer";

// const fd = fs.openSync("text.txt", "r"); // By default

// const fd = fs.openSync("text.txt", "w");
// fs.writeSync(fd, 'Hii');

// const fd = fs.openSync("text.txt", "a");
// fs.writeSync(fd, '123');

// const fd = fs.openSync("text.txt", "r+");

// const fd = fs.openSync('text.txt', 'w+');
// fs.writeSync(fd, 'ABC');
// fs.read(fd, (err, bytesRead, buffData) => {
//     if(err) console.log(err);
//     console.log(buffData)
//     console.log(buffData.toString());
// });

// const fd = fs.openSync('text.txt', 'a+');
// fs.writeSync(fd, 'ABC');

// Different modes of opening files
//     by default file is opened in read mode
//     modes:
//         r - read
//         w - write
//         a - append
//         mode+ - mode operation and read/write
