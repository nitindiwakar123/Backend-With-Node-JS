// What is a Buffer Pool?
// The Buffer Pool is essentially a shared ArrayBuffer internally used by Buffer.allocUnsafe() for small allocations.
// The Buffer Pool in Node.js is a shared memory area(or shared Array) used internally to optimize the allocation of small buffers (by default, less than 4096 bytes). It helps reduce memory allocation overhead by reusing a large chunk of memory (typically 8192 bytes = 8 KB) instead of frequently calling malloc (expensive memory allocation).
	
// 	when we create a buffer in node JS, irrespective of alloc or allocUnsafe()
// 	it takes the given byteLength only.

// 	but behind the scenes the arrayBuffer they create, change the game.
// 	alloc take the same byteLength as given.
// 	allocUnsafe take the byteLength of 8192Bytes(8KB).

// 	allocUnsafe shares the same arrayBuffer behind the scenes for every buffer.
// 	BUT based on some conditions :
// 		ByteLength of new buffer should be less than half of poolsize
// 		technically it will be (ByteLength < Poolsize >>> 1 )
	
// 	If the given condition is false it will create a new ArrayBuffer for storing the data of new Buffer.

// 	We can change the Buffer.poolsize, but it will not applicable to the first array buffer, it will applicable from second.
		
// 	AllocUnsafe is fast because it has by-default access of 8KiB and don't ask memory for empty space.

// 	Buffer.from(), Buffer.concat() behind the scenes uses allocUnsafe

// 	while importing Buffer we also get one more object with buffer
// 		`import {Buffer, constants} from 'buffer';`

// 	constants.MAX_LENGTH -> Maximum buffer Size
// 	constants.MAX_STRING_LENGTH -> Maximum String length

// 	Buffer.allocUnsafeSlow() -> Don't use buffer pool