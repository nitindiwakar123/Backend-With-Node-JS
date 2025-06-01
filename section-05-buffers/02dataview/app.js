// ArrayBuffer of 4 bytes is created
// const a = new ArrayBuffer(4);

// Creating a DataView to access and manipulate the buffer
// const view = new DataView(a);

// Storing signed 8-bit integers at specific byte offsets
// view.setInt8(0, 0xFF);      // 0xFF = 255 in decimal, interpreted as -1 in signed 8-bit
// view.setInt8(1, 127);       // Maximum positive value for Int8
// view.setInt8(2, 128);       // Interpreted as -128 in signed 8-bit
// view.setInt8(3, 0o120);     // 0o120 (octal) = 80 in decimal

// Reading the values as signed 8-bit integers
// console.log(view.getInt8(0)) // -1
// console.log(view.getInt8(1)) // 127
// console.log(view.getInt8(2)) // -128

// Reading the same bytes as unsigned 8-bit integers
// console.log(view.getUint8(0)) // 255
// console.log(view.getUint8(1)) // 127
// console.log(view.getUint8(2)) // 128

// Logging the ArrayBuffer object (not very human-readable)
// console.log(a);

// ------------------------------------------------------------------

// Creating a new ArrayBuffer of 32 bytes
const buffer = new ArrayBuffer(32);

// Creating a DataView for the buffer to read/write data
const view2 = new DataView(buffer);

// Using a loop to set each byte of the buffer to value 80
for (let i = 0; i < buffer.byteLength; i++) {
    view2.setInt8(i, 80); 
}

// Logging the buffer after modification
console.log(buffer);  // Will show that all 32 bytes are set to 80
