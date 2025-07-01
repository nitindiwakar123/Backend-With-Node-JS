import net from "node:net";
import fs from "node:fs/promises";

const server = net.createServer(async (socket) => {
    const fileHandle = await fs.open("sigma.jpeg");
    const {size} = await fileHandle.stat();
    const readStream = fileHandle.createReadStream();
    console.log(size);
    socket.write('HTTP/1.1\n');
    // socket.write('Content-Type: video/mp4\n');
    // socket.write('Content-Type: application/json\n');
    // socket.write('Content-Type: application/pdf\n');
    socket.write('Content-Type: image/jpeg\n');
    socket.write(`Content-Length: ${size}\n`);
    // socket.write(`Content-Disposition: attachment; filename=sigma.jpeg`);
    socket.write(`Content-Disposition: inline; filename=sigma.jpeg`);
    socket.write('\n\n');

    readStream.pipe(socket);
    // socket.write("{'name': 'nitin'}");
    // socket.end();
    readStream.on('end', () => {
        console.log("File ended!");
    });
    // socket.on('data', (chunk) => {
    //     console.log(chunk.toString());
    // });

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