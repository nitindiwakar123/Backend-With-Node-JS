import { Buffer } from "node:buffer";
import fs from "node:fs/promises";

const nodeBuffer = Buffer.from("Hello World!");
// const nodeBuffer2 = Buffer.alloc(8);

// console.log(nodeBuffer);
// console.log(nodeBuffer.toString("utf-8"));

// nodeBuffer2[0]=97;
// nodeBuffer2[7]=98;

// toString()
// console.log(nodeBuffer2);
// console.log(nodeBuffer2.toString());

// fs.writeFile('text.txt', nodeBuffer2);
// fs.writeFile('text-2.txt', nodeBuffer);

// const decoder = new TextDecoder("utf-8");
// console.log(decoder.decode(nodeBuffer));

// console.log(nodeBuffer.toString("utf-8"));
// console.log(nodeBuffer.toString("utf-16le"));
// console.log(nodeBuffer.toString("hex"));
// console.log(nodeBuffer.toString("binary")); //Not actual binary alias of latin1 encoding

// write()
// write("abc", "encoding") //utf-8 by default
const buf1 = Buffer.alloc(8);
buf1.write("abc", "utf-8");
// console.log(buf1);
// console.log(buf1.toString());

// toJSON()
//returns binary data
// console.log(buf1.toJSON());

// slice()
//return a new sub array (deprecated)
console.log("nodeBuffer: ", nodeBuffer);
// console.log(nodeBuffer.slice(5)); 
// console.log(nodeBuffer.slice(5).toString()); 

// subArray()
// similar as slice
// console.log(nodeBuffer.subarray(5));
// console.log(nodeBuffer.subarray(5).toString()); 

// copy()
// copy the array
// sourceBuf.copy(newBuf, newBufStart, sourceStart, sourceEnd)
const buf2 = Buffer.alloc(8);
nodeBuffer.copy(buf2, 0, 0, 5);
// console.log(buf2);
// console.log(buf2.toString());

// includes()
// console.log(nodeBuffer.includes("He")); //true
// console.log(nodeBuffer.includes("HE")); //false
// console.log(nodeBuffer.includes("He", 5)); //false
// console.log(nodeBuffer.includes("He", 0, "utf-8")); //true
// console.log(nodeBuffer.includes("He", 0, "utf-16le")); //false

// fill()
// fill an empty buffer with same value
const buf3 = Buffer.alloc(4);
buf3.fill(97);
// console.log(buf3);

// Reading Methods
// console.log(nodeBuffer.readInt8(0)); //Reads the value of passed offset(index) and return in decimal
// console.log(nodeBuffer.readInt16LE(0)); //25928
// console.log(nodeBuffer.readInt16BE(0)); //18533
// console.log(nodeBuffer.readInt32LE(0)); //1819043144
// console.log(nodeBuffer.readInt32BE(0)); //1214606444

// Writing Methods
const buf4 = Buffer.alloc(8);
// buf4.writeInt8(97, 0);
// console.log("buf4: ", buf4);
// buf4.writeInt16LE(100, 0);
// console.log("buf4: ", buf4);
// buf4.writeInt16BE(100, 0);
// console.log("buf4: ", buf4);
// buf4.writeInt32LE(0xAFFA78, 0);
// console.log("buf4: ", buf4);
// buf4.writeInt32BE(0xAFFA78, 0);
// console.log("buf4: ", buf4);

// Some Other Methods & Properties
// console.log(nodeBuffer.at(1));
// console.log(buf1.equals(buf2));
// console.log(buf1.equals(buf3));
// console.log(buf3);
// console.log("buf1: ", buf1);
// console.log(buf1.swap16());
// console.log(buf1.swap32());
// console.log(nodeBuffer.length);
// console.log(nodeBuffer.buffer);
// console.log(nodeBuffer.byteLength);
// console.log(nodeBuffer.byteOffset);