// console.log("Starting index.js");
// module.exports.num = 9;

// console.log(this);
// console.log(module.exports);

// console.log(module.exports === this);
// import app from "./app.js";
// const app = require("./app.js");
// console.log("Ending index.js");

//CommonJS Execution flow(not hoisted) - index.js -> app.js -> third.js -> index.js
//ESM Modules Execution flow(hoisted) - third.js -> app.js -> index.js

const response = await fetch('https://randomuser.me/api/');
console.log(response);
