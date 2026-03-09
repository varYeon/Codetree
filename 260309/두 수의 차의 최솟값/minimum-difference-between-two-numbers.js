const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

const all = Number(input[0]);
const nums = input[1].split(' ').map(Number);

let minDivide = 10000;

for (let i = 0; i < all; i++) {
    const a = nums[i];

    for (let j = 1; j < all; j++) {
        const b = nums[j];

        const divide = Math.abs(a - b);

        if (divide !== 0 && divide <= minDivide) minDivide = divide;
    }
}

console.log(minDivide);
