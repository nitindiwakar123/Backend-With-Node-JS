// Node.js mein har file ek module hoti hai, aur agar tum chaho kisi file se kuch cheezein baahar (export) karna, toh uske liye module.exports ya exports ka use hota hai.

function add(num1, num2) {
    return num1+num2;
}

function subtract(num1, num2) {
    return num1-num2;
}

// module.exports = {
//     add,
//     subtract
// }
// console.log(module.exports);

//exports is just a variable that have reference of module.exports, it is used for shortcut.
// exports.add = add;
// exports.subtract = subtract;
// console.log(module.exports);
// console.log(exports);

//but if you reassign exports variable it looses the reference of module.exports.
// exports = {
//     add,
//     subtract
// } //don't do this
// console.log(module.exports);
// console.log(exports);


// console.log(module.exports === exports);
