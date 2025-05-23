function digitToNumber(array, radix = 10) {
    return array.reduce((acc, curr, idx) => {
        if (isNaN(curr)) {
            curr = curr.toLowerCase();
        console.log(typeof curr, curr);
        //Modification in function for hexadecimal numbers
            switch (curr) {
                case 'a':
                    curr = 10;
                    break;

                case 'b':
                    curr = 11;
                    break;

                case 'c':
                    curr = 12;
                    break;

                case 'd':
                    curr = 13;
                    break;

                case 'e':
                    curr = 14;
                    break;
                case 'f':
                    curr = 15;
                    break;
            }
        }
        return acc + curr * Math.pow(radix, idx);
    }, 0);
}

console.log(digitToNumber(["A", 5, 8], 16));

