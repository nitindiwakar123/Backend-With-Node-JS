const response = await fetch("http://192.168.43.92:4000");

for await (const chunk of response.body) {
    console.log(chunk);
}
