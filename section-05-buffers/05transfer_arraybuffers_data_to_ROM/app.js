import fs from "node:fs/promises";

const uInt8Array = new Uint8Array([0x50, 0x72, 0x6f, 0x43, 0x6f, 0x64, 0x72, 0x72,]);

// const decoder = new TextDecoder("utf-8");
// const text = decoder.decode(uInt8Array);
// console.log(text);
const view = new DataView(uInt8Array.buffer);

// await fs.writeFile("./text.txt", uInt8Array);
await fs.writeFile("./text.txt", view);