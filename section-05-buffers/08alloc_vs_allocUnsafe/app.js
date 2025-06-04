import {Buffer} from "node:buffer";

const buffer1 = Buffer.alloc(4500);
// const buffer2 = Buffer.allocUnsafe(4500);
const buffer2 = Buffer.allocUnsafe(4500).fill(0);

// console.log(buffer1.toString());
console.log(buffer2.toString());

//allocUnsafe can cause security issues by revealing memory sensitive data but it is faster than alloc() if you are using allocUnsafe it is neccessary to fill the arrayBuffer created by allocUnsafe immediately.