import fs from "node:fs";
import { pipeline } from "node:stream";

const readStream = fs.createReadStream("C:\\Users\\Nitin\\OneDrive\\Desktop\\Black_Panther_2018_Dual_Audio_Hindi_Dubbed_Full_Movie_(FilmyZilla.in).mkv", {highWaterMark: 1*1024*1024});
const writeStream = fs.createWriteStream('video.mkv', {highWaterMark: 1*1024*1024});

let interval = setInterval(() => {
    console.log('Hello from node.js application!');
}, 100);

// When we use pipe method it cannot handle error itself we need to explicitly handle it.
// readStream.pipe(writeStream);

setTimeout(() => {
    readStream.destroy("Error Occured!");
}, 1000);

// readStream.on('error', (e) => console.log(e)); //if we not handle it explicitly it can crash our node.js application

// Pipeline method can automatically handle error 
pipeline(readStream, writeStream, (error) => {
    console.log(error);
});

// writeStream.on('finish', () => {
//     console.log('Finished!');
//     clearInterval(interval);
// });