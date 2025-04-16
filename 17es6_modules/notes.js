/**
 * 📘 Node.js Module Systems: CommonJS vs ESM
 * ------------------------------------------
 * Node.js supports two module systems:
 * 1. CommonJS (CJS) - default in older Node.js versions and still widely used.
 * 2. ES Modules (ESM) - modern, similar to browser JavaScript, and now supported natively in Node.js.
 *
 * Let's look at the differences through comments and examples.
 */

/*
✅ Characteristics of CommonJS:
- Uses `require()` to import
- Uses `module.exports` or `exports`
- Synchronous loading
- Default module system in .js files
*/


/*
✅ Characteristics of ESM:
- Uses `import`/`export`
- Supports top-level `await`
- Asynchronous loading
- Recommended for modern apps
- Works in .mjs files or .js files with `"type": "module"` in package.json
*/


/**
 * ⚠️ Note:
 * - You CANNOT mix CommonJS `require()` with `import`/`export` in the same file.
 * - To use ESM:
 *    ➤ Use `.mjs` extension **OR**
 *    ➤ Set `"type": "module"` in package.json
 *
 * Example:
 * {
 *   "type": "module"
 * }
 */

// ✅ When to use what?
// --------------------
// ➤ Use CommonJS for older projects, quick scripts, or if you're working with lots of CJS packages.
// ➤ Use ESM for modern development, especially if you're using top-level await, import maps, or want compatibility with frontend JS.

/*
🔚 Summary:
-----------
CommonJS = require/module.exports
ESM      = import/export

✔️ Prefer ESM for new projects to align with modern JS ecosystem!
*/