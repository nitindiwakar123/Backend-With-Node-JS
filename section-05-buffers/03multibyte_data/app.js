// Writing Multi-Byte Data

// Create a new ArrayBuffer of 4 bytes
const buffer = new ArrayBuffer(4);

// Create a DataView to access and manipulate the buffer
const view = new DataView(buffer);

// Set 8-bit signed integer at byte offset 0
// view.setInt8(0, 257);

// Set 16-bit signed integer at byte offset 0 (big-endian by default)
// 260 in hex = 0x0104
// view.setInt16(0, 260);

// Set 16-bit signed integer at byte offset 2 with little-endian
// view.setInt16(2, 260, true);

// Get 8-bit signed integer at offset 0
// console.log(view.getInt8());

// Log raw buffer content (as ArrayBuffer)
// console.log(buffer);

// Get 16-bit signed integer from offset 0 (big-endian)
// console.log(view.getInt16(0));

// Get 16-bit signed integer from offset 2 (little-endian)
// console.log(view.getInt16(2, true));

// =============================
// Active section: Working with 32-bit integers
// =============================

// Set a 32-bit signed integer (big-endian) at offset 0
// 0x7823e324 = 2012886308 in decimal
view.setInt32(0, 0x7823e324);

// If you want little-endian storage, use the second argument as true
// view.setInt32(0, 0x7823e324, true);

// Get 8-bit signed integer at offset 0
// This would give you the first byte of the 32-bit int
// console.log(view.getInt8(0));

// Get the 32-bit signed integer at offset 0 (big-endian)
// console.log(view.getInt32(0));

// Get the 32-bit signed integer at offset 0 (little-endian interpretation)
// console.log(view.getInt32(0, true));

// Log the ArrayBuffer (useful for debugging byte-level values)
// console.log(buffer);

//  Why setInt8() and getInt8() don't have a 3rd argument for little-endian (LE)?
// Because endianness doesn't apply to single-byte values (like 8-bit integers). Here's why:

// What is endianness?
// Endianness affects how multi-byte values (like 16-bit, 32-bit, 64-bit) are stored in memory:

// Big-endian (BE): Most significant byte first.

// Little-endian (LE): Least significant byte first.

// 8-bit = 1 byte
// When you're dealing with 8-bit values:

// There is only 1 byte.

// So there's nothing to reorder.

// Hence, there's no need for an endianness option.