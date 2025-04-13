
// What is a Module in Node.js?
// A module is just a file. In Node.js, every JavaScript file is treated as a separate module. It helps in organizing code, avoiding polluting the global namespace, and reusing functionality.

// There are two types of module systems in node js
// 1. CommonJS (CJS) – Default Module System
// 2. ES Modules (ESM) – Modern Module System

// when we run this file in node js variable num treated as local variable but in browser it treated as global variable.

// because Node.js is designed for modularity. Every file is treated as a module, and it wraps your code in a function behind the scene like this:

// (function(exports, require, module, __filename, __dirname) {
//     // your code here
//   })();
  
// var num = 0;
// console.log(num);

// If you want a truly global variable in Node.js, you have to explicitly attach it to the global object:
// global.a = 10;
// console.log(global.a); 

//you can also add a variable in global scope without using let, var, const but it is not recommended.
c=80;

console.log(c);
