import net from "node:net";

let clientsList = [];
let idCount = 1;

process.stdin.on('data', (chunk) => {
    const clientId = parseInt((chunk.toString()).split("-")[1]);
    // console.log(clientId)
    clientsList.forEach((socket, idx) => {
        if(clientId >= 0 && idx === clientId) {
            socket.write(chunk);
        } else if(!clientId){
            socket.write(chunk);
        }
    });
});

const server = net.createServer((socket) => {
    clientsList.push({clientId: `Client-${idCount}`, socket: socket});
    idCount++;
    console.log("Total clients connected: ", clientsList.length);
    socket.on('data', (chunk) => {
         const data = chunk.toString();
        if(data.includes("name:")) {
            const clientId = data.split(":")[1];
            console.log(clientId)
            const client = clientsList.find((sock, idx) => socket === sock.socket);
            clientsList = clientsList.filter((sock, idx) => socket !== sock.socket);
            // console.log(clientsList.length)
            client.clientId = clientId;
            clientsList.push(client); 
            // console.log(clientsList.length)
        } else {
            const clientId = clientsList.find((obj) => socket === obj.socket? obj.socket.clientId: null);
            console.log(clientId);
        //     clientsList.forEach((obj, idx) => {
        // obj.socket.write(`client ${idx}: ${chunk}`);
        // });
        }
        socket.write("TCP server received your data!");
        
    }); 

    socket.on('close', () => {
        console.log(`Client Disconnected: Port: ${socket.remotePort}, IP: ${socket.remoteAddress}`);
    });

    socket.on('error', () => {
        console.log(`Client Lost: Port: ${socket.remotePort}, IP: ${socket.remoteAddress}`);
    });

    console.log(`Client Connected: Port: ${socket.remotePort}, IP: ${socket.remoteAddress}`);
    socket.write("Please enter your name: (name:abc)");
    // process.stdin.pipe(socket);

    console.log(socket.address()); //server address
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
        // socket.write("HTTP\n\nTCP server received your data!"); // for browser

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