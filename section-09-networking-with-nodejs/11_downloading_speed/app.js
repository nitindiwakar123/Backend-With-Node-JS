import net from "node:net";
import fs from "node:fs/promises";
import { read } from "node:fs";

const server = net.createServer(async (socket) => {
    const fileHandle = await fs.open("C:\\Users\\Nitin\\OneDrive\\Desktop\\black-panther.mkv");
    const {size} = await fileHandle.stat();
    const readStream = fileHandle.createReadStream();
    socket.write('HTTP/1.1\n');
    socket.write('Content-Type: video/mp4\n');
    socket.write(`Content-Length: ${size}\n`);
    socket.write(`Content-Disposition: attachment; filename=black-panther.mp4`);
    socket.write('\n\n');

    // readStream.on('data', (chunk) => {
    //     socket.write(chunk);
    //     readStream.pause();
    //     setTimeout(() => {
    //         readStream.resume();
    //     }, 2000);
    // });

    readStream.pipe(socket);

    readStream.on('pause', () => console.log("Paused!"));
    readStream.on('resume', () => console.log("Resumed!"));

    // socket.on('drain', () => {
    //     readStream.resume();
    // });

    readStream.on('end', () => {
        console.log("File ended!");
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
    console.log("Listening!");
});