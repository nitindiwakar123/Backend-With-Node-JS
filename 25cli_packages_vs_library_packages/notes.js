// 📦 Node.js Packages: CLI vs Library & Local vs Global

// 🔹 CLI Packages vs Library Packages

// ✅ CLI (Command Line Interface) Packages
// - These packages are meant to be used directly in the terminal.
// - They provide a command you can run after installing.
// - Examples: `nodemon`, `eslint`, `create-react-app`
// - Usually have a "bin" field in package.json to define executable commands.

// Example:
// Install nodemon globally: npm install -g nodemon
// Run from terminal: nodemon index.js

// ✅ Library Packages
// - These are meant to be used inside your code using require() or import.
// - You don’t run them from terminal, instead you import their functions or modules.
// - Examples: `lodash`, `axios`, `express`
// - Used like this in code:
//   const express = require('express');

// 🔹 Local Packages vs Global Packages

// ✅ Local Packages
// - Installed in the current project folder (`node_modules` inside your project).
// - Only available to that project.
// - Installed using: npm install <package-name>
// - You run them using `npx <package>` if they are CLI-based and not installed globally.

// Example:
// npm install express
// require('express') in your code

// ✅ Global Packages
// - Installed system-wide and can be accessed from anywhere via terminal.
// - Installed using: npm install -g <package-name>
// - Mostly used for CLI tools (e.g., nodemon, eslint, vite)

// Example:
// npm install -g nodemon
// nodemon index.js

// 🔔 Tip:
// Use local installation for project dependencies.
// Use global installation only for tools used frequently from the terminal.

