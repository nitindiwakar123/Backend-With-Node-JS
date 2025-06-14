import fs from "node:fs";
import {Buffer} from "buffer";

const fd = fs.openSync('text.txt');

fs.read(fd, (err, bytesRead, buffData) => {
    if(err) console.log(err);
    console.log("BytesRead: ", bytesRead);
    // console.log(buffData);
    console.log(buffData.toString());
    console.log(buffData.byteLength);
});

// Custom Buffer and other options
// const readBuf = Buffer.alloc(10);
// fs.read(fd, {
//     buffer: readBuf,
//     length: 4,
//     position: 6,
//     offset: 2
// }, (err, bytesRead, buffData) => {
//     if(err) console.log(err);
//     console.log("BytesRead: ", bytesRead);
//     console.log(buffData);
//     console.log(buffData.toString());
//     console.log(buffData.byteLength);
// });