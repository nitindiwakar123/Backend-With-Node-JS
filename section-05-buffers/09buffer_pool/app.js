// Buffer Pool in Node.js
import {Buffer, constants} from "node:buffer";

// Default Buffer pool size is 8192 bytes
// console.log(Buffer.poolSize); //8192
// Buffer.poolSize = 10000; // Can be changed manually, but must be done before any buffer is allocated

// Allocate 4 bytes of initialized memory (all bytes are set to 0)
const a = Buffer.alloc(4);

// Allocate 8 and 16 bytes of uninitialized memory (fast, but may contain old data)
const b = Buffer.allocUnsafe(8);
const c = Buffer.allocUnsafe(16);

// Modify certain byte positions in buffer `b` and `c`
b[0] = 98;
b[2] = 98;
b[4] = 98;
c[2] = 99;

// `byteLength` gives logical size of the buffer (number of bytes it holds)
console.log(a.byteLength);
console.log(b.byteLength);
console.log("*******************************");

// `buffer.byteLength` gives total size of the underlying ArrayBuffer (can be shared or reused)
console.log(a.buffer.byteLength);
console.log(b.buffer.byteLength);

// Check if multiple buffers are using the same underlying ArrayBuffer (e.g., via buffer pool)
// console.log(b.buffer === c.buffer && c.buffer === d.buffer);

// Condition to decide if Buffer.allocUnsafe() uses internal buffer pool or allocates new memory:
// Only if size < (Buffer.poolSize >>> 1), it will use buffer pool
// For example: 8192 >>> 1 = 4096
// const d = Buffer.allocUnsafe(4096); // Allocates new ArrayBuffer (not from pool)
// const e = Buffer.allocUnsafe(4095); // Uses internal buffer pool (8192 bytes shared)

// Example of buffer pool exhaustion:
// const f = Buffer.allocUnsafe(4095);
// const g = Buffer.allocUnsafe(4095); 
// const h = Buffer.from('abc');      
// const a = Buffer.alloc(4);
// const b = Buffer.allocUnsafe(8);
// const joinedBuf = Buffer.concat([a, b]); // Concat also use pooled memory

// Buffer constants for max sizes (based on platform & architecture)
// console.log(constants.MAX_LENGTH);         // Max total Buffer size
// console.log(constants.MAX_STRING_LENGTH);  // Max size of string that can be stored

// Difference between allocUnsafe and allocUnsafeSlow:
// allocUnsafe uses buffer pool (fast), but may contain old data
// allocUnsafeSlow allocates new memory without buffer pool (slightly slower than unsafe, faster than alloc)
const buf1 = Buffer.allocUnsafe(4);
const buf2 = Buffer.allocUnsafeSlow(4);

console.log(buf1.byteLength);
console.log(buf2.byteLength);
console.log('****************')
console.log(buf1.buffer.byteLength);
console.log(buf2.buffer.byteLength);

console.log('end');
