import fs from "node:fs/promises";

const readFileHandle = await fs.open('text.txt');

const readStream = readFileHandle.createReadStream();

const writeFileHandle = await fs.open('textCopy.txt', 'w');

const writeStream = writeFileHandle.createWriteStream();

readStream.pipe(writeStream);

writeStream.on('finish', () => {
    readFileHandle.close();
    writeFileHandle.close();
    console.log('finished!');
});