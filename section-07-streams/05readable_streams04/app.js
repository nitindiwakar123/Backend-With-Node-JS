import fs from "node:fs";

const readStream = fs.createReadStream('text.txt', {highWaterMark: 4, encoding: "utf-8"});
// readStream.setEncoding('utf-8');

readStream.on('open', () => console.log("Opened!")); //trigger when createReadStream open the file(behind the scene)

readStream.on("ready", () => console.log("Ready!"));

readStream.on("data", (chunk) => {
    // console.log(chunk);
    // readStream.destroy();
});

readStream.on('end', () => console.log("Ended!")); //trigger on all the data is readed 
readStream.on('error', (err) => console.log(err)); //trigger when something gone wrong while reading data or calling destroy method with arguement destroy(error) 
readStream.on('close', () => console.log("closed!")); //trigger on when all the data is readed and after that createReadStream method close the file



// console.log("Hello")
// readStream.destroy(); //close the file and trigger close event
// readStream.destroy("something went wrong sorry!"); //this triggers first error event then close event 