import dgram from "node:dgram";
import fs from "node:fs/promises";

const socket = dgram.createSocket("udp4");
const fileHandle = await fs.open("video.mkv", "w");
const writeStream = fileHandle.createWriteStream();
socket.on('message', (msg, remoteData) => {
    if (msg.toString() === "EOF") {
        socket.send('file received!', remoteData.port, remoteData.address);
        writeStream.close();

    } else {
        writeStream.write(msg);
    }
    // console.log(remoteData);
});


socket.bind({ port: 4000 }, () => {
    console.log("Listening!");
});
