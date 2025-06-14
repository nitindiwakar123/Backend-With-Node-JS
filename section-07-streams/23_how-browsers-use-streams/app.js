import http from "http";
import fs from "node:fs/promises";

const server = http.createServer(async (req, res) => {
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("Content-Type", "image/webp");

  const readFileHandle = await fs.open('river.webp');
  const readStream = readFileHandle.createReadStream({ highWaterMark: 1000 });

  readStream.on('data', (chunk) => {
    res.write(chunk);
    readStream.pause();
    setTimeout(() => {
      readStream.resume();
    }, 10);

  })


  readStream.on('end', () => {
    res.end();
  })
});

server.listen(4000, "localhost", () => {
  console.log("Server Started");
});
