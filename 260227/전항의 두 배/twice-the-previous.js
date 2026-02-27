const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const first = input[0];
const second = input[1];
const arr = [];
arr.push(first, second);

for (let i = 2; i < 10; i++) {
    arr.push(arr[i - 1] + 2 * arr[i - 2]);
}

console.log(arr.join(' '));