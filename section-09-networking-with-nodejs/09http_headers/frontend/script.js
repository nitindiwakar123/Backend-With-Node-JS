const response = await fetch("http://192.168.145.215:4000");

// console.log(response.headers);

for (const header of response.headers) {
    console.log(header);
}

// console.log(response.body);
// for await (const chunk of response.body) {
//     console.log(chunk);
// }