//Common JS Module System
//Synchronous file loading
//cjs imports are not hoisted
//File extension optional
//We cannot use await keyword at top level and out of a async function
//Only one value can be exported in cjs
//Strict mode not enabled by default
//If we give full file path then can load any file in cjs
//It is a convention to add cjs in the file extension
//It is optional to set type=commonjs in package.json, index.html whenever you want to use CJS Modules, because cjs in default js module system
//In cjs the value of this keyword is {} and module.exports points to this by default 


//ES6 Module System 
//ESM module imports are loaded asynchronously, but once loaded, the execution of imported code is synchronous.
//File extension mandantory 
//mjs imports are hoisted
//We can use await keyword at top level and out of a async function
//Multiple values can be exported in mjs
//Strict mode enabled by default
//We cannot load any file, only js and mjs files are allowed
//It is a convention to add mjs in the file extension
//It is must to set type=module in package.json, index.html whenever you want to use ES6 Modules
//In es6 the value of this keyword is undefined. 

// What is Hoisting in JavaScript?
// Hoisting is a JavaScript behavior where the declarations of variables (var, let, const) and functions are moved to the top of their scope (either function or global) during the memory creation phase, before the code starts executing.
// In node js ESM modules import statements are also hoisted.