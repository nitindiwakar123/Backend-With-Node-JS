const fileInput = document.querySelector('#file');

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.addEventListener('load', (e) => {
        const arrayBuffer = e.target.result;
        console.log(arrayBuffer)
    });
    reader.readAsArrayBuffer(file);
});