fetch("http://localhost:3000")
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