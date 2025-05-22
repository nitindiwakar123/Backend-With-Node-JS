import { num } from "./math.js";

// ✅ In modern Node.js (v20+), you can use the built-in `import.meta.dirname` and `import.meta.filename`

// These are now available by default without needing to do manual hacks
const filename = import.meta.filename;
const dirname = import.meta.dirname;

console.log("filename:", filename); // Full path of the current file
console.log("dirname:", dirname);   // Directory of the current file

// Just using the imported value to avoid "unused import" warning
console.log("num from math.js:", num);

/*
📝 Notes:
---------
✔️ `import.meta.filename` gives you the full path to the current module (like __filename in CommonJS).
✔️ `import.meta.dirname` gives you the directory path (like __dirname in CommonJS).
✔️ These are available in Node.js v20+ (as stable features).
✔️ No need for manual `new URL('', import.meta.url)` or workarounds anymore!

⚠️ Make sure your Node.js version is >= 20.
   You can check with: node -v
*/
