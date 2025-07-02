import http from "node:http";

const client = http.request({
    method: "POST",
    hostname: "192.168.43.92",
    port: 4000,
});
 
client.end("Hello I am client.");
// console.log(client);

client.on('response', (response) => {
    response.on('data', (data) => {
        console.log(data.toString());
    })
})

client.on('error', () => {
    console.log("Something went wrong!");
})