const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');

const first = Number(input[0]);
const second = Number(input[1]);
const arr = [];
arr.push(first, second);

for (let i = 2; i < 10; i++) {
    let a = arr[i - 2] + arr[i - 1];
    if (a >= 10) a %= 10;

    arr.push(a);
}

console.log(arr.join(' '));