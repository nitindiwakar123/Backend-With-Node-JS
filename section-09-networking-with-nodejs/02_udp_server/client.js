// Creating UDP Client 
import dgram from "node:dgram";

const socket = dgram.createSocket("udp4");

socket.on('message', (msg, remoteAddress) => {
    console.log(msg.toString());
    // socket.close();
    setTimeout(() => {
        socket.send(`Client sent again ${Date.now()}`, remoteAddress.port, remoteAddress.address);
    }, 1000);
});

socket.send('Hi from client.js hii!hdsj', 4000, "192.168.168.215");
