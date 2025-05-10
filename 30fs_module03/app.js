import fs from "node:fs/promises";
import { watch } from "node:fs";

//Create a file
// fs.writeFile("myFile.js", "");

//Create a dir
// fs.mkdir("mydir");

//Rename a file & dir
// fs.rename('changed', 'text.txt');
// fs.rename("./src", "test");

//Copy a file
// fs.copyFile("text.txt", "C:\\Users\\Nitin\\OneDrive\\Desktop\\text-1.txt");

//Copy a dir
// fs.cp("./src", "C:\\Users\\Nitin\\OneDrive\\Desktop\\src", {recursive: true});

//Move a file & dir
// fs.rename("text.txt", "./src/text.txt");
// fs.rename("./test", "./src/test");

//Delete a file(permanently)
// fs.unlink("text.txt");
// fs.rm("text.txt");

//Delete a empty dir
// fs.rmdir("./test");

//Delete a dir with content
// fs.rm("./src", {recursive: true});

//get stats and details of a file or dir
// const fileStats = await fs.stat("app.js");
// const dirStats = await fs.stat("./src");
// console.log(fileStats);
// console.log(dirStats);

//Watch a file
// the watch method from "node:fs/promises" is more complex than "node:fs" normal thats why we use callback watch method instead promise. 
// watch("tes.txt", async (eventType) => {
//     if(eventType === "change") {
//         console.log(await fs.readFile("tes.txt", "utf-8"));
//     }
// });        