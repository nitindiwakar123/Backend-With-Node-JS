// Importing the built-in HTTP module to create a server
import http from "http";

// Importing the built-in File System module to handle file operations
import fs from "node:fs";

// Creating the server using http.createServer method
const server = http.createServer((req, res) => {
    // Logging each incoming request with the date and URL
    const log = `${new Date().toDateString()}: ${req.url}: New Req Received!\n`;

    // Appending the request log to a file named 'log.txt'
    fs.appendFile("log.txt", log, (err, data) => {
        // Switch statement to handle different routes
        switch (req.url) {
            case "/":
                res.end("Home Page!"); // Respond to root route
                break;

            case "/about":
                res.end("About Page!"); // Respond to /about
                break;

            case "/contact":
                res.end("Contact Page!"); // Respond to /contact
                break;

            case "/auth":
                res.end("Auth Page!"); // Respond to /auth
                break;

            case "/blogs":
                res.end("Blogs Page!"); // Respond to /blogs
                break;

            default:
                res.end("404 Not Found!"); // Respond to unknown route
                break;
        }
    });

    // You can log the full request object for debugging if needed
    // console.log(req);
});

// Server listens on port 3000
server.listen(3000, () => console.log("Server Started!"));
