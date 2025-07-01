import net from "node:net";
import fs from "node:fs/promises";

const server = net.createServer(async (socket) => {
    const fileHandle = await fs.open("numbers.txt");
    const {size} = await fileHandle.stat();
    const readStream = fileHandle.createReadStream({highWaterMark: 32*1024});

    socket.write('HTTP/1.1\n');
    socket.write('Access-Control-Allow-Origin: *\n');
    socket.write('Content-Type: text/txt; charset=utf-8\n');
    socket.write(`Content-Length: ${size}\n`);
    // socket.write(`Content-Disposition: attachment; filename=numbers.txt`);
    socket.write('\n\n');

    readStream.pipe(socket);

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
})

server.listen(4000, () => {
    console.log("Listening!");
})