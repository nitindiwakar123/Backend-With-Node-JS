import net from "node:net";


const socket = net.createConnection({ port: 4000, host: "192.168.168.215" });

process.stdin.pipe(socket);

// socket.write("Hello from client!");
// setTimeout(() => {
//     socket.write("Hello from client!");
// }, 2000);

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
