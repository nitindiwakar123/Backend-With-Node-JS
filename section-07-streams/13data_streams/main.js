import {spawn} from "node:child_process";
import fs from "node:fs";

const writeStream = fs.createWriteStream('video.mkv', {highWaterMark: 1*1024*1024});
const childProcess = spawn('node', ["childApp.js"]);

// childProcess.stdout.on('data', (chunk) => {
//     console.log(chunk.toString());
// });

// childProcess.stdin.write("Hello my child!");

childProcess.stdout.pipe(writeStream);

writeStream.on('finish', () => console.log("Finished!"));
writeStream.on('error', (err) => console.log("Something went wrong: ", err));