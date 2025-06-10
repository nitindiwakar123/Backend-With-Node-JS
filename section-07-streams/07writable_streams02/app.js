import fs from "node:fs";

const writeStream = fs.createWriteStream('text.txt', { highWaterMark: 4 });
console.log("higherWaterMark: ", writeStream.writableHighWaterMark);

// console.log("writeStream.writableLength: ", writeStream.writableLength);
// let isEmpty = writeStream.write("a");
// console.log("writeStream.writableLength: ", writeStream.writableLength);
// console.log("isEmpty: ", isEmpty);

// isEmpty = writeStream.write("a");
// console.log("writeStream.writableLength: ", writeStream.writableLength);
// console.log("isEmpty: ", isEmpty);

// isEmpty = writeStream.write("a");
// console.log("writeStream.writableLength: ", writeStream.writableLength);
// console.log("isEmpty: ", isEmpty);

// isEmpty = writeStream.write("a");
// console.log("writeStream.writableLength: ", writeStream.writableLength);
// console.log("isEmpty: ", isEmpty);

// isEmpty = writeStream.write("a");
// console.log("writeStream.writableLength: ", writeStream.writableLength);
// console.log("isEmpty: ", isEmpty);

// console.log("higherWaterMark: ", writeStream.writableHighWaterMark);

// for (let i = 1; i <= 1000; i++) {
//     console.log("writeStream.writableLength: ", writeStream.writableLength);
//     let isEmpty = writeStream.write("a");
//     if(!isEmpty) {
//         break;
//     }
//     console.log("isEmpty: ", isEmpty);
// }

// setTimeout(() => {
//     console.log("writeStream.writableLength: ", writeStream.writableLength);
// }, 2000);

let i = 1;
function write1000a() {
    while (i <= 1000) {
        console.log("writeStream.writableLength: ", writeStream.writableLength);
        let isEmpty = writeStream.write("a");
        i++;
        console.log("isEmpty: ", isEmpty);
        if (!isEmpty) {
            break;
        }
    }
}

write1000a();

writeStream.on('drain', () => {
    // console.log("writeStream.writableLength: ", writeStream.writableLength);

    write1000a();
})