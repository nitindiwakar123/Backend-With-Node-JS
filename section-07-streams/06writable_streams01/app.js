import fs from "node:fs";

// const writeStream = fs.createWriteStream('text.txt');
// console.log(writeStream.writableHighWaterMark); //16kb = 16*1024 = 16384
// writeStream.write("ABCD");
// writeStream.write("EFGH");
// writeStream.write("IJKL");


// Writing file using readStream+appendFileSync
// File Size 420MB
// CPU usage 9%
// Memory usage 80mb
// time taken 4.5s
// console.time();
// const readStream = fs.createReadStream("C:\\Users\\Nitin\\OneDrive\\Desktop\\Black_Panther_2018_Dual_Audio_Hindi_Dubbed_Full_Movie_(FilmyZilla.in).mkv", {highWaterMark: 1*1024*1024});

// readStream.on('data', (chunk) => {
//     fs.appendFileSync('newVideo.mkv', chunk);
// });
// readStream.on('end', () => {
//     console.log("End!");
//     console.timeEnd();
// });

// Writing file using readStream+writeStream
// File Size 420MB
// CPU usage 12%
// Memory usage 200mb
// time taken 2s
// console.time();
// const readStream = fs.createReadStream("C:\\Users\\Nitin\\OneDrive\\Desktop\\Black_Panther_2018_Dual_Audio_Hindi_Dubbed_Full_Movie_(FilmyZilla.in).mkv", {highWaterMark: 1*1024*1024});
// const writeStream2 = fs.createWriteStream('video.mkv');

// readStream.on('data', (chunk) => {
//     writeStream2.write(chunk); //this is the wrong way of using writable streams that's why memory usage is high
// });
// readStream.on('end', () => {
//     console.log("End!");
//     console.timeEnd();
// });

// Writeable Streams

//     fs.createWriteStream(path, {options});
//     It will create the file if not exist, Similar to writeFile Method.
//     By default write value, technically highWaterMark value is 16 KB(16384 Bytes).

//     writeStream.writableHighWaterMark -> gives highWaterMark value.

//     writeStream.write() -> 1st Write() will wipeout all the data next write()'s will Append the data