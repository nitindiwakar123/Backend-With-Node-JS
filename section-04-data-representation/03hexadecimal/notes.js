// -----------------------------------------
// Hexadecimal Number System Notes (Base-16)
// -----------------------------------------

// Hexadecimal Number System:
// - Also known as Base-16 number system.
// - It uses 16 symbols: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F
// - A = 10, B = 11, C = 12, D = 13, E = 14, F = 15
// - It is a positional number system.

// Base:
// - The base of hexadecimal number system is 16.

// Positional Value:
// - Each digit's position represents a power of 16, starting from right (0th power).
// Example:
// Hexadecimal: 2F
// Decimal Equivalent:
// = 2 × 16^1 + F × 16^0
// = 2 × 16 + 15 × 1
// = 32 + 15 = 47

// Usage:
// - Commonly used in computer science and digital electronics.
// - Used in memory addressing, machine code, color codes (like #FF5733), etc.

// Hexadecimal Literals in JavaScript:
// - Prefix with 0x
// Example:
// let hex = 0x2F; // Interpreted as 47 in decimal

// Conversion Tips:
// - Hex to Decimal: Multiply each digit with 16 raised to the power of its position.
// - Decimal to Hex: Divide by 16, collect remainders, and use A-F for values 10 to 15.

// Example Table:
// Hexadecimal: 3A7

// Digit | Power of 16 | Decimal Value
// ------|--------------|----------------
//   3   | 16^2 = 256   | 3 × 256 = 768
//   A   | 16^1 = 16    | 10 × 16 = 160
//   7   | 16^0 = 1     | 7 × 1 = 7

// Total = 768 + 160 + 7 = 935
