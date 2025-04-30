// 📌 Shebang (`#!`) in Scripting

// ✅ What is a Shebang?
// - A shebang is the first line in a script file, starting with `#!`, followed by the path to an interpreter.
// - It tells the OS which interpreter to use to run the script.

// 🔍 Syntax
// #!/path/to/interpreter

// Example (Bash script):
// #!/bin/bash
// echo "Hello, world!"

// 🧠 Why is it Important?
// - Ensures the correct interpreter (like Python, Bash, Node.js) is used.
// - Without it, the script may not run correctly when executed directly (e.g., `./script.sh`).

// 💡 Common Shebangs
// | Language | Shebang                                |
// |----------|-----------------------------------------|
// | Bash     | #!/bin/bash                             |
// | Sh       | #!/bin/sh                               |
// | Python   | #!/usr/bin/python3 or #!/usr/bin/env python3 |
// | Node.js  | #!/usr/bin/env node                     |
// | Perl     | #!/usr/bin/perl                         |


// 🛠️ Best Practice
// - Use `#!/usr/bin/env <interpreter>` for portability, as it uses the system's PATH.

// In node js
// Example:
// #!/usr/bin/env node

// 🏃‍♂️ How to Run a Script with Shebang
// 1. Make the script executable:(if you are using linux else run directly)
//    chmod +x script.sh
// 2. Run it directly:
//    ./script.sh

