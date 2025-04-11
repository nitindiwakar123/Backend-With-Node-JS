// Define a user object with nested address
const user = {
    name: "Nitin",
    age: 78,
    address: {
        city: "Moradabad",
        state: "UP"
    }
};

// Create a reference to the address object
let address = user.address;

// ❓ At this point: user.address === address is true
// Because both point to the same object in memory
// console.log(user.address === address); // true

// ✅ Mutating the address object directly (will also affect user.address)
// address.pincode = 244001;
// address.country = "India";

// ❌ Now we are reassigning `address` to a completely new object
// This breaks the reference with user.address
address = {
    pincode: 244001,
    country: "India"
};

// ✅ This will print the new address object (not connected to user anymore)
console.log(address); 
// Output: { pincode: 244001, country: 'India' }

// ✅ This will print the original address object inside `user` (unchanged)
console.log(user.address); 
// Output: { city: 'Moradabad', state: 'UP' }

// ========================
// Module Exports in Node.js
// ========================

// `module.exports` is used to export values from a file in Node.js
let superman = module.exports;

// ❓ Checking if `superman` and `module.exports` point to the same object
// console.log(module.exports === superman); // true

// ✅ In a new file, whatever you assign to module.exports is what gets exported
