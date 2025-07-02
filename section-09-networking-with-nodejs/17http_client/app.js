import http from "node:http";

const server = http.createServer((request, response) => {
    console.log('Got the request!');
    console.log(request.url);
    console.log("Request Method: ", request.method);
    console.log({ Headers: request.headers });
    // response.setHeader('Content-Length', 6);
    response.write("Hello from the server!");

    request.on('data', (chunk) => {
        console.log("Got the data in http request: ",);
        console.log(chunk.toString());
    })
    response.end();
});

server.listen(4000, '0.0.0.0', () => {
    console.log("Server Started!");
})