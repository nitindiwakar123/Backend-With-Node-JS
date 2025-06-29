import net from "node:net";
import { createReadStream, read } from "node:fs";

const server = net.createServer((socket) => {
    socket.write("HTTP/1.1\n\n");
    const readStream = createReadStream("numbers.txt");
    readStream.pipe(socket);
    readStream.on('end', () => {
        console.log("File ended!");
    })
    socket.on('data', (chunk) => {
        console.log(chunk.toString());
    })

    socket.on('close', () => {
        console.log(`Client Disconnected: Port: ${socket.remotePort}, IP: ${socket.remoteAddress}`);
    });

    socket.on('error', () => {
        console.log(`Client Lost: Port: ${socket.remotePort}, IP: ${socket.remoteAddress}`);
    });

    console.log(`Client Connected: Port: ${socket.remotePort}, IP: ${socket.remoteAddress}`);
})

server.listen(4000, () => {
    console.log("Listening!");
});