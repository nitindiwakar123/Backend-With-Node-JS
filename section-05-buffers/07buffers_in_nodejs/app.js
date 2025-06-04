import {Buffer} from "buffer";

// const arrayBuffer = new ArrayBuffer(4);
// const buffer = new Buffer(4); //deprecated

// New or best approachs
// const buffer2 = Buffer.from(arrayBuffer);
// const buffer3 = Buffer.alloc(4);

// console.log(buffer)
// console.log(buffer.buffer);

// console.log(buffer2);
// console.log(buffer3);
// console.log(buffer2.buffer);
// console.log(buffer3.buffer);

// const uInt8Array = new Uint8Array(arrayBuffer);

// uInt8Array[0] = 0xff;
// uInt8Array[1] = 0xef;
// uInt8Array[2] = 0xcf;
// uInt8Array[3] = 0xaf;

// console.log("buffer2: ", buffer2);
// console.log(buffer2.buffer === uInt8Array.buffer);
// console.log(uInt8Array.toString()); //255,239,207,175(not proper decoding)
// console.log(buffer2.toString()); //��(proper decoding)
// console.log(buffer2.toString("utf-16le")); //꿏
// console.log(buffer2.toString("utf-16be")); //this will thow an error

// const buffer4 = Buffer.from([97, 98, 99, 100]);
// console.log(buffer4);
// console.log(buffer4.toString("utf-8"));

// const buffer5 = Buffer.alloc([97, 98, 99, 100]); //this will threw an error
// console.log(buffer5);

const bufferFromAlloc = Buffer.alloc(4);
const bufferFromFrom = Buffer.from([97, 98, 99, 100]);
const bufferFromAllocUnsafe = Buffer.allocUnsafe(4);

// console.log(bufferFromAlloc.byteLength); //4
// console.log(bufferFromFrom.byteLength); //4
// console.log(bufferFromAllocUnsafe.byteLength); //4
console.log(bufferFromAlloc.buffer.byteLength); //4
console.log(bufferFromFrom.buffer.byteLength); //8192
console.log(bufferFromAllocUnsafe.buffer.byteLength); //8192
