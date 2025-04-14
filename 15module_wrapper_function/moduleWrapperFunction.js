// In Node.js, every module is wrapped in a special function called the module wrapper function. This function is what allows variables like require, module, exports, __filename, and __dirname to be available in every Node.js module without explicitly defining them.

(function (exports, require, module, __filename, __dirname) {
    //your code wraps here
})(exports, require, module, __filename, __dirname);
  
// The module wrapper function in Node.js is an IIFE — an Immediately Invoked Function Expression.