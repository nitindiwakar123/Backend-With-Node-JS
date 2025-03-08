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
const num = process.env.num8;
console.log(num);
//update
process.env.num8 = 45;
console.log(process.env.num8);

//if you console num8 in node js you see value is changed but you if you echo num8 in parent process(bash) you can see it is not updated in bash because a child process only create a copy of parent's enviroment variables not directly reference on it.
