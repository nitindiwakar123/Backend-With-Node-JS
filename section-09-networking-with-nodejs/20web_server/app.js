import http from "node:http";
import fs from "node:fs";

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/") {
        res.statusCode = 200;
        const readStream = fs.createReadStream("./public/index.html");
        readStream.pipe(res);
    } else if (req.url === "/app.js" || req.url === "/package.json") {
        res.statusCode = 403;
        res.end("Error 403 you don't have permission of the following action!");
    } else {
        res.statusCode = 200;
        const readStream = fs.createReadStream(`./public${req.url}`);
        readStream.pipe(res);

        readStream.on('error', () => {
            res.statusCode = 404;
            res.end("404 Not Found!");
        });
    }


});

server.listen(4000, '0.0.0.0', () => {
    console.log("Server Started!");
})

server.on('error', () => {
    console.log("Oops! Something went wrong.");
})