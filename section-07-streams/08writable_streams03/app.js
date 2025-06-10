// Closing Writable Streams
import fs from "node:fs";

const writeStream = fs.createWriteStream('file.txt', {highWaterMark: 4});

writeStream.write("abc");

// writable stream is not auto close the file after writing like readable streams we have to explicitly close the file for release allocated memory and clean code using end().
// writeStream.end();
writeStream.end("End data"); // end only calls once time
// writeStream.write("abc"); // error you can't write file after end



writeStream.on('finish', () => console.log("Finished!")); //triggers when the writing is end and the file closed.
writeStream.on('close', () => console.log("Closed!")); //triggers when the file is closed.
//after calling end first fired finish then close.