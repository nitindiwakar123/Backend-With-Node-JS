import http from "node:http";
import fs from "node:fs/promises";

const server = http.createServer(async (req, res) => {
    let fileHandle;
    if (req.url === "/html") {
        fileHandle = await fs.open("index.html");
    }
    else if (req.url === "/css") {
        fileHandle = await fs.open("style.css");
    }
    else if (req.url === "/js") {
        fileHandle = await fs.open("script.js");
    }
    const { size } = await fileHandle.stat();
    const readStream = fileHandle.createReadStream();
    res.setHeader('Content-Length', size);
    readStream.pipe(res);

    readStream.on('end', () => {
        console.log("file sent!")
        res.end();
    });
    res.on('error', () => console.log("Oops! something went wrong!"));
    readStream.on('error', () => console.log("Oops! something went wrong!"));
    
});

server.listen(4000, '0.0.0.0', () => console.log("Listening!"));