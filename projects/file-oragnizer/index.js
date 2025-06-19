import fs from "node:fs/promises";
import { exec } from "node:child_process";

if (!process.argv[2]) {
    console.log("Please provide folder path");
}
const path = process.argv[2].includes("./") ? process.argv[2] : `./${process.argv[2]}`;
const organizedFiles = {};
// console.log(path);

try {
    const content = await fs.readdir(path, { encoding: "utf-8" });

    content.map((file, idx) => {
        const fileExtension = file.split(".").slice(1).toString();
        if (fileExtension === 'png' || fileExtension === 'jpeg' || fileExtension === 'jpg') {
            if ("images" in organizedFiles) {
                
                organizedFiles.images.push(file);
            } else {
                organizedFiles.images = [file];
            }
        }
        else if (fileExtension === 'pdf' || fileExtension === 'txt' || fileExtension === 'docx') {
            if ("documents" in organizedFiles) {
                organizedFiles.documents.push(file);
            } else {
                organizedFiles.documents = [file];
            }
        }
        else if (fileExtension === 'mp4' || fileExtension === 'mkv' || fileExtension === 'webp') {
            if ("videos" in organizedFiles) {
                organizedFiles.videos.push(file);
            } else {
                organizedFiles.videos = [file];
            }
        }
        else if (fileExtension === 'mp3') {
            if ("audios" in organizedFiles) {
                organizedFiles.audios.push(file);
            } else {
                organizedFiles.audios = [file];
            }
        }
    });

} catch (error) {
    console.log("Please provide a valid path!", error);
}

console.log(organizedFiles);
                // console.log(val)