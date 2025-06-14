import fs from "node:fs";
import { Buffer } from "node:buffer";

// for writing data we should make sure the file is open in write mode
const fd = fs.openSync('text.txt', 'w');
const buff = Buffer.from('I am buffer');

// Write
// fs.write(fd, buff, (err, bytesWritten, writtenData) => {
//     if(err) console.log(err);
//     console.log(bytesWritten);
//     console.log(writtenData);
// });

// WriteSync
const bytesWritten = fs.writeSync(fd, buff);
console.log(bytesWritten);