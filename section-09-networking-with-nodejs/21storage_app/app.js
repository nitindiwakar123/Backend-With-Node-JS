import http from "node:http";
import fs from "node:fs/promises";

const server = http.createServer(async (req, res) => {
    if (req.url === "/favicon.ico") return res.end("No Favicon!");
    console.log(req.url);
    try {
        res.statusCode = 200;
        const fileHandle = await fs.open(`./storage${decodeURIComponent(req.url)}`);
        const stats = await fileHandle.stat();
        if (stats.isDirectory()) {
            const content = await fs.readdir(`./storage${req.url}`);
            const boilerplateHTML = await fs.readFile("./boilerplate.html", "utf-8");
            // console.log(content);
            let dynamicHTML = "";
            content.forEach((item) => {
                dynamicHTML += `<li>
                <span>${item}</span>
                <button><a href="${req.url === "/"? "": req.url}/${item}">Preview</a></button>
                <button><a href="${req.url === "/"? "": req.url}/${item}">Download</a></button>
                </li>`;
            });

            res.end(boilerplateHTML.replace("${dynamicHTML}", dynamicHTML));
        } else if (req.url === "/app.js" || req.url === "/package.json") {
            res.statusCode = 403;
            res.end("403 you don't have permission of the following action!")
        } else {
            const readStream = fileHandle.createReadStream();
            readStream.pipe(res);

            readStream.on('error', () => {
                res.statusCode = 404;
                res.end("404 Not Found!");
            })
        }

        res.on('close', () => {
            fileHandle.close();
        });
    } catch (error) {
        res.statusCode = 404;
        res.end("404 Not Found!");
        console.log("else :: catch :: error :: ", error.message);
    }


});

server.listen(4000, '0.0.0.0', () => {
    console.log("Listening!");
});