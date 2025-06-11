import fs, { read } from "node:fs";

console.time();
const readStream = fs.createReadStream("C:\\Users\\Nitin\\OneDrive\\Desktop\\Black_Panther_2018_Dual_Audio_Hindi_Dubbed_Full_Movie_(FilmyZilla.in).mkv", {highWaterMark: 1*1024*1024});
const writeStream = fs.createWriteStream('video.mkv', {highWaterMark: 1*1024*1024});

// Manual Way
// readStream.on('data', (chunk) => {
//     const isEmpty = writeStream.write(chunk);
//     if(!isEmpty) {
//         readStream.pause();
//     }
// });

// writeStream.on('drain', () => {
//     readStream.resume();
// });

writeStream.on('pipe', () => console.log("read and write streams piped!"));

// Automatic way
// Pipe method Automatically handle backpressure and reading and writing automatically(Optimized than manual way). It connects read stream to write stream and perform operation.
readStream.pipe(writeStream);

setTimeout(() => {
    //Unpipe method disconnect the connected read and write streams
    readStream.unpipe(writeStream);
}, 1000);

writeStream.on('unpipe', () => console.log("read and write streams unpiped!"));


readStream.on('end', () => {
    writeStream.end();
    console.timeEnd();
});
writeStream.on('finish', () => console.log('Finished!'));
