import http from "node:http";

const myServer = http.createServer((req, res) => {
    console.log("New request recieved");
    res.end("Hello from node js server");
});

myServer.listen(8000, () => console.log("Server working correctly!"));