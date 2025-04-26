// package.json
// Main role:
// It defines the metadata of your Node.js project + manages dependencies.

// Important Properties:

// Property	Description
// name - Name of the project/package (must be lowercase, no spaces).
// version - Current version of the project (follows Semantic Versioning).
// description - Short description of the project.
// main	Entry - point file (e.g., index.js).
// scripts	- Commands you can run using npm run <script-name>.
// keywords	- Array of search keywords.
// author	- Author's name.
// license	- License type (e.g., MIT).
// dependencies	- Packages required to run the app (runtime).
// devDependencies	- Packages only needed during development (e.g., testing tools).
// engines	- Specify which versions of Node/NPM the project works with.
// repository - Information about the code repo (e.g., GitHub link).

// package-lock.json
// Main role:
// It locks the exact versions of dependencies to ensure consistent installs across all environments.

// Key Points:
// Generated automatically when you run npm install.
// Records exact version numbers of every installed package.
// Includes nested dependencies too (dependencies of dependencies).
// Guarantees same dependency tree for every developer/machine.
// Should always be committed to your Git repo.

// Main Properties:

// Property	Description
// name	- Name of the project.
// version	- Version of the project.
// lockfileVersion	- Version of the lockfile format (currently 2 for npm v7+).
// dependencies	- Detailed tree of all dependencies with exact versions, resolved URLs, and integrity hashes.

//Semantic Versioning (SemVer)
// Format: MAJOR.MINOR.PATCH

// Part	Meaning	Example
// MAJOR -	Breaking changes (not backward compatible)	2.0.0
// MINOR - New features (backward compatible)	1.5.0
// PATCH -	Bug fixes (backward compatible)	1.4.3
// Prefix - symbols in package.json dependencies:

// ^1.2.3 → Allows updates that do not change the first non-zero digit (e.g., 1.x.x updates).
// ~1.2.3 → Allows updates to the last number only (e.g., 1.2.x updates).
// No symbol → Only installs the exact version.

//How package.json and package-lock.json Manage Project Versions
// package.json
// Defines version ranges for dependencies.
// Developers can still get different versions (if no lock file).
// Used when you want flexibility.

// package-lock.json
// Freezes exact versions.
// Ensures no surprises when someone else installs your project.
// Critical for production apps.