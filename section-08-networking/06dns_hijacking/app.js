import http from "node:http";

const server =  http.createServer((req, res) => {
    res.end("Hello World Your dns hijacked!");
});

server.listen(80);

// DNS Hijacking using host file

//     The hosts file is a local file on your computer that maps domain names to IP addresses. Your system checks it before using a DNS server.

//     By editing the hosts file, you can:
//         Redirect a website (e.g., send www.google.com to 127.0.0.1)
//         Block access to sites
//         Simulate domains for local development
