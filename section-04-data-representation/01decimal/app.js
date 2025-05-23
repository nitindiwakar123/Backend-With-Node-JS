// Decimal Number System (Base-10)
// The decimal number system, also known as the base-10 number system, is the most commonly used number system. It uses 10 digits from 0 to 9.

const arr = [2, 4, 6];
const num = 2*1 + 4*10 + 6*100;
const num2 = 2*Math.pow(10, 0) + 4*Math.pow(10, 1) + 6*Math.pow(10, 2);
// console.log(num);
// console.log(num2);

// function reverseArray(array) {
//     const reversedArray = [];
//     for (let i = array.length - 1; i >= 0; i--) {
//         reversedArray.push(array[i]);
//     }
//     // console.log(reversedArray);
//     return reversedArray;
// }

// function calculateNumbersTotal(array = [1, 2, 3]) {
//     // if (array.length > 4) return "Array is too bigger";
//     const reversedArray = reverseArray(array);

//     let sum = 0
//     for (let i = 0; i < reversedArray.length; i++) {
//         sum += reversedArray[i] * Math.pow(10, (reversedArray.length-i)-1);
//         //i=0, 6*100, sum = 6000
//         //i=1, 4*10, sum= 6400
//         //i=2, 2*1, sum= 6420
//     }
//     console.log(sum);
//     return sum;
// }

//More easy and effective way
function digitToNumber(array) {
    return array.reduce((acc, curr, idx) => {
       return acc+curr * Math.pow(10, idx);
       //acc=0, curr=2, idx=0, 0+(2*Math.pow(10, 0)) => 0+2 => 2
       //acc=2, curr=4, idx=1, 2 + (4*Math.pow(10, 1)) => 2+40 => 42
       //acc-60, curr=6, idx=2, 42 + (6*Math.pow(10, 2)) => 42+600 => 642 
    }, 0);
}

const nums = [2, 4, 6];
const res2 = digitToNumber(nums);
// console.log(res2);
// const res = calculateNumbersTotal(nums);


//Multiplication "*" calculates before than addition "+" because "*" has higher precedence value than "+". 