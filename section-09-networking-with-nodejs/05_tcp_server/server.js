import net from "node:net";

const server = net.createServer((socket) => {
    
    socket.on('data', (chunk) => {
        console.log(chunk.toString());

        // socket.write("HTTP\n\nTCP server received your data!"); // for browser
        socket.write("TCP server received your data!");
        // socket.end();
    }); 

    socket.on('close', () => {
        console.log(socket.remoteAddress, ": client disconnected!");
    });

    socket.on('error', () => {
        console.log(socket.remoteAddress, ": client lost!");
    });

    
    console.log(socket.address()); //server address
    // console.log(socket.remoteAddress); // client IP address
    // console.log(socket.remotePort); // client port
    // console.log(socket.remoteFamily); // client IP family
    console.log("Client connected: ", socket.remoteAddress);
});


server.listen(4000, "0.0.0.0", () => {
    console.log("listening!");
});


// server.on('listening', () => {
//     console.log("listening!");
// })

// server.on('connection', (socket) => {
    
//     socket.on('data', (chunk) => {
//         console.log(chunk.toString());

//         socket.write("HTTP\n\nTCP server received your data!");
//         socket.end();
//     }); 

//     socket.on('close', () => {
//         console.log(socket.remoteAddress, ": client disconnected!");
//     });
//     console.log(socket.address()); //server address
//     // console.log(socket.remoteAddress); // client IP address
//     // console.log(socket.remotePort); // client port
//     // console.log(socket.remoteFamily); // client IP family
//     console.log("Client connected: ", socket.remoteAddress);
// });


//    Duplex Stream (Bi-directional)
        // socket is a duplex stream: you can both read from and write to it.