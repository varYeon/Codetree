const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].split(' ').map(Number);

let count = 0;
let result = 0;

for (let i = 0; i <= nums.length; i++) {
    if (count === 3) {
        result = i;
        break;
    }

    if (nums[i] === 2) count++;
}

console.log(result);