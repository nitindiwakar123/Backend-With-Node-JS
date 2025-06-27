// Creating UDP Server 
import dgram from "node:dgram";

const socket = dgram.createSocket("udp4");

// console.log(socket);
socket.on('message', (message, remoteAddress) => {
    console.log(message.toString());
    console.log(remoteAddress);

    // socket.send('Message Received!', remoteAddress.port, remoteAddress.address, () => {
    //     console.log("Message sent!");
    // });
    setTimeout(() => {
        socket.send(`Server Message Received ${Date.now()}`, remoteAddress.port, remoteAddress.address);
    }, 1000);
});

// socket.on('listening', () => {
//     console.log(socket.address());
//     console.log("Listening!");
// })

socket.bind({ port: 4000 }, () => {
    console.log(socket.address());
    console.log("Listening!");
}); // server
