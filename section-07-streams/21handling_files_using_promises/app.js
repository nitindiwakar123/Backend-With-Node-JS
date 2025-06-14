import fs from "node:fs/promises";

const fileHandle = await fs.open('text.txt', 'r+'); // flag - by defualt r, r+ can read and write both
// console.log(fileHandle);
// console.log(fileHandle.fd);

// const { buffer, bytesRead } = await fileHandle.read(); // you can also provide other options like position, offset etc.
// const { buffer } = await fileHandle.read({buffer: Buffer.alloc(4)});
// console.log(buffer);
// console.log(bytesRead);
// console.log(buffer.toString());

// const { buffer, bytesWritten } = await fileHandle.write('Hello text 1234');
const { buffer, bytesWritten } = await fileHandle.write(Buffer.from('abcedefgh')); // you can also provide other options like position, offset etc.
console.log(buffer);
console.log(bytesWritten);

await fileHandle.close();