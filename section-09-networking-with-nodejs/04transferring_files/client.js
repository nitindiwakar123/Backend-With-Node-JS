import dgram from "node:dgram";
import fs from "node:fs/promises";
import { statSync } from "node:fs";

const socket = dgram.createSocket("udp4");
socket.on('message', (msg, remoteData) => {
    console.log(msg.toString());
    console.log(remoteData);
    socket.close();
});
 
const fileSize = statSync("C:\\Users\\Nitin\\OneDrive\\Desktop\\black-panther.mkv").size;
const fileHandle = await fs.open("C:\\Users\\Nitin\\OneDrive\\Desktop\\black-panther.mkv");
const readStram = fileHandle.createReadStream({highWaterMark: 2000});
let totalBytesWrite=0;

readStram.on('data', (chunk) => {
    socket.send(chunk, 4000, "192.168.43.92");
    // totalBytesWrite += chunk.byteLength;
    // const percentage = Math.round((totalBytesWrite / fileSize) * 100);
    // console.log(`${percentage}%`);
});

readStram.on('end', () => {
    socket.send("EOF", 4000, "192.168.43.92");
});