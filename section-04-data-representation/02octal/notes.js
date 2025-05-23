// -----------------------------------------
// Octal Number System Notes (Base-8)
// -----------------------------------------

// Octal Number System:
// - Octal system is also called Base-8 number system.
// - It uses 8 digits only: 0, 1, 2, 3, 4, 5, 6, 7
// - It does NOT use digits 8 or 9.
// - It is a positional number system just like decimal.

// Base:
// - The base of octal number system is 8.

// Positional Value:
// - Each digit's position is a power of 8, starting from right (0th power).
// Example:
// Octal number: 725 (in base 8)
// Decimal Equivalent:
// = 7 × 8^2 + 2 × 8^1 + 5 × 8^0
// = 7 × 64 + 2 × 8 + 5 × 1
// = 448 + 16 + 5 = 469 (in decimal)

// Usage:
// - Octal numbers are used in computing, especially in Unix file permissions and older computer systems.

// Important Notes:
// - To represent an octal number in programming, prefix it with `0o`.
// Example: 
// let octalNum = 0o725; // Interpreted as octal in some older JS engines.

// Conversion Tip:
// - Octal to Decimal: Multiply digits with powers of 8.
// - Decimal to Octal: Divide by 8 and collect remainders (bottom to top).

// -----------------------------------------
// Example Table:
// Octal: 127 (base 8)

// Digit | Place     | Value (Decimal)
// ------|-----------|-----------------
//   1   | 8^2 = 64  | 1 × 64 = 64
//   2   | 8^1 = 8   | 2 × 8 = 16
//   7   | 8^0 = 1   | 7 × 1 = 7

// Total = 64 + 16 + 7 = 87 (in decimal)

// -----------------------------------------
// Notes ready for quick revision 💡
// -----------------------------------------
