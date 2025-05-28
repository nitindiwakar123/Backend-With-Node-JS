import fs from "node:fs/promises";

const content = await fs.readFile('text.txt');
console.log(content.toString('utf16le'));