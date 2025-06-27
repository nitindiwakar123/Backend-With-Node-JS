import dgram from "node:dgram";
import net from "node:net";
import http from "node:http";
import https from "node:https";
import dns from "node:dns";
import os from "node:os";

const networkInterfaces = os.networkInterfaces();
console.log(networkInterfaces);

// Networking Capabilities of Node JS
//     It has many built-in modules for creating networking appplications.
//     Like dgram for UDP, net for TCP, http for HTTP, https for HTTPS, dns.