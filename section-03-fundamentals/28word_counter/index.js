#!/usr/bin/env node

import { readFile } from "node:fs/promises";
const filePath = process.argv[2].includes("./") ? process.argv[2] : `./${process.argv[2]}`;
// console.log(filePath);
const userWord = process.argv[3]? process.argv[3].toLowerCase(): null;

let fileContent = await readFile(filePath, 'utf-8');
fileContent = fileContent.toLowerCase();
// console.log(fileContent);

const wordsArray = fileContent.split(/[\W]/).filter((word) => word);
// console.log(wordsArray);

const wordsCount = {};

if (userWord) {
    if(!wordsArray.includes(userWord)) {
            wordsCount[userWord] = 0;
    }
    wordsArray.forEach((word) => {
        if(userWord == word) {            
            if (userWord in wordsCount) {
                wordsCount[userWord] += 1;
            } else {
                wordsCount[userWord] = 1;
            }
        }
    })
} else {
    wordsArray.forEach((word) => {
        if (word in wordsCount) {
            wordsCount[word] += 1;
        } else {
            wordsCount[word] = 1;
        }
    })
}

console.log(wordsCount);


