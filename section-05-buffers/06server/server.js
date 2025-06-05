import http from "http";
import fs from "node:fs/promises";

const a = new ArrayBuffer(8);
// const uint8Array = new Uint8Array(a);

const uInt8Array = new Uint8Array([0x50, 0x72, 0x6f, 0x43, 0x6f, 0x64, 0x72, 0x72,]);

startServer(uInt8Array);

function startServer(responseData) {
  const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/txt; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");
    
    req.on("data", (reqBody) => {
      console.log(reqBody);
      const file = fs.writeFile('info.txt', reqBody);
    })

    res.end(responseData);
  });

  server.listen(3000, () => {
    console.log("Listening on http://localhost:3000");
  });
}