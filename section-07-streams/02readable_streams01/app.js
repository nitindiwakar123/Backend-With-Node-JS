import fsPromises from "node:fs/promises";
import fs from "node:fs";

// Reading and writing using buffers
// File Size 420MB
// time taken 2s
// CPU usage 7%
// Memory usage 470MB
// console.time();
// const buf = await fsPromises.readFile("C:\\Users\\Nitin\\OneDrive\\Desktop\\Black_Panther_2018_Dual_Audio_Hindi_Dubbed_Full_Movie_(FilmyZilla.in).mkv");
// console.log(buf.byteLength);

// // await fsPromises.writeFile('vid1.mp4', buf);
// console.timeEnd();

// Reading and writing file using streams
// File Size 420MB
// CPU usage 9%
// Memory usage 80mb
// time taken 1.2s
// count 421
let count = 0;
let progress = 0;
console.time();
const readStream = fs.createReadStream("C:\\Users\\Nitin\\OneDrive\\Desktop\\Black_Panther_2018_Dual_Audio_Hindi_Dubbed_Full_Movie_(FilmyZilla.in).mkv",
    { highWaterMark: 1 * 1024 * 1024 }
);

readStream.on('data', (chunkBuffer) => {
    count++;
    progress = count / 421 * 100;
    console.log(chunkBuffer.byteLength);
    fs.appendFileSync('video.mkv', chunkBuffer);
    console.log(`progress: ${progress.toFixed()}%`);

});

readStream.on("end", () => {
    console.timeEnd();
    console.log("count: ", count);
})

// Reading a text file
// let count2 = 0;
// console.time();
// const readStream2 = fs.createReadStream("text.txt",
//     { highWaterMark: 16 }
// );

// readStream2.on('data', (chunkBuffer) => {
//     console.log(chunkBuffer.byteLength);
//     count2++;
// });
// readStream2.on("end", () => {
//     console.timeEnd();
//     console.log("count2: ", count2)
// })