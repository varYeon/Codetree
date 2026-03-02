const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

const a = input[0].split(' ').map(Number);
const n = a[0];
const m = a[1];

const nums = input[1].split(' ').map(Number);

let count = 0;

for (let i = 0; i < n; i++) {
    if (nums[i] === m) count++;
}

console.log(count);