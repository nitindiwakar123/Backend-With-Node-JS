import net from "node:net";
import { createReadStream, createWriteStream } from "node:fs";

const writeStream = createWriteStream('numbers.txt');
const readStream = createReadStream('package.json');



const server = net.createServer((socket) => {

    process.stdin.on('data', (chunk) => {
        const inputStr = chunk.toString().trim();      
        if (inputStr === "response") {
            readStream.pipe(socket);
        } else {
            socket.write(chunk);
        }
    });
    socket.pipe(writeStream);
    // socket.on('data', (chunk) => {
    //     console.log(chunk.toString);
    //     writeStream.write(chunk);
    // })

    socket.on('close', () => {
        console.log(`Client Disconnected: Port: ${socket.remotePort}, IP: ${socket.remoteAddress}`);
    });

    socket.on('error', () => {
        console.log(`Client Lost: Port: ${socket.remotePort}, IP: ${socket.remoteAddress}`);
    });

    console.log(`Client Connected: Port: ${socket.remotePort}, IP: ${socket.remoteAddress}`);
    // process.stdin.pipe(socket);

    console.log(socket.address());
});


server.listen(4000, "0.0.0.0", () => {
    console.log("listening!");
});
