// environment variables are key-value pairs that store configuration settings for the system and applications. These variables can influence the behavior of processes and software running on the system.

// Common Environment Variables
// Here are some frequently used environment variables:

// PATH - List of directories where executable programs are searched for.
// HOME / USERPROFILE - User's home directory (HOME on Linux/macOS, USERPROFILE on Windows).
// USERNAME - The current logged-in user's name.
// SHELL -	The default shell for the user (e.g., /bin/bash).
// TEMP / TMP - Path to the temporary files directory.
// OS	Name of the operating system.
// LANG	System language setting.
// PWD	The current working directory.
// EDITOR	Default text editor for the system.

//Accessing enviroment variables in javascript/nodejs
// const enviromentVariables = process.env;
// console.log(enviromentVariables);
// console.log(enviromentVariables.MY_VAR);

//Setting a user level enviroment variable using node js
// const {exec} = require('child_process');
// exec("setx NODE_VAR 'Nodejs'");

// const enviromentVariables = process.env;
// console.log(enviromentVariables.name);

// setInterval(() => {
// console.log(enviromentVariables);
// }, 1000);

//Update env variable inherited from parent in node js
//first define a variable called num8 in bash.
// const num = process.env.num8;
// console.log(num);
// //update
// process.env.num8 = 45;
// console.log(process.env.num8);

//if you console num8 in node js you see value is changed but you if you echo num8 in parent process(bash) you can see it is not updated in bash because a child process only create a copy of parent's enviroment variables not directly reference on it.


//setting up enviroment variable with .env file
// Explanation: Detecting Line Endings and Parsing .env File in Node.js
// Reading the .env File
const fs = require('fs');

// The file is read synchronously using the fs module and converted into a string.
const fileData = fs.readFileSync('./.env').toString();

// Detecting Line Endings
// The script checks whether the file contains \r\n (Windows-style CRLF) or \n (Unix-style LF) to determine how the lines are separated.
// Splitting the File into Lines
// Depending on the detected line ending, the file content is split into an array of lines.

if(fileData.includes("\r\n")) {
    console.log("case 1");
    
    const obj = fileData.split("\r\n");
    obj.forEach((variable) => {
        const [key, value] = variable.split("=");
        process.env[key] = value;
    });
} else if (fileData.includes("\n")) {
    console.log("case 2");
    
    const obj = fileData.split("\n");
    obj.forEach((variable) => {
        const [key, value] = variable.split("=");
        process.env[key] = value;
    });
} else {
    console.log("case 3");
    
}

const enviromentVariables = process.env;


// Parsing Key-Value Pairs

// Each line is processed to extract the key and value by splitting at the = sign.

// Storing Variables in process.env

// The extracted key-value pairs are assigned to process.env, making them accessible as environment variables.

// Handling Different Cases

// If the file uses \r\n, the CRLF format is used for splitting.

// If the file uses \n, the LF format is used for splitting.

// If neither \r\n nor \n is found, the file format is unknown, and no action is taken.

