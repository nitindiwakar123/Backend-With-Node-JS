import fs from "node:fs";

const readStream = fs.createReadStream('./text.txt', {highWaterMark: 4});

// readStream.on("data", (chunk) => {
//     console.log(chunk);
// })

readStream.on("readable", () => {
    console.log(readStream.readableLength);
    console.log(readStream.read(3));
    console.log(readStream.readableLength);
})