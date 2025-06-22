import http from "node:http";

const server =  http.createServer((req, res) => {
    res.end("Hello World!!!!");
});

server.listen(4000, () => {
    console.log(server.address());
});
