import http from "node:http";

const server = http.createServer((request, response) => {
    console.log('Got the request!');
    // console.log(request.url);
    console.log("Request Method: ", request.method);
    console.log({ Headers: request.headers });

    response.setHeader('Content-Length', 6);
    response.setHeader('Access-Control-Allow-Origin', "*");
    response.write("Hello!");

    request.on('data', (chunk) => {
        console.log("Got the data in http request: ",);
        console.log(chunk.toString());
    })
    // response.end();
});

// server.on('request', (request, response) => {
//     console.log('Got the request!');
//     response.setHeader('Content-Length', 6);
//     response.write("Hello!");
//     // response.end();
// });

// server.on('connection', (socket) => {
// Connection Event provides the socket of TCP
// It will act same as TCP Connection.
// We don't use this in HTTP.
//     socket.write("HTTP/1.1\n\n")
//     socket.end("Hello");

//     socket.on('data', (chunk) => {
//         console.log("Got the Data in tcp socket: ");
//         console.log(chunk.toString());
//     })
// });

// Req is a readable Stream
// Res is a writable Stream
// It is based on Socket, beacuse socket is a duplex stream. Readable side is Req, Writable Side is Res

server.listen(4000, () => {
    console.log("Server Started!");
})