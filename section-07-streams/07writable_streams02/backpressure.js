import fs from "node:fs";

// Writing file using readStream+writeStream with handling backpressure
// File Size 420MB
// CPU usage 12%
// Memory usage 70mb
// time taken 3.5s
console.time();
const readStream = fs.createReadStream("C:\\Users\\Nitin\\OneDrive\\Desktop\\Black_Panther_2018_Dual_Audio_Hindi_Dubbed_Full_Movie_(FilmyZilla.in).mkv", {highWaterMark: 1*1024*1024});
const writeStream = fs.createWriteStream('video.mkv');

readStream.on('data', (chunk) => {
    const isEmpty = writeStream.write(chunk); 
    // console.log("isEmpty: ", isEmpty);
    // console.log("writeStream.writableLength: ", writeStream.writableLength);
    if(!isEmpty) {
        readStream.pause();
    }
});

writeStream.on('drain', () => {
    readStream.resume();
})

readStream.on('end', () => {
    console.log("End!");
    console.timeEnd();
});