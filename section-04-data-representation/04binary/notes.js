// -----------------------------------------
// Binary Number System Notes (Base-2)
// -----------------------------------------

// Binary Number System:
// - Also known as Base-2 number system.
// - It uses only 2 digits: 0 and 1
// - It is a positional number system, widely used in digital electronics and computing.

// Base:
// - The base of binary number system is 2.

// Positional Value:
// - Each digit's position represents a power of 2, starting from the right (0th power).
// Example:
// Binary: 1011
// Decimal Equivalent:
// = 1 × 2^3 + 0 × 2^2 + 1 × 2^1 + 1 × 2^0
// = 8 + 0 + 2 + 1 = 11

// Usage:
// - Binary is the foundation of all digital systems.
// - Used in computers, microcontrollers, logic gates, etc.

// Binary Literals in JavaScript:
// - Prefix with 0b
// Example:
// let binary = 0b1011; // Interpreted as 11 in decimal

// Conversion Tips:
// - Binary to Decimal: Multiply each digit by 2 raised to the power of its position.
// - Decimal to Binary: Divide by 2 and collect remainders (bottom to top).

// Example Table:
// Binary: 1101

// Digit | Power of 2 | Decimal Value
// ------|-------------|----------------
//   1   | 2^3 = 8     | 1 × 8 = 8
//   1   | 2^2 = 4     | 1 × 4 = 4
//   0   | 2^1 = 2     | 0 × 2 = 0
//   1   | 2^0 = 1     | 1 × 1 = 1

// Total = 8 + 4 + 0 + 1 = 13
