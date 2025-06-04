// const buffer = new ArrayBuffer(4);

// const uInt8Array1 = new Uint8Array(buffer);
// const uInt16Array = new Uint16Array(buffer);
// const uInt32Array = new Uint32Array(buffer);

// console.log(uInt8Array.buffer === buffer);
// console.log(uInt16Array);
// console.log(uInt32Array);

// const uInt8Array2 = new Uint8Array(4);

// uInt8Array[0] = 0xef;
// uInt8Array[1] = 0xff;
// uInt8Array[2] = 0xaf;
// uInt8Array[3] = 0xbf;

// const uInt8Array3 = new Uint8Array([0xef, 0xff, 0xaf, 0xbf]); 
// console.log(uInt8Array3.buffer);

// const uInt8Array4 = new Uint8Array(32);
// for (let i = 0; i < uInt8Array4.length; i++) {
//     uInt8Array4[i] = i+1;
// }
// console.log(uInt8Array4);

// const uInt8Array5 = new Uint8Array(32).fill(0xff);
// console.log(uInt8Array5);

//Properties of ArrayBuffer
// const a = new ArrayBuffer(4);
// console.log(a.resizable); //false
// a.resize(8); //this will threw an Error because a.resizable = false.
// if you want to a.resizable = true and want to change the bytelength(size) of arrayBuffer you need to set a.maxByteLength property on its declaration

const b = new ArrayBuffer(4, {maxByteLength: 16});
// console.log(b)
// console.log(b.resizable); //true
// b.resize(8);
// console.log(b);
// b.resize(32); //this will throw error because you can only resize the arrayBuffer upto its maxByteLength you set on declaration.

//Detached
console.log(b.detached); //false
const c = b.transfer();
console.log("b: ", b);
console.log("c: ", c);
console.log(b.detached); //true 
console.log(c.detached); //false
