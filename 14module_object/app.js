// Importing the local 'math' module from the same directory
const math = require('./math');

// Importing 'axios' library (currently commented out)
// const axios = require('axios');

// ───────────────────────────────────────────────────────────────
// 📦 Understanding the 'module' object in Node.js:
// The 'module' object gives metadata about the current module (file).
// It’s available globally in every CommonJS file.

// Some important properties of the 'module' object:

// 🔹 module.exports
//     → The object that will be exported from this module.
//     → You can attach functions, variables, or objects here.

// 🔹 module.id
//     → Identifier for the module, usually its absolute path.

// 🔹 module.filename
//     → The full path of the current file.

// 🔹 module.loaded
//     → Boolean indicating whether the module has finished loading.

// 🔹 module.parent
//     → The module that required this one (can be null for entry file).

// 🔹 module.children
//     → Array of modules this file has required/imported.

// 🔹 module.path
//     → Deprecated — use __dirname or module.filename instead.

// 🔹 module.paths
//     → An array of paths where Node.js looks for modules when using require().
//     → Useful when you want to understand the module resolution mechanism.

// 🔹 module.isPreloading
//     → Boolean indicating if the module is being preloaded via the `--require` flag
//       when starting Node.js from the CLI.
//     → Example use case: `node --require ./myModule.js app.js`

// To inspect the full module object, uncomment this line:
// console.log(module);

// To inspect how Node resolves modules, uncomment this line:
// console.log(module.paths);

// Uncomment to see the axios object (if installed)
// console.log(axios);

// Exporting a variable named 'num'
exports.num = 90;

// Uncomment to test output
// console.log("hello");
