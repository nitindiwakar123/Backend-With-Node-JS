import net from "node:net";
import { createReadStream, createWriteStream } from "node:fs";

const socket = net.createConnection({ port: 4000, host: "192.168.145.215" });
const writeStream = createWriteStream('clientLog-txt');

process.stdin.on('data', (chunk) => {
    const readStream = createReadStream("C:\\Users\\Nitin\\OneDrive\\Desktop\\numbers.txt");

    const inputStr = chunk.toString().trim();
    if (inputStr === "send") {

        readStream.pipe(socket);
    } else {
        socket.write(chunk);
    }

    readStream.on('end', () => {
        console.log("File ended!");
    });
})

socket.pipe(writeStream);

socket.on('data', (data) => {
    console.log(data.toString());
    // socket.end();
});

socket.on('error', (err) => {
    console.log("Server Lost!")
});

socket.on('close', () => {
    console.log("Server Disconnected!");
    process.stdin.unpipe(socket);
});
