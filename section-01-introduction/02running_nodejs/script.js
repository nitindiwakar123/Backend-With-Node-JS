const { AsyncLocalStorage } = require('async_hooks');
const { log } = require('console');
const fs = require('fs');
const {exec} = require('child_process');
//Node js advantages
//Read a file
// const text = fs.readFileSync("C:\\Users\\Nitin\\Desktop\\resume.txt");
// console.log(String(text));
// console.log("End");

//Write a file
// const write = fs.writeFileSync("C:\\Users\\Nitin\\Desktop\\text.txt", "Hello I am there this is node js your father sorry other backend enviroments but node js is your father!");
// console.log(write);

//Rename a file
// const rename = fs.renameSync("hjgame.txt", "C:\\Users\\Nitin\\Desktop\\hjgame.txt");

//Delete a file
// const deletefile = fs.unlinkSync("C:\\Users\\Nitin\\Desktop\\hjgame.txt");
// console.log(deletefile);

//Start an application
// exec('"C:\\Program Files\\VideoLAN\\VLC\\vlc.exe"');
// exec('"C:\\WINDOWS\\system32\\mspaint.exe"');
