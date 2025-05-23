const num = 0o4545;
const num2 = 0o475;
// console.log(num);
// console.log(num2);

function digitToNumber(array, radix=10) {
    return array.reduce((acc, curr, idx) => {
       return acc+curr * Math.pow(radix, idx);
       //acc=0, curr=2, idx=0, 0+(2*Math.pow(10, 0)) => 0+2 => 2
       //acc=2, curr=4, idx=1, 2 + (4*Math.pow(10, 1)) => 2+40 => 42
       //acc-60, curr=6, idx=2, 42 + (6*Math.pow(10, 2)) => 42+600 => 642 
    }, 0);
}

console.log(digitToNumber([2, 4, 6], 10));
console.log(digitToNumber([2, 4, 6], 8));
console.log(digitToNumber([2, 4, 6], 16));
console.log(digitToNumber([2, 4, 6], 2));