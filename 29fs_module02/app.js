// Import the 'fs/promises' module to use asynchronous file system operations with promises
import fs from "node:fs/promises";

// Write data to a file (overwrites the file if it already exists)
// fs.writeFile("text-1.txt", "Wrallow shallow malllow");

// Append data to a file (adds data at the end of the file; creates the file if it doesn't exist)
// fs.appendFile("text-2.txt", "\nfallow gallow vallow nallow");

try {
    // Read a binary file (e.g., image) and store its content in a buffer
    const contentBuffer = await fs.readFile("testa.jpg");

    // Write the buffer content to a new file (this creates a copy of the image)
    // fs.writeFile is used to write or overwrite a file with given data
    fs.writeFile("C:\\Users\\Nitin\\OneDrive\\Desktop\\ninja.jpg", contentBuffer);
} catch (error) {
    // If any error occurs, log the error message and stack trace to a file
    // fs.appendFile is used here to preserve previous logs and add new entries without overwriting
    fs.appendFile('error.log', `\n\n${new Date().toLocaleTimeString()}: ${error.message} \n ${error.stack}`);

    // Show only the error message in the console for quick feedback
    console.log(error.message);

    // Notify the user that the full error has been saved in the error log
    console.log("To see full error go to ./error.log file!");
}

// Periodically write the current time to a file every 500ms (commented out)
// This demonstrates using writeFile in a timer
// setInterval(() => {
//     fs.writeFile("text-1.txt", new Date().toLocaleTimeString());
// }, 500);

/*
Why we create error.log file:
-----------------------------------
The error.log file helps us keep a record of all errors that happen during the execution of the program.
This is useful for debugging and tracking problems, especially when the app is running in production.
Using appendFile ensures that we don't lose previous errors; instead, new errors are added to the end of the file.
*/
