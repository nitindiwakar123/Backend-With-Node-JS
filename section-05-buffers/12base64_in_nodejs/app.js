import fs from "node:fs/promises";
import { Buffer } from "node:buffer";

// const content = await fs.readFile('text.txt', "base64");
// const bufferContent = await fs.readFile('text.txt');
// const text = bufferContent.toString("base64");
// console.log(content);

// const write = fs.writeFile('new.txt', text);

const buffer = await fs.readFile('favicon\\android-chrome-192x192.png', "base64");
await fs.writeFile('new.txt', buffer);
const imageData = await fs.readFile('new.txt', "utf-8");
fs.writeFile('a.png', imageData, "base64");

// const text = await fs.readFile('script.js', "base64");
// fs.writeFile('script.txt', text);

// const videoData = await fs.readFile("C:\\Users\\Nitin\\Videos\\mytitle.mp4", "base64");
// fs.writeFile('video-data.txt', videoDataIn64);
// const videoDataIn64 = await fs.readFile('video-data.txt', "utf-8");
// fs.writeFile('video.mp4', videoDataIn64, "base64");

// const str = await fs.readFile("C:\\Users\\Nitin\\Downloads\\sigma.jpeg", "base64");
// console.log(str); 
// fs.writeFile('sigma.txt', str);
// fs.writeFile('sig.jpeg', str, "base64");

//Base64Url
// const str2 = await fs.readFile('favicon\\favicon-16x16.png', "base64url");
// fs.writeFile('baseurl.txt', str2);

// const str3 = await fs.readFile('text.txt', "base64");
// const str4 = await fs.readFile('text.txt', "base64url");

// console.log("encoding using base64: ", str3);
// console.log("encoding using base64url: ", str4);

// const buf = Buffer.alloc(4);
// buf.write("YWI=");
// console.log(buf.toString("utf-8"));

/* ******************************************************************** */

// Base-64 in NodeJS

//     When we write a file in base64 the file size increases by 1.3 times

//     You can use the following command as well to get the base64 encoded data:
//     >  base64 image.png

//     If you want to get the URL of the image. Then you can use the following command:
//     >  echo "data:image/png;base64,$(base64 image.png)"

//     This encoding exist cuz some communication system are only text-based

//     Base64url ? 
//         It remove the = sign from last if exist, and +, / is replaced by -, _
//         It is used for sending data in query params

// normal text - ab
// equivalent binary - 01100001 01100010  
// base64 conversion - 011000 010110 001000 000000
// equivalent base64 text - YWI=