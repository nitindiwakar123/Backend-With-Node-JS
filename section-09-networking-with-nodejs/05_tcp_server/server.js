import net from "node:net";

let clientsList = [];
let clientsIdList = [];
let idCount = 1;

process.stdin.on('data', (chunk) => {
    const clientId = (chunk.toString()).split(":")[0].trim();
    const message = (chunk.toString()).split(":")[1];

    if(clientId) {
    clientsList.forEach((socketObj, idx) => {
        if(clientId == socketObj.clientId) {
            socketObj.socket.write(`Server: ${message}`);
        }
    });
    } else {
        clientsList.forEach((socketObj, idx) => {
            socketObj.socket.write(`Server: ${chunk}`);
    });
    }
    
});

const server = net.createServer((socket) => {
    const client = {clientId: `client-${idCount}`, socket: socket}
    clientsList.push(client);
    clientsIdList.push(client.clientId);
    idCount++;
    console.log("\nClients connected: ", clientsIdList);
    socket.on('data', (chunk) => {
         const data = chunk.toString();
        if(data.includes("name:")) {
            const clientId = data.split(":")[1].trim();
            const client = clientsList.find((sock, idx) => socket === sock.socket);
            clientsList = clientsList.filter((sock, idx) => socket !== sock.socket);
            clientsIdList = clientsIdList.filter((id) => id !== client.clientId);
            console.log(`\n${client.clientId} renamed: `, clientId);
            client.clientId = clientId;
            clientsList.push(client); 
            clientsIdList.push(clientId);
        } else {
            const client = clientsList.find((obj) => socket === obj.socket);
            const clientId = client.clientId.trim();
            console.log(`${clientId}: ${chunk}`);
            clientsList.forEach((obj, idx) => {
            if(obj !== client) obj.socket.write(`${clientId}: ${chunk}`);
        });
        }
        // socket.write(`Server: message sent!`);
        
    }); 

    socket.on('close', () => {
        console.log(`\nClient Disconnected: Port: ${socket.remotePort}, IP: ${socket.remoteAddress}`);
    });

    socket.on('error', () => {
        console.log(`\nClient Lost: Port: ${socket.remotePort}, IP: ${socket.remoteAddress}`);
    });

    console.log(`\nClient Connected: Port: ${socket.remotePort}, IP: ${socket.remoteAddress}`);
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