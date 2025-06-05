
const str = "Hello from frontend!";

const a = new ArrayBuffer(4);
const uInt8Array = new Uint8Array(a);

uInt8Array[0]=97;
uInt8Array[1]=98;
uInt8Array[2]=99;
uInt8Array[3]=100;

fetch("http://localhost:3000", {
    method: "POST",
    body: a
})
    .then((res) => res.arrayBuffer())
    .then((data) => {
        // console.log(data)
        const uInt8Array = new Uint8Array(data);
        const decoder = new TextDecoder("utf-8");
        const text = decoder.decode(uInt8Array);
        console.log(text);
        const element = document.createElement("div");
        element.innerText = text;
        document.body.appendChild(element);
    });