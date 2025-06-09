import fs, { read } from "node:fs";

// const readStream = fs.createReadStream('text.txt');

//Initial
// console.log(readStream.readableFlowing); //null
// console.log(readStream.readableEnded); //false
// console.log(readStream.isPaused()); //false

//Flowing
// readStream.on('data', () => { });
// console.log(readStream.readableFlowing); //true
// console.log(readStream.readableEnded); //false
// console.log(readStream.isPaused()); //false


//Paused
// readStream.pause();
// console.log(readStream.readableFlowing); //false
// console.log(readStream.readableEnded); //false
// console.log(readStream.isPaused()); //true


//End
// readStream.on('end', () => {
// console.log(readStream.readableFlowing); //true
// console.log(readStream.readableEnded); //true
// console.log(readStream.isPaused()); //false
// })


// let count = 0;
const readStream2 = fs.createReadStream('text.txt', { highWaterMark: 1 });

readStream2.on("data", (chunk) => {
    // count++;
    if (readStream2.readableHighWaterMark === readStream2.bytesRead) {
        // console.log(readStream2.readableHighWaterMark, readStream2.bytesRead);
        fs.writeFileSync('new.txt', chunk);
    } else {
        // console.log(chunk.buffer);
        fs.appendFileSync('new.txt', chunk);
    }
    readStream2.pause();
    setTimeout(() => {
        readStream2.resume();
    }, 50);
});

// readStream2.on('pause', () => console.log("Stream Paused!"));
// readStream2.on('resume', () => console.log("Stream Resumed!"));
// readStream2.on('close', () => console.log(readStream2.readableFlowing, readStream2.readableEnded, readStream2.isPaused()));


// console.log(readStream2.readableHighWaterMark)

// const readStream3 = fs.createReadStream('text.txt', { highWaterMark: 16 });
// readStream3.read(64);

// let count = 0;

// readStream3.on("data", (chunk) => {
//     count++;
//     // console.log(count)
//     if (count === 16) {
//         readStream3.pause();
//     }
//     fs.appendFileSync('new.txt', chunk);
//     console.log(chunk.toString());
//     readStream3.resume();
// });

// readStream3.on('pause', () => console.log("paused!"));
// readStream3.on('resume', () => console.log("resumed!"));


// readStream3.on("data", (chunk) => {
//     // count++;
//     // console.log(chunk);
//     // fs.appendFileSync('new.txt', chunk);
//     // console.log(chunk);
//     // console.log(readStream3.bytesRead);
//     // console.log(chunk)
//     // console.log(count);
//     // if(count > 32) {
//     // readStream3.pause();
//     // }
// });

// readStream3.destroy();
// readStream3.setEncoding("utf-16le");

// console.log(readStream.readableHighWaterMark);
// console.log(readStream.readableAborted);
// console.log(readStream.destroyed);
// console.log(readStream3.readableEncoding);
// console.log(readStream3.readableLength);
// console.log(readStream3.readable);
// console.log(readStream3.readableFlowing);
// console.log(readStream3.errored);
// console.log(readStream3);
// console.log(readStream3.isPaused());
// console.log(readStream3.pending);
// console.log(readStream3.listenerCount('data'));


// Different States of Readable Streams
//     Initial -> Stream is initialed
//     Flowing -> Stream is flowing, working
//     Paused -> Stream is Paused
//     Ended  -> Stream is Ended

//     Common Properties:
//         readableFlowing
//         readableEnded

//     Common Method:
//         isPaused()
//         pause()
//         resume()

//     we aslo have events names like resume, pasue, etc.
//     Bydefault resume event fire when data event is fired.