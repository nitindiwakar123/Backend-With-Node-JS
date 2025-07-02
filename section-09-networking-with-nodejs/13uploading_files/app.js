import fs from "node:fs/promises";
import net from "node:net";

const server = net.createServer(async (socket) => {

    const fileHandle = await fs.open("numbers.txt", "w");
    const writeStream = fileHandle.createWriteStream();

    socket.write('HTTP/1.1\n');
    // socket.pipe(writeStream);
    socket.on('data', (chunk) => {
        writeStream.write(chunk);
        if(/WebKitFormBoundary.+--/.test(chunk.toString())) {
            socket.end("File Uploaded Successfully!");
        }
    });

    socket.on('close', () => {
        console.log(`Client Disconnected: Port: ${socket.remotePort}, IP: ${socket.remoteAddress}`);
    });

    socket.on('error', () => {
        console.log(`Client Lost: Port: ${socket.remotePort}, IP: ${socket.remoteAddress}`);
    });

    console.log(`Client Connected: Port: ${socket.remotePort}, IP: ${socket.remoteAddress}`);

});

server.listen(4000, () => {
    console.log("Listen!");
});