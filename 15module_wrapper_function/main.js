// 🔰 Ye file main module hai, jab aap `node main.js` run karte ho, Node.js is file ko execute karta hai.
// Har module (yani har file) Node.js ke through internally ek function me wrap hoti hai:
// (function (exports, require, module, __filename, __dirname) { /* your code */ })

console.log("➡️ Start of main.js");

require('./a'); // 🔁 Is line pe Node a.js module ko load karta hai (agar pehle load nahi hua ho)
require('./b'); // 🔁 Fir b.js module load hoga

console.log("✅ End of main.js");
