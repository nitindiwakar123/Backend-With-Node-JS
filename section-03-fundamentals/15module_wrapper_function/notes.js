// 💡 Summary (Conceptual):

// ✅ Har file apne alag wrapper function me hoti hai
// ✅ Jab main.js me `require('./a')` hota hai, tab Node:
//     1. a.js file padhta hai
//     2. usko wrapper function me daalta hai
//     3. us function ko run karta hai
//     4. aur `module.exports` ko return karta hai

// ✅ Ye process sirf ek baar hota hai per module (thanks to caching)

// ✅ Execution flow:
// main.js → runs till require('./a') → jumps to a.js → returns → continues main.js
