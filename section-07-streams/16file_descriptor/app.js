// What is a File Descriptor?
import fs from "node:fs";

console.log(process.stdin.fd);
console.log(process.stdout.fd);
console.log(process.stderr.fd);

const numFilefd = fs.openSync('num.txt');

const textFilefd = fs.openSync('text.txt');

const packageFilefd = fs.openSync('package.json');

console.log({numFilefd, textFilefd, packageFilefd});


// File Descriptor ?
//     File Descriptor is a non negative integer.
//     (0 or positive)
//     It represented as address of open file.
//  It will always start from 3, because:
//         0 stdin
//         1 stdout
//         2 stderr
// Only those files that are opened have a file descriptor.